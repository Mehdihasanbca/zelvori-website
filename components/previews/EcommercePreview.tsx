'use client';

import React, { useState } from 'react';
import {
  ShoppingCart,
  Search,
  Plus,
  Minus,
  Trash2,
  CheckCircle,
  X,
  CreditCard,
  ShieldCheck,
  RotateCcw,
} from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: 'Hardware' | 'Accessories';
  price: number;
  rating: number;
  stock: string;
  badge?: string;
}

const mockProducts: Product[] = [
  {
    id: 'prod-1',
    name: 'Precision Developer Mechanical Keyboard',
    category: 'Hardware',
    price: 8999,
    rating: 4.9,
    stock: 'In Stock',
    badge: 'Hot Seller',
  },
  {
    id: 'prod-2',
    name: 'Thunderbolt 4 Quad-Display Dock',
    category: 'Hardware',
    price: 14499,
    rating: 4.8,
    stock: 'In Stock',
  },
  {
    id: 'prod-3',
    name: 'Magnetic Anodized Aluminum Laptop Stand',
    category: 'Accessories',
    price: 2499,
    rating: 4.7,
    stock: 'In Stock',
  },
  {
    id: 'prod-4',
    name: 'Braided 240W USB-C High-Speed Cable (2m)',
    category: 'Accessories',
    price: 1299,
    rating: 4.9,
    stock: 'In Stock',
    badge: 'Popular',
  },
];

