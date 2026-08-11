export type Project = {
  name: string;
  description: string;
  href: string;
  status: "Publicado" | "Em desenvolvimento";
  stack: string[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    name: "Pokédex",
    description:
      "Aplicação em React publicada na Vercel para explorar Pokémon em uma interface visual e responsiva.",
    href: "https://pokedex-tau-snowy.vercel.app/",
    status: "Publicado",
    stack: ["React", "Vite", "JavaScript", "API"],
    highlights: [
      "Projeto pessoal publicado",
      "Experiência prática com React",
      "Consumo de dados externos"
    ]
  },
  {
    name: "TaskFlow",
    description:
      "Projeto Kanban criado durante meus estudos de Next.js, com foco em componentes reutilizáveis, responsividade e evolução incremental.",
    href: "https://projeto-kanban-pi.vercel.app/",
    status: "Em desenvolvimento",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Mobile-first",
      "Componentização",
      "Projeto de aprendizado contínuo"
    ]
  }
];
