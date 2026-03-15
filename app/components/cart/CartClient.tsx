'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react'
// import type { Product } from '@/types'
import { Product } from '@/app/types'
import { formatPrice } from '@/lib/utils'

interface CartItem {
  product: Product
  quantity: number
}

const DEMO_IDS = [1, 2, 3] // demo items for the cart

export function CartClient({ products }: { products: Product[] }) {
  const [items, setItems] = useState<CartItem[]>(
    products.map((p, i) => ({ product: p, quantity: i + 1 }))
  )

  const total = items.reduce((sum, { product, quantity }) => sum + product.price * quantity, 0)

  function updateQty(id: number, delta: number) {
    setItems((prev) =>
      prev
        .map((item) => item.product.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item)
        .filter((item) => item.quantity > 0)
    )
  }

  function remove(id: number) {
    setItems((prev) => prev.filter((item) => item.product.id !== id))
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-24">
        <ShoppingBag size={56} className="text-stone mx-auto mb-6" />
        <h2 className="font-display text-2xl font-bold text-ink mb-3">Your cart is empty</h2>
        <p className="text-stone mb-8">Add some products to get started.</p>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 bg-brand-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-brand-600 transition-all"
        >
          Browse Products <ArrowRight size={16} />
        </Link>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Items */}
      <div className="lg:col-span-2 space-y-4">
        {items.map(({ product, quantity }) => (
          <div key={product.id} className="bg-white rounded-2xl p-4 border border-stone/20 flex gap-4 items-center">
            <div className="relative w-20 h-20 rounded-xl bg-parchment overflow-hidden flex-shrink-0">
              <Image src={product.image} alt={product.title} fill className="object-contain p-2" sizes="80px" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-ink text-sm line-clamp-2">{product.title}</h3>
              <p className="text-brand-600 font-bold mt-1">{formatPrice(product.price)}</p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <button onClick={() => updateQty(product.id, -1)} className="w-8 h-8 rounded-full border border-stone/30 flex items-center justify-center hover:border-brand-400 hover:text-brand-600 transition-all">
                <Minus size={12} />
              </button>
              <span className="w-8 text-center font-mono text-sm font-bold">{quantity}</span>
              <button onClick={() => updateQty(product.id, 1)} className="w-8 h-8 rounded-full border border-stone/30 flex items-center justify-center hover:border-brand-400 hover:text-brand-600 transition-all">
                <Plus size={12} />
              </button>
              <button onClick={() => remove(product.id)} className="w-8 h-8 rounded-full flex items-center justify-center text-stone hover:text-red-500 transition-colors ml-2">
                <Trash2 size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="lg:col-span-1">
        <div className="bg-white rounded-2xl border border-stone/20 p-6 sticky top-24">
          <h2 className="font-display text-xl font-bold text-ink mb-5">Order Summary</h2>
          <div className="space-y-3 mb-5">
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="flex justify-between text-sm">
                <span className="text-stone truncate mr-2">{product.title.slice(0, 25)}… ×{quantity}</span>
                <span className="font-semibold text-ink flex-shrink-0">{formatPrice(product.price * quantity)}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-stone/20 pt-4 flex justify-between font-bold text-ink">
            <span>Total</span>
            <span className="text-brand-600 font-display text-xl">{formatPrice(total)}</span>
          </div>
          <button className="mt-6 w-full bg-brand-500 hover:bg-brand-600 text-white font-semibold py-4 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]">
            Proceed to Checkout
          </button>
          <Link href="/products" className="block mt-3 text-center text-sm text-stone hover:text-brand-600 transition-colors">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  )
}
