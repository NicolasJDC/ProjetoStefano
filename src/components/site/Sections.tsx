import { useRef } from "react";
import {
  apexArt,
  apexPhoto,
  bookPhoto,
  bookPromo,
  communityPhoto,
  cuttingPhoto,
  gardenLogo,
  heroPhoto,
  portraitPhoto,
  professionalsPhoto,
  teachingPhoto,
} from "@/assets/media";
import { EXTERNAL, LINKS } from "@/lib/links";
import { ScrambleText } from "./Motion";
import { Reveal } from "./Reveal";
import { useScrollMotion } from "./scroll-motion";

function Label({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-10 bg-electric" aria-hidden="true" />
      <span className="text-[11px] font-bold uppercase tracking-[0.34em] text-electric-soft">
        {children}
      </span>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

const H2 =
  "font-display text-[clamp(2rem,4.6vw,3.9rem)] font-bold uppercase leading-[1.02] tracking-tight text-foreground";
const EVOLUTION = ["Técnica", "Posicionamento", "Educação", "Negócios", "Legado"];

export function Trajetoria() {
  const trajectoryRef = useRef<HTMLElement>(null);
  useScrollMotion(trajectoryRef, {
    variable: "--trajectory-progress",
    stepSelector: "[data-evolution-step]",
  });

  return (
    <section
      ref={trajectoryRef}
      id="trajetoria"
      className="trajectory-section relative scroll-mt-24 py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <Label>Trajetória</Label>
        </Reveal>
        <Reveal delay={100}>
          <h2 className={`${H2} mt-8 max-w-4xl`}>
            <ScrambleText text="Antes do palco," delay={80} />
            <br />
            <ScrambleText text="veio a cadeira" delay={190} />
            <span className="text-electric">.</span>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Anos de prática, escolhas, erros, recomeços e evolução transformaram a barbearia em algo
            maior do que uma profissão.
          </p>
        </Reveal>
        <ol
          className="evolution-track mt-14 md:mt-16"
          aria-label="Evolução profissional: técnica, posicionamento, educação, negócios e legado"
        >
          {EVOLUTION.map((step, index) => (
            <li key={step} className="evolution-step" data-evolution-step>
              <Reveal delay={index * 130} className="h-full">
                <span className="evolution-index">0{index + 1}</span>
                <span className="evolution-dot" aria-hidden="true" />
                <span className="font-display text-sm font-bold uppercase tracking-[0.18em] text-foreground md:text-base">
                  {step}
                </span>
              </Reveal>
            </li>
          ))}
        </ol>
        <Reveal delay={220}>
          <p className="mt-10 max-w-xl text-sm leading-relaxed text-muted-foreground">
            A trajetória de Stefano foi construída dentro da profissão antes de ganhar espaço fora
            dela.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

type PracticeBlockProps = {
  number: string;
  title: string;
  text: string;
  cta: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

function PracticeBlock({
  number,
  title,
  text,
  cta,
  image,
  imageAlt,
  reverse = false,
}: PracticeBlockProps) {
  return (
    <article
      className={`practice-chapter grid items-center gap-9 border-t border-border py-14 md:gap-14 md:py-20 lg:grid-cols-12 ${reverse ? "practice-chapter-reverse lg:[&>div:first-child]:order-2" : ""}`}
    >
      <Reveal variant="clip" className="lg:col-span-8">
        <div
          className={`practice-image group relative overflow-hidden ${reverse ? "aspect-[5/4]" : "aspect-[4/5] max-h-[49rem]"}`}
        >
          <img
            src={image}
            alt={imageAlt}
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/35 via-transparent to-transparent"
            aria-hidden="true"
          />
          <span className="practice-image-title" aria-hidden="true">
            {title}
          </span>
        </div>
      </Reveal>
      <div className="practice-copy lg:col-span-4">
        <Reveal delay={120}>
          <div className="flex items-center gap-4">
            <span className="font-display text-sm font-bold text-electric">{number}</span>
            <span className="h-px w-10 bg-border" aria-hidden="true" />
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-muted-foreground">
              {title}
            </span>
          </div>
        </Reveal>
        <Reveal delay={180}>
          <h3 className="mt-7 font-display text-[clamp(2.45rem,4.4vw,5.2rem)] font-bold uppercase leading-[0.9] tracking-[-0.05em] text-foreground">
            {title}
          </h3>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">{text}</p>
        </Reveal>
        <Reveal delay={300}>
          <a href={LINKS.whatsapp} {...EXTERNAL} className="link-arrow mt-8">
            {cta}
            <ArrowIcon />
          </a>
        </Reveal>
      </div>
    </article>
  );
}

export function BarbeiroEducador() {
  return (
    <section className="relative scroll-mt-24 py-12 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <Reveal>
          <h2 className={H2}>
            Dominar a técnica
            <br />
            foi só o começo<span className="text-electric">.</span>
          </h2>
        </Reveal>
        <div className="mt-8">
          <PracticeBlock
            number="01"
            title="Barbeiro"
            text="Experiência, precisão e identidade em cada trabalho. A cadeira continua sendo a base de tudo."
            cta="Agendar atendimento"
            image={cuttingPhoto}
            imageAlt="Stefano Chaves realizando um corte em cliente"
          />
          <PracticeBlock
            number="02"
            title="Educador"
            text="Conhecimento para barbeiros que querem evoluir técnica, posicionamento, mentalidade e visão de negócio."
            cta="Quero aprender"
            image={teachingPhoto}
            imageAlt="Stefano Chaves ensinando técnicas de barbearia a outros profissionais"
            reverse
          />
        </div>
      </div>
    </section>
  );
}

export function MarketPause() {
  return (
    <section className="market-pause relative overflow-hidden py-14 md:py-24">
      <div className="mx-auto w-full max-w-[96rem] px-0 md:px-8">
        <Reveal variant="clip">
          <figure className="market-frame relative overflow-hidden bg-card">
            <img
              src={professionalsPhoto}
              alt="Stefano Chaves conversando com outros profissionais da barbearia"
              loading="lazy"
              decoding="async"
              className="aspect-[5/4] w-full object-cover object-center sm:aspect-[16/7] sm:object-[center_44%]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/75 to-transparent px-6 pb-7 pt-24 font-display text-lg font-bold uppercase leading-tight tracking-tight text-foreground sm:px-10 sm:text-2xl md:max-w-3xl md:pb-10">
              Evoluir também é estar entre quem move o mercado.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

const APEX_PILLARS = [
  "Técnicas avançadas",
  "Posicionamento",
  "Comunicação",
  "Negócios",
  "Mentalidade",
  "Networking",
];

export function Apex() {
  const apexRef = useRef<HTMLElement>(null);
  useScrollMotion(apexRef, { variable: "--apex-progress" });

  return (
    <section
      ref={apexRef}
      id="apex"
      className="apex-section relative scroll-mt-24 overflow-hidden py-28 md:py-40"
    >
      <div className="mx-auto grid w-full max-w-[88rem] items-center gap-14 px-6 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">
        <Reveal variant="clip">
          <div className="apex-collage relative mx-auto max-w-2xl pb-[16%] pr-[12%]">
            <div className="apex-poster poster-glow relative overflow-hidden">
              <img
                src={apexArt}
                alt="Arte oficial do Apex Barber Garden For Men"
                loading="eager"
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="apex-live absolute bottom-0 right-0 w-[70%] overflow-hidden border border-electric/35 shadow-2xl">
              <img
                src={apexPhoto}
                alt="Stefano Chaves com profissionais durante a experiência Apex Barber"
                loading="eager"
                decoding="async"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
        <div>
          <Reveal>
            <Label>Apex Barber</Label>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="apex-title mt-8 font-display text-[clamp(3rem,5.5vw,6.4rem)] font-bold uppercase leading-[0.86] tracking-[-0.06em] text-foreground">
              <ScrambleText text="Bem-vindo" delay={90} />
              <br />
              <ScrambleText text="ao novo nível" delay={210} />
              <span className="text-electric">.</span>
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 font-display text-lg font-semibold uppercase tracking-[0.14em] text-electric-soft md:text-xl">
              O topo tem lugar pra poucos.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
              Uma experiência criada para barbeiros que querem elevar técnica, posicionamento,
              mentalidade e visão de negócio.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <ul className="apex-pillars mt-9 flex flex-wrap gap-2.5">
              {APEX_PILLARS.map((pillar, index) => (
                <li
                  key={pillar}
                  className="apex-pillar rounded-full border border-border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors duration-300 hover:border-electric hover:text-foreground"
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  {pillar}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={420}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href={LINKS.instagram} {...EXTERNAL} className="btn-electric">
                Conhecer o Apex
              </a>
              <a href={LINKS.whatsapp} {...EXTERNAL} className="btn-outline">
                Quero saber da próxima edição
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Community() {
  return (
    <section className="community-section relative overflow-hidden py-16 md:py-28">
      <div className="mx-auto grid w-full max-w-[88rem] gap-8 px-6 lg:grid-cols-[.65fr_1.65fr] lg:items-end">
        <Reveal>
          <div className="pb-5">
            <Label>Comunidade</Label>
            <h2 className="community-title mt-7 max-w-xl font-display text-[clamp(2.35rem,4.3vw,4.7rem)] font-bold uppercase leading-[0.94] tracking-[-0.045em] text-foreground">
              <span>O conhecimento</span>
              <span>ganha valor</span>
              <span>quando</span>
              <span>continua</span>
              <span>
                circulando<span className="text-electric">.</span>
              </span>
            </h2>
          </div>
        </Reveal>
        <Reveal variant="clip" delay={130}>
          <div className="community-frame relative overflow-hidden">
            <img
              src={communityPhoto}
              alt="Stefano Chaves com participantes de uma comunidade profissional"
              loading="lazy"
              decoding="async"
              className="aspect-[5/4] w-full object-cover object-center md:aspect-[16/9]"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Garden() {
  return (
    <section className="relative scroll-mt-24 py-28 md:py-36">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div>
          <Reveal>
            <Label>Ecossistema profissional</Label>
          </Reveal>
          <Reveal delay={100}>
            <h2 className={`${H2} mt-8`}>
              Parcerias que validam uma trajetória<span className="text-electric">.</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-7 max-w-lg leading-relaxed text-muted-foreground">
              Stefano faz parte de um ecossistema que conecta experiência profissional, educação,
              mercado e desenvolvimento de novos barbeiros.
            </p>
          </Reveal>
        </div>
        <Reveal variant="fade" delay={150}>
          <div className="garden-stage relative flex min-h-[24rem] items-end overflow-hidden bg-card px-8 py-8 md:min-h-[30rem] md:px-12 md:py-12">
            <img
              src={portraitPhoto}
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-[center_18%] opacity-95 grayscale"
            />
            <div className="garden-overlay absolute inset-0" aria-hidden="true" />
            <div className="relative max-w-[9rem] text-left">
              <img
                src={gardenLogo}
                alt="Logo Garden For Men"
                loading="lazy"
                decoding="async"
                className="w-full max-w-[8.5rem] object-contain"
              />
              <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.28em] text-foreground/75">
                Garden For Men
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Livro() {
  return (
    <section
      id="livro"
      className="book-section relative scroll-mt-24 overflow-hidden py-28 md:py-40"
    >
      <div
        className="book-promo-portrait pointer-events-none absolute bottom-0 right-0 hidden h-[78%] w-[25%] overflow-hidden opacity-25 lg:block"
        aria-hidden="true"
      >
        <img
          src={bookPromo}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-[82%_18%]"
        />
      </div>
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-12 lg:gap-16">
        <Reveal variant="clip" className="lg:col-span-7">
          <figure className="book-photo-frame relative overflow-hidden">
            <img
              src={bookPhoto}
              alt="Três exemplares físicos do livro Do Grifo à Navalha, de Stefano Chaves"
              loading="lazy"
              decoding="async"
              className="aspect-[5/4] w-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.02]"
            />
            <figcaption className="absolute bottom-0 left-0 bg-[#120f0b]/85 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#efe1bf] backdrop-blur-sm">
              Do Grifo à Navalha
            </figcaption>
          </figure>
        </Reveal>

        <div className="lg:col-span-5">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#b89154]" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.34em] text-[#d7b776]">
                Livro
              </span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-8 font-display text-[clamp(2.2rem,4.6vw,4rem)] font-bold uppercase leading-[1.02] tracking-tight text-[#f5ecd7]">
              Do grifo <br /> à navalha<span className="text-[#d4a85e]">.</span>
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 font-display text-lg font-semibold uppercase tracking-[0.1em] text-[#e7d5ac] md:text-xl">
              Uma história sobre cair, mudar e continuar.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 max-w-lg leading-relaxed text-[#d4c5a7]">
              Histórias reais, viradas de chave, reflexões e uma mensagem para quem ainda acredita
              que pode construir algo diferente.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <blockquote className="mt-8 border-l border-[#b89154] pl-5 font-display text-xl font-medium leading-snug text-[#f5ecd7] md:text-2xl">
              “Escrevi esse livro com a alma.”
            </blockquote>
          </Reveal>
          <Reveal delay={360}>
            <a href={LINKS.livro} {...EXTERNAL} className="book-cta mt-10">
              Conhecer o livro
              <ArrowIcon />
            </a>
          </Reveal>
        </div>

        <Reveal delay={220} className="border-t border-[#b89154]/35 pt-8 lg:col-span-12 lg:mt-4">
          <ul className="grid gap-x-7 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Histórias reais e intensas",
              "Superações e viradas de chave",
              "Reflexões ao final de cada capítulo",
              "Inspiração para continuar",
            ].map((item, index) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-relaxed text-[#d4c5a7]"
              >
                <span className="mt-0.5 font-display text-xs font-bold text-[#d4a85e]">
                  0{index + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

const CHANNELS = [
  {
    label: "Instagram",
    text: "Bastidores, trabalho, eventos e conteúdo diário.",
    cta: "Seguir @stefanochaves",
    href: LINKS.instagram,
  },
  {
    label: "YouTube",
    text: "Conteúdos, histórias e conhecimento em vídeo.",
    cta: "Assistir no YouTube",
    href: LINKS.youtube,
  },
];

export function Conteudo() {
  return (
    <section className="content-section relative scroll-mt-24 py-28 md:py-40">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <Label>Conteúdo</Label>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-8 max-w-5xl font-display text-[clamp(2.65rem,5.2vw,5.7rem)] font-bold uppercase leading-[0.91] tracking-[-0.055em] text-foreground">
            Conhecimento não fica
            <br />
            só na cadeira<span className="text-electric">.</span>
          </h2>
        </Reveal>
        <div className="content-destinations mt-14 border-y border-border">
          {CHANNELS.map((channel, index) => (
            <Reveal key={channel.label} delay={index * 120}>
              <a
                href={channel.href}
                {...EXTERNAL}
                className="content-destination group grid gap-6 py-9 transition-colors md:grid-cols-[.6fr_1.3fr_auto] md:items-center md:gap-10 md:py-12"
              >
                <span className="font-display text-4xl font-bold uppercase tracking-[-0.05em] text-foreground transition-transform duration-500 group-hover:translate-x-3 group-hover:text-electric md:text-6xl">
                  {channel.label}
                </span>
                <span className="max-w-sm leading-relaxed text-muted-foreground">
                  {channel.text}
                </span>
                <span className="content-arrow link-arrow w-fit">
                  {channel.cta}
                  <ArrowIcon />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const PATHS = [
  {
    title: "Quero um corte",
    text: "Agende seu atendimento diretamente com Stefano.",
    cta: "Agendar",
  },
  {
    title: "Quero evoluir",
    text: "Treinamentos, eventos e conteúdos para barbeiros que querem ir além.",
    cta: "Quero aprender",
  },
  {
    title: "Quero Stefano no meu projeto",
    text: "Eventos, marcas, palestras, collabs e oportunidades profissionais.",
    cta: "Contato profissional",
  },
];

export function CtaFinal() {
  const finalRef = useRef<HTMLElement>(null);
  useScrollMotion(finalRef, { variable: "--final-progress" });

  return (
    <section
      ref={finalRef}
      id="contato"
      className="final-cta relative scroll-mt-24 overflow-hidden py-32 md:py-52"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={heroPhoto}
          alt=""
          loading="lazy"
          decoding="async"
          className="final-portrait absolute inset-y-0 right-0 h-full w-full object-cover object-[70%_20%] opacity-45 grayscale lg:w-[68%]"
        />
        <div className="final-overlay absolute inset-0" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-4xl font-display text-[clamp(3.1rem,7vw,7.4rem)] font-bold uppercase leading-[0.86] tracking-[-0.065em] text-foreground">
            <ScrambleText text="Qual é o seu" delay={80} />
            <br />
            <ScrambleText text="próximo nível" delay={210} />
            <span className="text-electric">?</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-6 text-lg text-muted-foreground">Escolha por onde começar.</p>
        </Reveal>
        <div className="final-paths mt-14 border-t border-border md:mt-16">
          {PATHS.map((path, index) => (
            <Reveal key={path.title} delay={index * 110}>
              <a
                href={LINKS.whatsapp}
                {...EXTERNAL}
                className="final-path group grid gap-4 border-b border-border py-8 transition-colors md:grid-cols-[3rem_1fr_1.3fr_auto] md:items-center md:gap-7 md:py-10"
              >
                <span className="font-display text-sm font-bold text-electric">0{index + 1}</span>
                <h3 className="font-display text-2xl font-bold uppercase leading-tight tracking-[-0.035em] text-foreground transition-colors group-hover:text-electric md:text-3xl">
                  {path.title}
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                  {path.text}
                </p>
                <span className="final-path-arrow link-arrow w-fit">
                  {path.cta}
                  <ArrowIcon />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const FOOTER_LINKS = [
  { label: "Instagram", href: LINKS.instagram },
  { label: "WhatsApp", href: LINKS.whatsapp },
  { label: "YouTube", href: LINKS.youtube },
  { label: "Livro", href: LINKS.livro },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-14">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-lg font-bold uppercase tracking-[0.24em] text-foreground">
            Stefano Chaves
          </p>
          <p className="mt-3 text-sm text-muted-foreground">Barbeiro · Educador · Empreendedor</p>
        </div>
        <nav aria-label="Links do rodapé" className="flex flex-wrap gap-x-8 gap-y-3">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...EXTERNAL}
              className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground transition-colors duration-300 hover:text-electric-soft"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="mx-auto mt-12 w-full max-w-7xl px-6">
        <p className="text-xs text-muted-foreground">© 2026 Stefano Chaves.</p>
      </div>
    </footer>
  );
}
