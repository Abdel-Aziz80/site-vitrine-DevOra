import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-2xl font-bold tracking-tight text-neutral-900">
              DevOra
            </p>
            <p className="mt-2 text-sm text-neutral-500">
              Développement web
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-neutral-600 md:justify-end">
            <Link href="/a-propos" className="transition hover:text-[#D97757]">
              À propos
            </Link>
            <Link href="/services" className="transition hover:text-[#D97757]">
              Services
            </Link>
            <Link href="/offre" className="transition hover:text-[#D97757]">
              Offre
            </Link>
            <Link href="/portfolio" className="transition hover:text-[#D97757]">
              Portfolio
            </Link>
            <Link href="/contact" className="transition hover:text-[#D97757]">
              Contact
            </Link>
            <Link
              href="/mentions-legales"
              className="transition hover:text-[#D97757]"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-de-confidentialite"
              className="transition hover:text-[#D97757]"
            >
              Confidentialité
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-black/5 pt-5 flex flex-col gap-2 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>© {year} DevOra. Tous droits réservés.</p>
          <p>Exploité par SAS HarmoniaWear</p>
        </div>
      </div>
    </footer>
  );
}