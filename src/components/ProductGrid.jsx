const products = [
  {
    id: 'p1',
    name: 'Hoodie Oversize Neon',
    price: 89.9,
    image:
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1400&auto=format&fit=crop',
    tag: 'Nuovo',
  },
  {
    id: 'p2',
    name: 'Puffer Jacket Reflective',
    price: 149.9,
    image:
      'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1400&auto=format&fit=crop',
    tag: 'Drop',
  },
  {
    id: 'p3',
    name: 'Cargo Pants Tech',
    price: 79.9,
    image:
      'https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'p4',
    name: 'Sneakers Mono Chunky',
    price: 119.9,
    image:
      'https://images.unsplash.com/photo-1544441893-226bad4cb445?q=80&w=1400&auto=format&fit=crop',
  },
];

export default function ProductGrid({ onAddToCart }) {
  return (
    <section id="drop" className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Drop in evidenza
          </h2>
          <p className="mt-1 text-sm text-neutral-400">Le scelte più hype della settimana</p>
        </div>
        <a href="#" className="text-sm font-medium text-neutral-200 hover:text-white">
          Vedi tutti
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {products.map((p) => (
          <article key={p.id} className="group">
            <div className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">
              <img
                src={p.image}
                alt={p.name}
                className="aspect-[4/5] w-full object-cover transition duration-300 group-hover:scale-105"
                loading="lazy"
              />
              {p.tag && (
                <span className="absolute left-2 top-2 rounded-full bg-neutral-950/80 px-2 py-1 text-xs font-medium text-white ring-1 ring-white/10">
                  {p.tag}
                </span>
              )}
            </div>
            <div className="mt-3 flex items-start justify-between gap-2">
              <div>
                <h3 className="text-sm font-medium text-white">{p.name}</h3>
                <p className="mt-1 text-sm text-neutral-400">€ {p.price.toFixed(2)}</p>
              </div>
              <button
                onClick={() => onAddToCart?.(p)}
                className="rounded-md bg-white px-3 py-2 text-xs font-medium text-neutral-900 hover:bg-neutral-200"
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
