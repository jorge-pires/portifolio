import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-lg text-center">
        <p className="text-sm font-semibold tracking-[0.18em] text-cyan-300 uppercase">
          Erro 404
        </p>

        <h1 className="mt-3 text-4xl font-bold text-white">
          Página não encontrada
        </h1>

        <p className="mt-4 leading-7 text-slate-300">
          A página que você tentou acessar não existe ou pode ter sido movida.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-lg bg-cyan-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:outline-none"
        >
          Voltar para o início
        </Link>
      </div>
    </main>
  );
}
