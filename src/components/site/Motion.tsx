import { useEffect, useRef, useState } from "react";

const SCRAMBLE_CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/.-";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function clamp(value: number) {
  return Math.min(1, Math.max(0, value));
}

type ScrambleTextProps = {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
};

/** Texto legível por padrão; o decode só é ativado depois da hidratação. */
export function ScrambleText({ text, className, delay = 0, duration = 380 }: ScrambleTextProps) {
  const [displayedText, setDisplayedText] = useState(text);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    let frame = 0;
    let timeout = 0;
    const mobileDuration = window.innerWidth < 640 ? Math.min(duration, 300) : duration;

    const start = () => {
      const startedAt = performance.now();

      const tick = (now: number) => {
        const progress = clamp((now - startedAt) / mobileDuration);
        const resolved = Math.floor(progress * (text.length + 1));
        const nextText = text
          .split("")
          .map((character, index) => {
            if (character === " ") return " ";
            if (index < resolved) return character;
            return SCRAMBLE_CHARACTERS[Math.floor(Math.random() * SCRAMBLE_CHARACTERS.length)];
          })
          .join("");

        setDisplayedText(nextText);
        if (progress < 1) {
          frame = window.requestAnimationFrame(tick);
        } else {
          setDisplayedText(text);
        }
      };

      frame = window.requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        timeout = window.setTimeout(start, delay);
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.15 },
    );

    if (textRef.current) observer.observe(textRef.current);

    return () => {
      observer.disconnect();
      window.clearTimeout(timeout);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [delay, duration, text]);

  return (
    <span
      ref={textRef}
      className={`scramble-text${className ? ` ${className}` : ""}`}
      aria-label={text}
    >
      {/* A reserva mantém a mesma métrica do texto final durante o decode. */}
      <span className="scramble-reserve" aria-hidden="true">
        {text}
      </span>
      <span className="scramble-output" aria-hidden="true">
        {displayedText}
      </span>
    </span>
  );
}
