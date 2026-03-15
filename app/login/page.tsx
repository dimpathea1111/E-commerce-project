'use client'

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
// import { loginSchema, LoginType } from "@/lib/schema/login-schema"
import { loginSchema , LoginType} from "@/lib/schema/login-shema"

export default function LoginPage() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginType>({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = async (data: LoginType) => {
    console.log("Login data:", data)

    const res = await fetch("http://localhost:8080/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })

    const result = await res.json()

    if(res.ok){
      alert("Login success")
    } else {
      alert(result.message)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-md w-96"
      >

        <h1 className="text-2xl font-bold mb-6 text-center">
          Login
        </h1>

        {/* Email */}
        <div className="mb-4">
          <label>Email</label>
          <input
            {...register("email")}
            className="w-full border p-2 rounded mt-1"
            placeholder="Enter email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label>Password</label>
          <input
            type="password"
            {...register("password")}
            className="w-full border p-2 rounded mt-1"
            placeholder="Enter password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded"
        >
          Login
        </button>

      </form>

    </div>
  )
}