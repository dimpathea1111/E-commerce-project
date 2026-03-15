import Link from "next/link"
import { getProduct } from "@/lib/api"
import Image from "next/image"


export default async function ProductDetailPage({
  params,
}: {
  params: { productId: string }
}) {

  const product = await getProduct(params.productId)

  return (
    <div className="max-w-5xl mx-auto p-6">

      <Link
        href="/products"
        className="text-blue-600 mb-6 inline-block"
      >
        ← Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-10">

        {/* IMAGE */}
        <div className="relative w-full h-96 border rounded-lg">

          <Image
            src={product.images?.[0] || "/placeholder.png"}
            alt={product.title}
            fill
            className="object-contain"
          />

        </div>

        {/* DETAILS */}
        <div>

          <h1 className="text-3xl font-bold mb-4">
            {product.title}
          </h1>

          <p className="text-gray-600 mb-6">
            {product.description}
          </p>

          <p className="text-2xl font-bold mb-4">
            ${product.price}
          </p>

          <p className="mb-2">
            Category: {product.category?.name}
          </p>

          <p className="mb-4">
            Rating: ⭐⭐⭐⭐☆
          </p>

        </div>

      </div>

    </div>
  )
}