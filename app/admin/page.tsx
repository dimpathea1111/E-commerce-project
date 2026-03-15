import Link from "next/link"

export default function AdminDashboard() {
  return (
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <Link
          href="/admin/products"
          className="border rounded-lg p-6 hover:shadow"
        >
          <h2 className="text-xl font-semibold">
            Manage Products
          </h2>
          <p className="text-gray-500">
            View, create, update, delete products
          </p>
        </Link>

        <Link
          href="/products"
          className="border rounded-lg p-6 hover:shadow"
        >
          <h2 className="text-xl font-semibold">
            View Store
          </h2>
          <p className="text-gray-500">
            See public product listing
          </p>
        </Link>

        <Link
          href="/users"
          className="border rounded-lg p-6 hover:shadow"
        >
          <h2 className="text-xl font-semibold">
            Manage Users
          </h2>
          <p className="text-gray-500">
            View users information
          </p>
        </Link>

      </div>

    </div>
  )
}