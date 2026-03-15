'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ShoppingBag, Menu, X, LayoutDashboard } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const NAV = [
  { href: '/products', label: 'Products' },
  { href: '/users', label: 'Users' },
  { href: '/cart', label: 'Cart' },
]


export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-ink/95 bg-red-700 backdrop-blur-md text-parchment border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <ShoppingBag size={22} />
            ShopNext
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {NAV.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "px-4 py-2 rounded-xl",
                  pathname.startsWith(href)
                    ? "bg-orange-500 text-white"
                    : "text-gray-300 hover:bg-orange-500"
                )}
              >
                {label}
              </Link>
            ))}

            {/* <Link
              href="/admin"
              className="px-4 py-2 border rounded-full text-gray-300 hover:border-orange-500"
            >
              <LayoutDashboard size={16}/>Admin
              
            </Link> */}
               <Link
              href="/admin"
              className={cn(
                'ml-2 px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-1.5 border transition-all',
                pathname.startsWith('/admin')
                  ? 'border-brand-500 text-brand-400'
                  : 'border-white/30 text-white hover:border-brand-500 hover:text-brand-500 hover:border-orange-500'
              )}
            >
              <LayoutDashboard size={14} /> Admin
            </Link>

            <Link
              href="/login"
              className="ml-2 px-4 py-2 bg-orange-500 rounded-xl text-white hover:bg-orange-600 hover:text-brand-700"
            >
              Login
            </Link>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4">
          {[...NAV,
            { href: '/admin', label: 'Admin' },
            { href: '/login', label: 'Login' }
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block py-2"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}