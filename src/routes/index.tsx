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

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Stefano Chaves | Barbeiro, Educador e Empreendedor" },
      {
        name: "description",
        content:
          "Conheça Stefano Chaves, sua trajetória na barbearia, projetos, conteúdos, Apex Barber, livro e atuação na formação de novos profissionais.",
      },
      {
        property: "og:title",
        content: "Stefano Chaves | Barbeiro, Educador e Empreendedor",
      },
      {
        property: "og:description",
        content:
          "Conheça Stefano Chaves, sua trajetória na barbearia, projetos, conteúdos, Apex Barber, livro e atuação na formação de novos profissionais.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
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
