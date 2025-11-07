const sampleProducts = [
  {
    id: 'p1',
    name: 'Cappotto in Lana',
    price: 169.9,
    image:
      'https://images.unsplash.com/photo-1548883354-aa817a2e3b1a?q=80&w=1400&auto=format&fit=crop',
    tag: 'Novità',
  },
  {
    id: 'p2',
    name: 'Maglione Oversize',
    price: 79.9,
    image:
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1400&auto=format&fit=crop',
    tag: 'Best Seller',
  },
  {
    id: 'p3',
    name: 'Pantalone Tailored',
    price: 99.9,
    image:
      'https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'p4',
    name: 'Camicia Oxford',
    price: 69.9,
    image:
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1400&auto=format&fit=crop',
  },
];

export default function ProductGrid({ onAddToCart }) {
  return (
    <section id="novita" className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
            Scelti per te
          </h2>
          <p className="mt-1 text-sm text-neutral-600">I capi più amati della settimana</p>
        </div>
        <a href="#" className="text-sm font-medium text-neutral-900 hover:underline">
          Vedi tutti
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {sampleProducts.map((p) => (
          <article key={p.id} className="group">
            <div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-white">
              <img
                src={p.image}
                alt={p.name}
                className="aspect-[4/5] w-full object-cover transition duration-300 group-hover:scale-105"
                loading="lazy"
              />
              {p.tag && (
                <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-neutral-900">
                  {p.tag}
                </span>
              )}
            </div>
            <div className="mt-3 flex items-start justify-between gap-2">
              <div>
                <h3 className="text-sm font-medium text-neutral-900">{p.name}</h3>
                <p className="mt-1 text-sm text-neutral-600">€ {p.price.toFixed(2)}</p>
              </div>
              <button
                onClick={() => onAddToCart?.(p)}
                className="rounded-md bg-neutral-900 px-3 py-2 text-xs font-medium text-white hover:bg-neutral-800"
              >
                Aggiungi
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
