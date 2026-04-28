import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col items-start">
            <Image
              src="/devora-footer.png"
              alt="DevOra Freelance - Développement web"
              width={300}
              height={100}
              className="h-auto w-45 object-contain md:w-55"
            />

            <p className="mt-4 text-sm text-neutral-500">
              © {year} DevOra. Tous droits réservés.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-neutral-600 md:justify-end">
            <Link href="/a-propos" className="transition hover:text-[#173C91]">À propos</Link>
            <Link href="/services" className="transition hover:text-[#173C91]">Services</Link>
            <Link href="/offre" className="transition hover:text-[#173C91]">Offres</Link>
            <Link href="/portfolio" className="transition hover:text-[#173C91]">Portfolio</Link>
            <Link href="/contact" className="transition hover:text-[#173C91]">Contact</Link>
            <Link href="/mentions-legales" className="transition hover:text-[#173C91]">Mentions légales</Link>
            <Link href="/politique-de-confidentialite" className="transition hover:text-[#173C91]">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}