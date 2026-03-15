
import Link from "next/link"
import Image from "next/image"
import { Product } from "@/app/types/product"

type Props = {
  product: Product
}

export function ProductCard({ product }: Props) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="border rounded-lg p-4 hover:shadow-lg transition bg-white">

        <div className="relative w-full h-48 mb-4">
          {/* <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
          /> */}

          {/* <Image
  src={product.images?.[0] || "/placeholder.png"}
  alt={product.title}
  fill
  className="object-contain"
/> */}

           <img
            src={product.image}
            alt={product.title}
            // fill
            className="object-contain"
          />
        </div>

        <h3 className="font-semibold line-clamp-2">
          {product.title}
        </h3>

        <p className="text-orange-500 font-bold mt-2">
          ${product.price}
        </p>

      </div>
    </Link>
  )
}
