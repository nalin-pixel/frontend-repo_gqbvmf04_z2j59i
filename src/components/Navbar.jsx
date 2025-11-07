import { useState } from 'react';
import { ShoppingCart, Menu, X, User } from 'lucide-react';

export default function Navbar({ cartCount = 0 }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center gap-3">
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-100 md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
          <a href="#" className="font-semibold tracking-tight text-neutral-900">
            ModaBlu
          </a>
        </div>

        <ul className="hidden items-center gap-6 text-sm md:flex">
          <li><a href="#novita" className="text-neutral-700 transition hover:text-neutral-900">Novità</a></li>
          <li><a href="#donna" className="text-neutral-700 transition hover:text-neutral-900">Donna</a></li>
          <li><a href="#uomo" className="text-neutral-700 transition hover:text-neutral-900">Uomo</a></li>
          <li><a href="#accessori" className="text-neutral-700 transition hover:text-neutral-900">Accessori</a></li>
        </ul>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-full border border-neutral-200 px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-100 md:inline-block">
            Accedi
          </button>
          <button className="relative inline-flex items-center justify-center rounded-full border border-neutral-200 p-2 hover:bg-neutral-100">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-neutral-900 px-1 text-xs font-medium text-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-neutral-200 bg-white md:hidden">
          <ul className="space-y-2 px-4 py-3 text-sm">
            <li><a href="#novita" className="block rounded-md px-2 py-2 hover:bg-neutral-100">Novità</a></li>
            <li><a href="#donna" className="block rounded-md px-2 py-2 hover:bg-neutral-100">Donna</a></li>
            <li><a href="#uomo" className="block rounded-md px-2 py-2 hover:bg-neutral-100">Uomo</a></li>
            <li><a href="#accessori" className="block rounded-md px-2 py-2 hover:bg-neutral-100">Accessori</a></li>
            <li>
              <button className="flex w-full items-center gap-2 rounded-md px-2 py-2 hover:bg-neutral-100">
                <User size={18} /> Accedi
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
