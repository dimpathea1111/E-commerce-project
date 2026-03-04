import Link from "next/link"
import Image from "next/image"
import { Product } from "@/app/types/product"
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!

export default async function ProductDetailPage(
    { params }: { params: { id: string } }
) {
    const res = await fetch(`${BASE_URL}/api/v1/products/${params.id}`, {
        cache: "no-store"
    })

    const product: Product = await res.json()

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <Link href="/products" className="text-blue-500 hover:underline mb-4 inline-block">
                &larr; Back to Products
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* <img
          src={product.images[0]}
          alt={product.title}
          width={500}
          height={500}
          className="rounded"
        /> */}

                <div className="relative w-full h-96">
                    <Image
                        src={product.images?.[0] || "/placeholder.png"}
                        alt={product.title}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className="text-3xl font-bold">{product.title}</h1>
                    <p className="text-gray-600">{product.description}</p>
                    <p className="text-xl font-semibold">${product.price}</p>
                    <p className="text-sm text-gray-500">Category: {product.category}</p>
                    {product.rating && <p>Rating: {product.rating.rate} ⭐ ({product.rating.count} reviews)</p>}
                </div>
            </div>
        </div>
    )

}
