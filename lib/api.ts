// const API_URL = process.env.NEXT_PUBLIC_API_URL

// export async function getAllProducts() {
//   const res = await fetch(`${API_URL}/products`)

//   return res.json()
// }

// export async function getProduct(id: number) {
//   const res = await fetch(`${API_URL}/products/${id}`)

//   return res.json()
// }


const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://api.escuelajs.co/api/v1"

export async function getAllProducts() {
  const res = await fetch(`${API_URL}/products`)

  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }

  return res.json()
}



export async function getCategories(): Promise<string[]> {
  try {
    return await fetcher<string[]>('/products/categories')
  } catch {
    const products = await getAllProducts()
    return [...new Set(products.map((p) => p.category))]
  }
}

export async function getUsers() {
  const res = await fetch('https://fakestoreapi.com/users', {
    cache: 'no-store'
  })

  if (!res.ok) {
    throw new Error('Failed to fetch users')
  }

  return res.json()
}

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!

export async function getCartByUser(userId: number) {
  const res = await fetch(`${BASE_URL}/carts/user/${userId}`, {
    cache: "no-store",
  })

  // if (!res.ok) {
  //   throw new Error("Failed to fetch cart")
  // }

  return res.json()
}


// const BASE_URL = "https://api.escuelajs.co"

export async function getProduct(id: number) {
  const res = await fetch(`${BASE_URL}/api/v1/products/${id}`, {
    cache: "no-store",
  })

  // if (!res.ok) {
  //   throw new Error("Product not found")
  // }

  return res.json()
}










