import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

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
    <div className="min-h-screen bg-neutral-950 text-white">
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
