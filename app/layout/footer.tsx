import Link from "next/link"
import { ShoppingBag, Facebook, Github, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-ink text-parchment bg-amber-700 border-t border-white/10 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Logo / About */}
          <div>
            <div className="flex items-center gap-2 text-xl font-bold">
              <ShoppingBag size={22} className="text-brand-400" />
              ShopNext
            </div>

            <p className="text-sm text-stone mt-3">
              Modern e-commerce platform built with Next.js and TailwindCSS.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-3">Navigation</h3>

            <ul className="space-y-2 text-sm text-stone">
              <li>
                <Link href="/products" className="hover:text-brand-400">
                  Products
                </Link>
              </li>

              <li>
                <Link href="/users" className="hover:text-brand-400">
                  Users
                </Link>
              </li>

              <li>
                <Link href="/cart" className="hover:text-brand-400">
                  Cart
                </Link>
              </li>

              <li>
                <Link href="/login" className="hover:text-brand-400">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-3">Follow Us</h3>

            <div className="flex gap-4 text-stone">

              <a href="#" className="hover:text-brand-400">
                <Facebook size={20} />
              </a>

              <a href="#" className="hover:text-brand-400">
                <Github size={20} />
              </a>

              <a href="#" className="hover:text-brand-400">
                <Twitter size={20} />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-8 pt-4 text-center text-sm text-stone">
          © {new Date().getFullYear()} ShopNext. All rights reserved.
        </div>

      </div>
    </footer>
  )
}