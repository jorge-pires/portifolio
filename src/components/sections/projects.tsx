import { ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { projects } from "@/data/projects";

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
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Abrir ${project.name} em nova aba`}
              className="group block rounded-xl focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:outline-none"
            >
              <Card className="h-full overflow-hidden p-6 transition group-hover:-translate-y-1 group-hover:border-cyan-300/30">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Badge>{project.status}</Badge>

                    <h3 className="mt-4 text-2xl font-bold text-white">
                      {project.name}
                    </h3>
                  </div>

                  <ExternalLink
                    aria-hidden="true"
                    className="text-slate-400 transition group-hover:text-cyan-300"
                  />
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
