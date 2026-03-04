import { ProductCard } from "../component/product/product-card"
import { Product } from "../types/product"

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!

export default async function ProductsPage({ searchParams }: { searchParams?: { page?: string } }) {
  const page = parseInt(searchParams?.page || "1")
  const limit = 12
  const offset = (page - 1) * limit

  // Correct API URL
  const res = await fetch(`${BASE_URL}/api/v1/products?offset=${offset}&limit=${limit}`, {
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }

  const products: Product[] = await res.json()

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-4">
        {page > 1 && (
          <a
            href={`/products?page=${page - 1}`}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Prev
          </a>
        )}
        <span className="px-4 py-2">{page}</span>
        <a
          href={`/products?page=${page + 1}`}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Next
        </a>
      </div>
    </div>
  )
}