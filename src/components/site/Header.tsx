import { useEffect, useState } from "react";
import { EXTERNAL, LINKS } from "@/lib/links";

const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Trajetória", href: "#trajetoria" },
  { label: "Apex", href: "#apex" },
  { label: "Livro", href: "#livro" },
  { label: "Contato", href: "#contato" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-border bg-background/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 md:h-20">
          <a
            href="#inicio"
            className="font-display text-sm font-bold uppercase tracking-[0.28em] text-foreground"
          >
            Stefano Chaves
          </a>

          <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={LINKS.whatsapp}
              {...EXTERNAL}
              className="btn-primary hidden !px-6 !py-2.5 lg:inline-flex"
            >
              Falar com Stefano
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
            >
              <span
                className={`h-px w-6 bg-foreground transition-all duration-300 ${
                  open ? "translate-y-[3.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-px w-6 bg-foreground transition-all duration-300 ${
                  open ? "-translate-y-[3.5px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col justify-between bg-background/97 px-6 pb-10 pt-28 backdrop-blur-2xl lg:hidden">
          <nav id="mobile-navigation" aria-label="Menu mobile" className="flex flex-col gap-2">
            {NAV.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-5 font-display text-3xl font-bold uppercase tracking-tight text-foreground transition-colors hover:text-electric-soft"
                style={{ transitionDelay: `${i * 20}ms` }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={LINKS.whatsapp}
            {...EXTERNAL}
            className="btn-primary w-full"
            onClick={() => setOpen(false)}
          >
            Falar com Stefano
          </a>
        </div>
      )}
    </>
  );
}
