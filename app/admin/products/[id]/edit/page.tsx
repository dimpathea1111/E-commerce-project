// "use client"

// import { useEffect,useState } from "react"
// import { useRouter } from "next/navigation"

// const BASE_URL = "https://api.escuelajs.co"

// export default function EditProductPage({params}:{params:{id:string}}){

//   const router = useRouter()

//   const [title,setTitle] = useState("")
//   const [price,setPrice] = useState("")

//   useEffect(()=>{
//     fetch(`${BASE_URL}/api/v1/products/${params.id}`)
//       .then(res=>res.json())
//       .then(data=>{
//         setTitle(data.title)
//         setPrice(data.price)
//       })
//   },[])

//   async function updateProduct(e:any){
//     e.preventDefault()

//     await fetch(`${BASE_URL}/api/v1/products/${params.id}`,{
//       method:"PUT",
//       headers:{
//         "Content-Type":"application/json"
//       },
//       body:JSON.stringify({
//         title,
//         price:Number(price)
//       })
//     })

//     router.push("/admin/products")
//   }

//   return(
//     <div className="max-w-md mx-auto p-6">

//       <h1 className="text-2xl font-bold mb-6">
//         Edit Product
//       </h1>

//       <form onSubmit={updateProduct} className="space-y-4">

//         <input
//           className="border w-full p-2"
//           value={title}
//           onChange={(e)=>setTitle(e.target.value)}
//         />

//         <input
//           className="border w-full p-2"
//           value={price}
//           onChange={(e)=>setPrice(e.target.value)}
//         />

//         <button className="bg-green-600 text-white px-4 py-2 rounded">
//           Update Product
//         </button>

//       </form>

//     </div>
//   )
// }



"use client"

import { use, useEffect, useState } from "react"
import { useRouter } from "next/navigation"

const BASE_URL = "https://api.escuelajs.co"

export default function EditProductPage({ params }: { params: Promise<{ id: string }> }) {

  const { id } = use(params)

  const router = useRouter()

  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")

  useEffect(() => {
    fetch(`${BASE_URL}/api/v1/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setTitle(data.title)
        setPrice(data.price)
      })
  }, [id])

  async function updateProduct(e: any) {
    e.preventDefault()

    await fetch(`${BASE_URL}/api/v1/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        price: Number(price)
      })
    })

    router.push("/admin/products")
  }

  return (
    <div className="max-w-md mx-auto p-6">

      <h1 className="text-2xl font-bold mb-6">
        Edit Product
      </h1>

      <form onSubmit={updateProduct} className="space-y-4">

        <input
          className="border w-full p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="border w-full p-2"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Update Product
        </button>

      </form>

    </div>
  )
}