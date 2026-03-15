import type { Metadata } from 'next'
import { getAllProducts } from '@/lib/api'
import { CartClient } from '../components/cart/CartClient'
import { ShoppingCart } from 'lucide-react'

export const metadata: Metadata = { title: 'Cart' }

export default async function CartPage() {
  const all = await getAllProducts()
  const sampleProducts = all.slice(0, 3)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <div className="flex items-center gap-2 text-brand-500 font-mono text-xs uppercase tracking-widest mb-2">
          <ShoppingCart size={14} /> Your Cart
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-ink">Shopping Cart</h1>
        <p className="text-stone mt-2">Review your items before checkout.</p>
      </div>
      <CartClient products={sampleProducts} />
    </div>
  )
}
