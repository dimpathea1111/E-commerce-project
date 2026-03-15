import Link from "next/link"
import Image from "next/image"

const BASE_URL = "https://api.escuelajs.co"

async function getProducts() {
  const res = await fetch(`${BASE_URL}/api/v1/products`, {
    cache: "no-store",
  })

  return res.json()
}

export default async function AdminProductsPage() {

  const products = await getProducts()

  return (
    <div className="max-w-6xl mx-auto p-6">

      <div className="flex justify-between mb-6">

        <h1 className="text-3xl font-bold">
          Manage Products
        </h1>

        <Link
          href="/admin/products/create"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add Product
        </Link>

      </div>

      <table className="w-full border">

        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Image</th>
            <th className="p-3">Title</th>
            <th className="p-3">Price</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>

          {products.slice(0,10).map((product:any)=>(
            <tr key={product.id} className="border-t">

              <td className="p-3">
                <Image
                  src={product.images?.[0]}
                  alt={product.title}
                  width={50}
                  height={50}
                />
              </td>

              <td className="p-3">
                {product.title}
              </td>

              <td className="p-3">
                ${product.price}
              </td>

              <td className="p-3 flex gap-3">

                <Link
                  href={`/admin/products/${product.id}/edit`}
                  className="text-blue-600"
                >
                  Edit
                </Link>

                <button className="text-red-600">
                  Delete
                </button>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  )
}