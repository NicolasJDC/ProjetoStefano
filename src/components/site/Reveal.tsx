import { useEffect, useRef, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "clip" | "fade";
}

export function Reveal({ children, className, delay = 0, variant = "up" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible");
      return;
    }

    let frame = 0;

    const showImmediately = () => {
      el.classList.remove("is-motion-pending");
      el.classList.add("is-visible");
    };

    const isNearViewport = () => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight + 560 && rect.bottom > -280;
    };

    // Conteúdo próximo nunca espera o observer: em scroll rápido, mostrar é
    // preferível a perder uma animação.
    if (isNearViewport()) {
      showImmediately();
      return;
    }

    el.classList.add("is-motion-pending");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            showImmediately();
            observer.disconnect();
          }
        }
      },
      { threshold: 0.01, rootMargin: "560px 0px 380px 0px" },
    );

    observer.observe(el);

    // Alguns navegadores adiam a entrega do IntersectionObserver após um salto
    // grande de scroll. Esta checagem curta remove a janela de conteúdo oculto.
    const fallback = window.setTimeout(() => {
      if (isNearViewport()) {
        showImmediately();
        observer.disconnect();
      }
    }, 120);

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        if (isNearViewport()) {
          showImmediately();
          observer.disconnect();
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(fallback);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal reveal-${variant}${className ? ` ${className}` : ""}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
