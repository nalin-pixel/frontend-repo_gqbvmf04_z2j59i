import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Newsletter from './components/Newsletter';

function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-neutral-600 md:flex-row md:px-6">
        <p>© {new Date().getFullYear()} ModaBlu • Tutti i diritti riservati</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-neutral-900">Privacy</a>
          <a href="#" className="hover:text-neutral-900">Termini</a>
          <a href="#" className="hover:text-neutral-900">Contatti</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p));
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar cartCount={cart.reduce((sum, p) => sum + p.qty, 0)} />
      <main>
        <Hero />
        <ProductGrid onAddToCart={handleAddToCart} />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
