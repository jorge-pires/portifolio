"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="grid min-h-screen place-items-center bg-slate-950 px-4 text-center text-white">
      <div className="max-w-md">
        <AlertTriangle
          aria-hidden="true"
          className="mx-auto text-amber-300"
          size={40}
        />
        <h1 className="mt-5 text-2xl font-bold">Algo deu errado.</h1>
        <p className="mt-3 text-slate-400">
          A falha foi isolada para que você possa tentar renderizar a página
          novamente.
        </p>
        <Button className="mt-6" onClick={reset}>
          Tentar novamente
        </Button>
      </div>
    </main>
  );
}
