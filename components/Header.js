import Link from "next/link";

export default function Header(){
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-extrabold tracking-tight">
          <span className="text-2xl text-brand">Teknovashop</span>
        </Link>
        <nav className="hidden gap-6 text-sm font-medium md:flex">
          <Link href="/">Inicio</Link>
          <Link href="/categories">Categorías</Link>
          <Link href="/newsletter">Newsletter</Link>
        </nav>
      </div>
    </header>
  );
}
