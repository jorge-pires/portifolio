import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function Projects() {
  return (
    <section id="projetos" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.18em] text-cyan-300 uppercase">
            Projetos
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white">
            Evidências do que eu já consigo construir.
          </h2>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.name}
              className="group overflow-hidden p-6 transition hover:-translate-y-1 hover:border-cyan-300/30"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Badge>{project.status}</Badge>
                  <h3 className="mt-4 text-2xl font-bold text-white">
                    {project.name}
                  </h3>
                </div>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Abrir ${project.name} em nova aba`}
                  className="rounded-lg p-5 text-slate-400 transition hover:bg-white/5 hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
                >
                  <ExternalLink aria-hidden="true" />
                </a>
              </div>
              <p className="mt-4 leading-7 text-slate-300">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-400">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>• {highlight}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
