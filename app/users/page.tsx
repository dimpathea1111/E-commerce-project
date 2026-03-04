import { error } from "console";
import Link from "next/link";
import { Users } from "../types/user";
import Image from "next/image";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;
export default async function UserPage() {
    const res = await fetch(`${BASE_URL}/api/v1/users`, {
        cache: "no-store"
    }
    )
    
    if (!res) {
        throw new Error("fetch fail")
    }

    const users: Users[] = await res.json()

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Users</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {users.map((user) => (
                    <Link
                        key={user.id}
                        href={`/users/${user.id}`}
                        className="border rounded-xl p-4 hover:shadow-lg transition"
                    >
                        <div className="flex items-center gap-4">
                            <img
                                src={user.avatar}
                                alt={user.name}
                                width={60}
                                height={60}
                                className="rounded-full"
                            />

                            <div>
                                <p className="font-semibold">{user.name}</p>
                                <p className="text-sm text-gray-500">{user.email}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>

    )
}