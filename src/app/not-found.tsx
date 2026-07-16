import Link from "next/link";

export default function NotFound() {
  return (
    <main className="devora-dark-section flex min-h-screen flex-col items-center justify-center px-6 text-center text-white md:px-10">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#22D3EE]">
        404
      </p>
      <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight md:text-6xl">
        Page introuvable
      </h1>
      <p className="mt-4 max-w-3xl text-white/70">
        La page demandée n’existe pas ou a été déplacée.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="rounded-full bg-linear-to-r from-[#2563EB] via-[#7C3AED] to-[#22D3EE] px-6 py-3 font-semibold text-white shadow-lg shadow-[#2563EB]/25 transition hover:brightness-110"
        >
          Retour à l’accueil
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
        >
          Me contacter
        </Link>
      </div>
    </main>
  );
}
