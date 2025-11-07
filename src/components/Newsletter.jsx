import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-16 text-center md:px-6">
        <div className="mx-auto max-w-xl rounded-2xl border border-neutral-200 bg-white px-6 py-12 shadow-sm">
          <h3 className="font-display text-2xl font-semibold text-neutral-900">Grazie!</h3>
          <p className="mt-2 text-neutral-600">Ti abbiamo iscritto alla nostra newsletter. Presto riceverai le novità e le offerte esclusive.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <div className="grid items-center gap-8 rounded-2xl border border-neutral-200 bg-white px-6 py-10 shadow-sm md:grid-cols-2 md:px-10">
        <div>
          <h3 className="font-display text-2xl font-semibold tracking-tight text-neutral-900">Iscriviti e ottieni -10%</h3>
          <p className="mt-2 text-sm text-neutral-600">Ricevi ispirazioni di stile, anteprime e promozioni nella tua casella di posta.</p>
        </div>
        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3 sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="La tua email"
            className="h-11 flex-1 rounded-md border border-neutral-300 px-3 text-sm outline-none ring-0 placeholder:text-neutral-400 focus:border-neutral-500"
          />
          <button
            type="submit"
            className="h-11 rounded-md bg-neutral-900 px-5 text-sm font-medium text-white hover:bg-neutral-800"
          >
            Iscrivimi
          </button>
        </form>
      </div>
    </section>
  );
}
