import { Users } from "@/app/types/user"
import Image from "next/image"

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!

export default async function UserDetailPage(
    { params }: { params: { id: string } }
) {
    // const res = await fetch(
    //     `${BASE_URL}/api/v1/users/${params.id}`,
    //     { cache: "no-store" }
    // )

    const res = await fetch(`${BASE_URL}/api/v1/users/${params.id}`, { cache: "no-store" })

    // if (!res.ok) {
    //     throw new Error("Fail to fetch user")
    // }

    const user: Users = await res.json()

    return (
        <div className="p-6 max-w-md mx-auto">
            <div className="border rounded-xl p-6 shadow">
                <img
                    src={user.avatar}
                    alt={user.name}
                    width={120}
                    height={120}
                    className="rounded-full mx-auto"
                />

                <h2 className="text-xl font-bold text-center mt-4">
                    {user.name}
                </h2>

                <p className="text-center text-gray-500">
                    {user.email}
                </p>

                <p className="text-center mt-2">
                    {/* Role: <span className="font-medium">{user.role}</span> */}
                </p>
            </div>
        </div>
    )
}