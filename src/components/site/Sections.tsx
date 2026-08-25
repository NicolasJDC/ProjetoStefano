import {
  apexArt,
  apexPhoto,
  bookCover,
  communityPhoto,
  cuttingPhoto,
  gardenLogo,
  heroPhoto,
  portraitPhoto,
  professionalsPhoto,
  teachingPhoto,
} from "@/assets/media";
import { EXTERNAL, LINKS } from "@/lib/links";
import { Reveal } from "./Reveal";

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
  return (
    <section id="trajetoria" className="relative scroll-mt-24 py-28 md:py-40">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <Label>Trajetória</Label>
        </Reveal>
        <Reveal delay={100}>
          <h2 className={`${H2} mt-8 max-w-4xl`}>
            Antes do palco,
            <br />
            veio a cadeira<span className="text-electric">.</span>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Anos de prática, escolhas, erros, recomeços e evolução transformaram a barbearia em algo
            maior do que uma profissão.
          </p>
        </Reveal>
        <ol
          className="evolution-track mt-16 md:mt-20"
          aria-label="Evolução profissional: técnica, posicionamento, educação, negócios e legado"
        >
          {EVOLUTION.map((step, index) => (
            <li key={step} className="evolution-step">
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
      className={`grid items-center gap-9 border-t border-border py-14 md:gap-14 md:py-20 lg:grid-cols-12 ${reverse ? "lg:[&>div:first-child]:order-2" : ""}`}
    >
      <Reveal className="lg:col-span-7">
        <div
          className={`group relative overflow-hidden ${reverse ? "aspect-[4/3]" : "aspect-[4/5] max-h-[46rem]"}`}
        >
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/35 via-transparent to-transparent"
            aria-hidden="true"
          />
        </div>
      </Reveal>
      <div className="lg:col-span-5">
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
          <h3 className="mt-7 font-display text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
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
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="mx-auto w-full max-w-[88rem] px-4 md:px-6">
        <Reveal>
          <figure className="relative overflow-hidden border border-border bg-card">
            <img
              src={professionalsPhoto}
              alt="Stefano Chaves conversando com outros profissionais da barbearia"
              loading="lazy"
              decoding="async"
              className="aspect-[5/4] w-full object-cover object-center sm:aspect-[16/8]"
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
  return (
    <section
      id="apex"
      className="apex-section relative scroll-mt-24 overflow-hidden py-28 md:py-40"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="apex-collage relative mx-auto max-w-xl pb-[19%] pr-[10%]">
            <div className="poster-glow relative overflow-hidden">
              <img
                src={apexArt}
                alt="Arte oficial do Apex Barber Garden For Men"
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[68%] overflow-hidden border border-electric/35 shadow-2xl">
              <img
                src={apexPhoto}
                alt="Stefano Chaves com profissionais durante a experiência Apex Barber"
                loading="lazy"
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
            <h2 className={`${H2} mt-8`}>
              Bem-vindo
              <br />
              ao novo nível<span className="text-electric">.</span>
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
            <ul className="mt-9 flex flex-wrap gap-2.5">
              {APEX_PILLARS.map((pillar) => (
                <li
                  key={pillar}
                  className="rounded-full border border-border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors duration-300 hover:border-electric hover:text-foreground"
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
    <section className="relative py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 lg:grid-cols-[1fr_1.45fr] lg:items-end">
        <Reveal>
          <div className="pb-5">
            <Label>Comunidade</Label>
            <h2 className={`${H2} mt-7 max-w-xl text-[clamp(1.9rem,3.5vw,3.3rem)]`}>
              O conhecimento ganha valor quando continua circulando
              <span className="text-electric">.</span>
            </h2>
          </div>
        </Reveal>
        <Reveal delay={130}>
          <div className="relative overflow-hidden border border-border">
            <img
              src={communityPhoto}
              alt="Stefano Chaves com participantes de uma comunidade profissional"
              loading="lazy"
              decoding="async"
              className="aspect-[5/4] w-full object-cover object-center md:aspect-[16/10]"
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
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 lg:grid-cols-[1.2fr_.8fr] lg:gap-20">
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
        <Reveal delay={150}>
          <div className="relative flex min-h-72 items-center justify-center overflow-hidden border border-border bg-card px-10 py-14">
            <img
              src={portraitPhoto}
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover opacity-20 grayscale"
            />
            <div className="absolute inset-0 bg-background/35" aria-hidden="true" />
            <div className="relative text-center">
              <img
                src={gardenLogo}
                alt="Logo Garden For Men"
                loading="lazy"
                decoding="async"
                className="mx-auto w-full max-w-[11rem] object-contain"
              />
              <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.28em] text-muted-foreground">
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
    <section id="livro" className="relative scroll-mt-24 overflow-hidden py-28 md:py-40">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-24">
        <Reveal className="flex justify-center lg:justify-start">
          <div className="book-cover w-full max-w-[300px] -rotate-2 overflow-hidden rounded-r-md rounded-l-sm transition-transform duration-700 ease-out hover:rotate-0 md:max-w-[340px]">
            <img
              src={bookCover}
              alt="Capa do livro Do Grifo à Navalha, de Stefano Chaves"
              loading="lazy"
              decoding="async"
              className="aspect-[3/4.3] w-full object-cover"
            />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <Label>Livro</Label>
          </Reveal>
          <Reveal delay={100}>
            <h2 className={`${H2} mt-8`}>
              Do grifo
              <br />à navalha<span className="text-electric">.</span>
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 font-display text-lg font-semibold uppercase tracking-[0.14em] text-foreground md:text-xl">
              A história de um sonhador.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
              Uma trajetória de escolhas, quedas, aprendizado e persistência transformada em
              história.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <a href={LINKS.livro} {...EXTERNAL} className="btn-primary mt-10">
              Conhecer o livro
            </a>
          </Reveal>
        </div>
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
    <section className="relative scroll-mt-24 py-28 md:py-40">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <Label>Conteúdo</Label>
        </Reveal>
        <Reveal delay={100}>
          <h2 className={`${H2} mt-8 max-w-4xl`}>
            Conhecimento não fica
            <br />
            só na cadeira<span className="text-electric">.</span>
          </h2>
        </Reveal>
        <div className="mt-14 border-y border-border">
          {CHANNELS.map((channel, index) => (
            <Reveal key={channel.label} delay={index * 120}>
              <a
                href={channel.href}
                {...EXTERNAL}
                className="group grid gap-6 py-9 transition-colors hover:text-electric md:grid-cols-[.6fr_1.3fr_auto] md:items-center md:gap-10 md:py-12"
              >
                <span className="font-display text-3xl font-bold uppercase tracking-tight text-foreground transition-transform duration-300 group-hover:translate-x-2 group-hover:text-electric md:text-5xl">
                  {channel.label}
                </span>
                <span className="max-w-sm leading-relaxed text-muted-foreground">
                  {channel.text}
                </span>
                <span className="link-arrow w-fit">
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
  return (
    <section id="contato" className="relative scroll-mt-24 overflow-hidden py-28 md:py-44">
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={heroPhoto}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-y-0 right-0 h-full w-full object-cover object-[70%_20%] opacity-30 grayscale lg:w-[60%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/88 to-background/25" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <h2 className={`${H2} max-w-3xl`}>
            Qual é o seu
            <br />
            próximo nível<span className="text-electric">?</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-6 text-lg text-muted-foreground">Escolha por onde começar.</p>
        </Reveal>
        <div className="mt-14 border-t border-border md:mt-16">
          {PATHS.map((path, index) => (
            <Reveal key={path.title} delay={index * 110}>
              <a
                href={LINKS.whatsapp}
                {...EXTERNAL}
                className="group grid gap-4 border-b border-border py-8 transition-colors hover:border-electric md:grid-cols-[3rem_1fr_1.3fr_auto] md:items-center md:gap-7 md:py-10"
              >
                <span className="font-display text-sm font-bold text-electric">0{index + 1}</span>
                <h3 className="font-display text-xl font-bold uppercase leading-tight tracking-tight text-foreground transition-colors group-hover:text-electric md:text-2xl">
                  {path.title}
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                  {path.text}
                </p>
                <span className="link-arrow w-fit">
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
