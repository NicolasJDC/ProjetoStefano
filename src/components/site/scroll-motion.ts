import { useEffect, type RefObject } from "react";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function clamp(value: number) {
  return Math.min(1, Math.max(0, value));
}

type ScrollMotionOptions = {
  variable: string;
  stepSelector?: string;
};

/**
 * Atualiza uma custom property diretamente no elemento observado. Isso evita
 * re-renders durante o scroll e mantém a animação restrita ao viewport.
 */
export function useScrollMotion<T extends HTMLElement>(
  ref: RefObject<T | null>,
  { variable, stepSelector }: ScrollMotionOptions,
) {
  useEffect(() => {
    const element = ref.current;
    if (!element || prefersReducedMotion()) return;

    let frame = 0;
    let isNearViewport = false;
    const steps = stepSelector
      ? Array.from(element.querySelectorAll<HTMLElement>(stepSelector))
      : [];

    const update = () => {
      frame = 0;
      if (!isNearViewport) return;

      const rect = element.getBoundingClientRect();
      const distance = window.innerHeight * 0.72 - rect.top;
      const travel = rect.height + window.innerHeight * 0.34;
      const progress = clamp(distance / travel);

      element.style.setProperty(variable, progress.toFixed(3));

      steps.forEach((step, index) => {
        const threshold = steps.length > 1 ? index / (steps.length - 1) : 0;
        step.classList.toggle("is-passed", progress > threshold + 0.11);
        step.classList.toggle(
          "is-active",
          progress >= threshold - 0.08 && progress <= threshold + 0.18,
        );
      });
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isNearViewport = entry.isIntersecting;
        if (isNearViewport) requestUpdate();
      },
      { rootMargin: "35% 0px 35% 0px" },
    );

    observer.observe(element);
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate, { passive: true });
    requestUpdate();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [ref, stepSelector, variable]);
}
