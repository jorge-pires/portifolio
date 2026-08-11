"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#inicio" className="font-bold tracking-tight text-white">
          JP<span className="text-cyan-400">.</span>
          <span className="sr-only">Ir para o início</span>
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-1 md:flex"
        >
          {links.map((link) => (
            <Button key={link.href} asChild variant="ghost">
              <a href={link.href}>{link.label}</a>
            </Button>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-200 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-navigation"
          aria-label="Navegação móvel"
          className="border-t border-white/10 px-4 py-3 md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-slate-200 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
