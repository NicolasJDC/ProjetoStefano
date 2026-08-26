import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import {
  Apex,
  BarbeiroEducador,
  Community,
  Conteudo,
  CtaFinal,
  Garden,
  Livro,
  MarketPause,
  SiteFooter,
  Trajetoria,
} from "@/components/site/Sections";
import { LINKS } from "@/lib/links";
import { SITE_DESCRIPTION, SITE_URL } from "@/lib/site";

const TITLE = "Stefano Chaves | Barbeiro, Educador e Empreendedor";
const OG_IMAGE = `${SITE_URL}/stefano-chaves-og.jpg`;

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      {
        name: "description",
        content: SITE_DESCRIPTION,
      },
      {
        property: "og:title",
        content: TITLE,
      },
      {
        property: "og:description",
        content: SITE_DESCRIPTION,
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Stefano Chaves — Barbeiro, Educador e Empreendedor" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: SITE_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:image:alt", content: "Stefano Chaves, Barbeiro, Educador e Empreendedor" },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Stefano Chaves",
          jobTitle: "Barbeiro, Educador e Empreendedor",
          sameAs: [LINKS.instagram, LINKS.youtube],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Trajetoria />
        <BarbeiroEducador />
        <MarketPause />
        <Apex />
        <Community />
        <Garden />
        <Livro />
        <Conteudo />
        <CtaFinal />
      </main>
      <SiteFooter />
    </div>
  );
}
