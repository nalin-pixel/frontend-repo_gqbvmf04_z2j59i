import { Flame, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(236,72,153,0.25),transparent),radial-gradient(40%_40%_at_100%_0%,rgba(34,197,94,0.18),transparent)]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 lg:py-24">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/70 px-3 py-1 text-xs font-medium text-neutral-300">
            <Flame size={14} className="text-fuchsia-500" /> Drop Limitato 11.11
          </div>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            Streetwear che accende la città
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-neutral-300 md:text-lg">
            Hoodie premium, puffer jacket e sneakers in edizione limitata con dettagli riflettenti e palette neon.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#drop" className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-100">
              Compra il Drop <ArrowRight size={16} />
            </a>
            <a href="#sneakers" className="inline-flex items-center justify-center rounded-md border border-neutral-800 bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-900/80">
              Sneakers
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl shadow-fuchsia-500/10 ring-1 ring-inset ring-neutral-800">
            <img
              src="https://images.unsplash.com/photo-1520975922284-9b9d302d1f01?q=80&w=1500&auto=format&fit=crop"
              alt="Streetwear look"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
