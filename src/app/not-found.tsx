import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
        404
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight">
        Page introuvable
      </h1>
      <p className="mt-4 max-w-xl text-gray-600">
        La page demandée n’existe pas ou a été déplacée.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="rounded-xl bg-black px-6 py-3 text-white transition hover:bg-gray-900"
        >
          Retour à l’accueil
        </Link>
        <Link
          href="/contact"
          className="rounded-xl border px-6 py-3 transition hover:bg-gray-50"
        >
          Me contacter
        </Link>
      </div>
    </main>
  );
}