export function EcommercePreview() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Hardware' | 'Accessories'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<{ [id: string]: number }>({ 'prod-1': 1 });
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  const filteredProducts = mockProducts.filter((p) => {
    const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const cartItemCount = Object.values(cart).reduce((a, b) => a + b, 0);

  const cartTotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const product = mockProducts.find((p) => p.id === id);
    return sum + (product ? product.price * qty : 0);
  }, 0);

  const addToCart = (id: string) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) => {
      const current = prev[id] || 0;
      const next = current + delta;
      if (next <= 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: next };
    });
  };

  const handleSimulatedCheckout = () => {
    setCheckoutSuccess(true);
    setTimeout(() => {
      setCheckoutSuccess(false);
      setCheckoutModalOpen(false);
      setCart({});
      setCartOpen(false);
    }, 2500);
  };

  return (
    <div className="space-y-6">
      {/* Top Header & Cart Bar */}
      <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center font-bold text-cyan-400 text-sm">
            E
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Apex Storefront Architecture</h4>
            <p className="text-[11px] text-slate-400">Headless Next.js Catalog · Simulated Razorpay/Stripe Flow</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              setCart({ 'prod-1': 1 });
              setSelectedCategory('All');
              setSearchQuery('');
              setCheckoutSuccess(false);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-400 hover:text-white bg-slate-800"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Demo</span>
          </button>

          <button
            type="button"
            onClick={() => setCartOpen(true)}
            className="relative flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs transition-all shadow-md"
            aria-label={`Open shopping cart with ${cartItemCount} items`}
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Cart</span>
            {cartItemCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-slate-950 text-cyan-300 text-[10px] font-mono font-bold flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Persistent Static Safe Simulation Notice */}
      <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>
            <strong>Simulated Checkout &amp; Storefront Sandbox:</strong> Real-time cart calculations with simulated payment. No real payment gateways or bank accounts are connected.
          </span>
        </div>
        <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/40">
          TEST MODE
        </span>
      </div>

      {/* Catalog Search & Filter Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
        <div className="sm:col-span-8 relative">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search engineering hardware, docks, accessories..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        <div className="sm:col-span-4 flex items-center gap-1.5 bg-slate-900/80 p-1 rounded-xl border border-slate-800 text-xs">
          {(['All', 'Hardware', 'Accessories'] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`flex-1 py-1.5 px-2 rounded-lg text-[11px] font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredProducts.map((p) => (
          <div
            key={p.id}
            className="p-5 rounded-2xl bg-[#0b1120] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-mono text-cyan-400 text-[10px] uppercase">{p.category}</span>
                {p.badge && (
                  <span className="px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/30 text-[10px] font-semibold">
                    {p.badge}
                  </span>
                )}
              </div>
              <h5 className="text-sm font-semibold text-white group-hover:text-cyan-200 transition-colors leading-snug">
                {p.name}
              </h5>
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
              <div>
                <span className="text-slate-400 text-[10px]">Price</span>
                <div className="text-base font-bold text-white font-mono">
                  ₹{p.price.toLocaleString('en-IN')}
                </div>
              </div>

              <button
                type="button"
                onClick={() => addToCart(p.id)}
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-cyan-400 hover:text-slate-950 text-slate-200 border border-slate-700 transition-all flex items-center gap-1.5 text-xs font-semibold"
                title={`Add ${p.name} to demo cart`}
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Slide-Over Cart Drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end">
          <div className="w-full max-w-md bg-[#0a0f1d] border-l border-slate-800 h-full p-6 flex flex-col justify-between shadow-2xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-cyan-400" />
                  <h4 className="text-base font-bold text-white">Your Shopping Cart</h4>
                </div>
                <button
                  type="button"
                  onClick={() => setCartOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Cart Items List */}
              <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-1">
                {Object.keys(cart).length === 0 ? (
                  <p className="text-xs text-slate-400 py-8 text-center">Your demo cart is currently empty.</p>
                ) : (
                  Object.entries(cart).map(([id, qty]) => {
                    const product = mockProducts.find((p) => p.id === id);
                    if (!product) return null;
                    return (
                      <div
                        key={id}
                        className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3 text-xs"
                      >
                        <div className="space-y-0.5 flex-1">
                          <div className="font-semibold text-white leading-tight">{product.name}</div>
                          <div className="text-cyan-400 font-mono">₹{product.price.toLocaleString('en-IN')} each</div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => updateQuantity(id, -1)}
                            className="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-4 text-center font-mono font-bold text-white">{qty}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(id, 1)}
                            className="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/* Cart Footer */}
            <div className="pt-4 border-t border-slate-800 space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Subtotal</span>
                  <span className="font-mono text-white">₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Shipping (Express Courier)</span>
                  <span className="font-mono text-emerald-400">FREE</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-slate-800">
                  <span>Estimated Total</span>
                  <span className="font-mono text-cyan-300">₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button
                type="button"
                disabled={cartTotal === 0}
                onClick={() => setCheckoutModalOpen(true)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-300 hover:from-cyan-300 hover:to-sky-200 text-slate-950 font-bold text-xs shadow-lg transition-all disabled:opacity-50"
              >
                Proceed to Simulated Checkout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Simulated Checkout Modal */}
      {checkoutModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-[#0a0f1d] border border-slate-800 rounded-3xl p-6 space-y-5 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setCheckoutModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-cyan-400 font-semibold font-mono">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Simulated Payment Gateway</span>
              </div>
              <h4 className="text-xl font-bold text-white">Order Finalization Sandbox</h4>
            </div>

            <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-800/50 text-[11px] text-cyan-200">
              ⚠️ <strong>Safe Sandbox Notice:</strong> No real payment gateways are connected. No credit cards, bank accounts, or real funds will be charged.
            </div>

            {checkoutSuccess ? (
              <div className="p-6 rounded-2xl bg-emerald-950/70 border border-emerald-600 text-center space-y-2">
                <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
                <h5 className="text-base font-bold text-white">Simulated Payment Succeeded!</h5>
                <p className="text-xs text-emerald-200">
                  Demo order #ZEL-84920 registered. Closing drawer...
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span>Demo Order Summary:</span>
                    <span className="font-mono font-bold text-white">₹{cartTotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Payment Method: Synthetic Token (Test Mode)
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleSimulatedCheckout}
                  className="w-full py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Execute Simulated Payment</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
