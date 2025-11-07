import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-neutral-50 to-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-14 md:grid-cols-2 md:px-6 lg:py-24">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700">
            <Star size={14} className="text-amber-500" /> Nuova Collezione AI 24/25
          </div>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
            Eleganza quotidiana, stile senza tempo
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-neutral-600 md:text-lg">
            Scopri i capi essenziali per un guardaroba moderno: tessuti di qualità, linee pulite e design italiano.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#novita" className="inline-flex items-center justify-center rounded-md bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800">
              Scopri le novità
            </a>
            <a href="#uomo" className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50">
              Uomo
            </a>
            <a href="#donna" className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50">
              Donna
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1500&auto=format&fit=crop"
              alt="Modella con cappotto"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-neutral-200/50 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
