




import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardAction } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Product } from "@/app/types/product"

type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <Card className="w-full max-w-sm mx-auto overflow-hidden cursor-pointer hover:shadow-lg transition">
        {/* <div className="relative aspect-video w-full">
          <Image
            src={product.images[0]}
            alt={product.title}
            // fill
            className="object-cover"
          />
        </div> */}

        <div className="relative w-full aspect-video">
          <Image
            src={product.images[0]} // e.g. https://api.escuelajs.co/api/v1/files/1621.jpg
            alt={product.title}
            fill
            className="object-cover"
          />
        </div>

        <CardHeader>
          <CardAction>
            <Badge>${product.price}</Badge>
          </CardAction>
          <CardTitle>{product.title}</CardTitle>
          <CardDescription className="line-clamp-2">{product.description}</CardDescription>
        </CardHeader>

        <CardFooter>
          <Button className="w-full">View</Button>
        </CardFooter>
      </Card>
    </Link>
  )
}
