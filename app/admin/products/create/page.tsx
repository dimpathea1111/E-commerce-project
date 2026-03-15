"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

const BASE_URL = "https://api.escuelajs.co"

export default function CreateProductPage() {

  const router = useRouter()

  const [title,setTitle] = useState("")
  const [price,setPrice] = useState("")
  const [image,setImage] = useState("")

  async function handleSubmit(e:any){
    e.preventDefault()

    await fetch(`${BASE_URL}/api/v1/products`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        title,
        price:Number(price),
        description:"New product",
        categoryId:1,
        images:[image]
      })
    })

    router.push("/admin/products")
  }

  return(
    <div className="max-w-md mx-auto p-6">

      <h1 className="text-2xl font-bold mb-6">
        Create Product
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          placeholder="Title"
          className="border w-full p-2"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />

        <input
          placeholder="Price"
          className="border w-full p-2"
          value={price}
          onChange={(e)=>setPrice(e.target.value)}
        />

        <input
          placeholder="Image URL"
          className="border w-full p-2"
          value={image}
          onChange={(e)=>setImage(e.target.value)}
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Create Product
        </button>

      </form>

    </div>
  )
}