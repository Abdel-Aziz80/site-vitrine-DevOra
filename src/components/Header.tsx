import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/Logo-site-devora.svg"
            alt="Logo DevOra"
            width={44}
            height={44}
            priority
            className="h-11 w-11"
          />
          <div className="leading-tight">
            <span className="block text-2xl font-bold tracking-tight text-neutral-900">
              DevOra
            </span>
            <span className="block text-sm text-[#D97757]">
              Développement web
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-700 transition hover:text-[#D97757]"
            >
              {link.label}
            </Link>
          ))}
        </div>

      </nav>
    </header>
  );
}