import { Github, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const contactLinks = [
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
    icon: Phone,
    label: "Telefone",
    value: "(48) 98500-4407",
    href: "tel:+5548985004407"
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Conversar pelo WhatsApp",
    href: "https://wa.me/5548985004407"
  }
];

export function Contact() {
  return (
    <section id="contato" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Card className="overflow-hidden p-7 sm:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.18em] text-cyan-300 uppercase">
              Contato
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">
              Procuro minha primeira oportunidade profissional em Frontend.
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              Tenho interesse em ambientes onde eu possa entregar, receber
              feedback próximo e evoluir com boas práticas de engenharia e
              produto.
            </p>

            <address className="mt-7 grid gap-3 not-italic sm:grid-cols-2">
              {contactLinks.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={
                    label === "E-mail" || label === "Telefone"
                      ? undefined
                      : "_blank"
                  }
                  rel={
                    label === "E-mail" || label === "Telefone"
                      ? undefined
                      : "noreferrer"
                  }
                  className="bg-white/0.03 flex items-center gap-3 rounded-xl border border-white/10 p-4 text-slate-200 transition-colors hover:border-cyan-400/40 hover:text-cyan-200 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
                >
                  <Icon
                    aria-hidden="true"
                    size={20}
                    className="shrink-0 text-cyan-300"
                  />
                  <span>
                    <span className="block text-xs font-semibold tracking-wider text-slate-500 uppercase">
                      {label}
                    </span>
                    <span className="mt-1 block text-sm break-all">
                      {value}
                    </span>
                  </span>
                </a>
              ))}
            </address>

            <div className="mt-7">
              <Button asChild variant="secondary">
                <a
                  href="https://github.com/jorge-pires"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github aria-hidden="true" size={18} /> Ver GitHub
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
