import { heroPhoto } from "@/assets/media";
import { EXTERNAL, LINKS } from "@/lib/links";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="inicio" className="hero-stage relative flex min-h-svh flex-col overflow-hidden">
      <div className="hero-glow" aria-hidden="true" />

      {/* Texto */}
      <div className="hero-content relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pt-28 sm:pt-32 lg:pt-24">
        <div className="max-w-xl lg:max-w-[57%]">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-electric" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.34em] text-electric-soft">
                Stefano Chaves
              </span>
            </div>
          </Reveal>

          <h1 className="hero-heading mt-7 font-display text-[clamp(3.25rem,8.5vw,7.85rem)] font-bold uppercase leading-[0.88] tracking-[-0.055em] text-foreground">
            <span className="hero-word hero-word-1 block">
              Barbeiro<span className="text-electric">.</span>
            </span>
            <span className="hero-word hero-word-2 block">
              Educador<span className="text-electric">.</span>
            </span>
            <span className="hero-word hero-word-3 block">
              Empreendedor<span className="text-electric">.</span>
            </span>
          </h1>

          <Reveal delay={240}>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              Uma trajetória construída através da técnica, do posicionamento e da decisão de nunca
              parar de evoluir.
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#trajetoria" className="btn-primary">
                Conheça a trajetória
              </a>
              <a href={LINKS.whatsapp} {...EXTERNAL} className="btn-outline">
                Quero evoluir como barbeiro
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Imagem protagonista */}
      <div className="hero-portrait-stage relative z-[5] mt-4 flex justify-center sm:mt-6 lg:absolute lg:inset-y-0 lg:right-[-3%] lg:z-[2] lg:mt-0 lg:w-[64%] lg:items-end lg:justify-end">
        <div className="hero-portrait-mask max-h-[56svh] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_85%,transparent_100%)] sm:max-h-[62svh] lg:max-h-none lg:[mask-image:linear-gradient(to_right,transparent,black_8%,black_88%,transparent_100%)]">
          <img
            src={heroPhoto}
            alt="Stefano Chaves — barbeiro, educador e empreendedor, de blazer preto e óculos escuros"
            fetchPriority="high"
            decoding="async"
            className="hero-portrait h-auto max-h-[62svh] w-auto max-w-full object-contain object-bottom sm:max-h-[68svh] lg:h-[104svh] lg:max-h-none lg:max-w-none lg:translate-y-[4svh]"
          />
        </div>
      </div>

      {/* Indicação de scroll */}
      <div
        className="pointer-events-none absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
        aria-hidden="true"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Scroll
        </span>
        <span className="block h-10 w-px overflow-hidden bg-foreground/15">
          <span className="scroll-hint-line block h-full w-full bg-electric" />
        </span>
      </div>
    </section>
  );
}
