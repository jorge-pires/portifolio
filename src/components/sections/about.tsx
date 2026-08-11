import {
  Accessibility,
  Bot,
  GitBranch,
  Linkedin,
  Mail,
  MessageCircle,
  Smartphone
} from "lucide-react";
import { Card } from "@/components/ui/card";

const principles = [
  {
    icon: Smartphone,
    title: "Mobile-first",
    text: "Começo pela menor tela e evoluo a experiência para resoluções maiores."
  },
  {
    icon: Accessibility,
    title: "Acessibilidade",
    text: "Semântica, foco visível, teclado, ARIA quando necessário e contraste fazem parte da implementação."
  },
  {
    icon: GitBranch,
    title: "Git profissional",
    text: "Commits pequenos e descritivos usando Conventional Commits em inglês."
  },
  {
    icon: Bot,
    title: "AI-first com revisão",
    text: "Uso Cursor e agentes para acelerar tarefas, sem terceirizar decisões técnicas ou validação do código."
  }
];

const contacts = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/jorge-pires-2020422ba",
    href: "https://www.linkedin.com/in/jorge-pires-2020422ba"
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "jpires.business@gmail.com",
    href: "mailto:jpires.business@gmail.com"
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "(48) 98500-4407",
    href: "https://wa.me/5548985004407"
  }
];

export function About() {
  return (
    <section id="sobre" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.18em] text-cyan-300 uppercase">
            Como eu trabalho
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white">
            Base sólida, código legível e aprendizado rápido.
          </h2>
          <p className="mt-4 leading-7 text-slate-300">
            Meu foco é transformar requisitos em interfaces que funcionem bem em
            diferentes telas e estados, mantendo componentes simples de
            entender, reutilizar e revisar.
          </p>

          <div className="mt-6 flex flex-col gap-3 text-sm text-slate-300">
            {contacts.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={label === "E-mail" ? undefined : "_blank"}
                rel={label === "E-mail" ? undefined : "noreferrer"}
                className="flex w-fit items-center gap-2 rounded-md transition-colors hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
              >
                <Icon aria-hidden="true" size={18} />
                <span className="sr-only">{label}: </span>
                {value}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map(({ icon: Icon, title, text }) => (
            <Card key={title} className="p-5">
              <Icon aria-hidden="true" className="text-cyan-300" size={22} />
              <h3 className="mt-4 font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
