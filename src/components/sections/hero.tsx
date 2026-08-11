import { ArrowRight, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.12),transparent_32%),radial-gradient(circle_at_80%_30%,rgba(139,92,246,0.10),transparent_28%)]"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Badge className="mb-5 border-cyan-400/30 text-cyan-200">
          Disponível para oportunidade Frontend Júnior
        </Badge>
        <div className="max-w-4xl">
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-cyan-300 uppercase">
            Jorge Alberto Pires Junior
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-balance text-white sm:text-6xl">
            Desenvolvedor Frontend Júnior construindo interfaces rápidas,
            acessíveis e responsivas.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-pretty text-slate-300">
            React, Next.js, TypeScript e Tailwind CSS aplicados em projetos
            reais de estudo. Uso IA como ferramenta de produtividade, sempre
            validando arquitetura, código, acessibilidade e experiência do
            usuário.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <a href="#projetos">
                Ver projetos <ArrowRight aria-hidden="true" size={18} />
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a
                href="https://github.com/jorge-pires"
                target="_blank"
                rel="noreferrer"
              >
                <Github aria-hidden="true" size={18} /> GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
