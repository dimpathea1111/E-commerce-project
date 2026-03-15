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
        <div className="p-6 bg-gray-100">
            <h1 className="text-2xl font-bold mb-6 ">Users</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6  ">
                {users.map((user) => (
                    <Link
                        key={user.id}
                        href={`/users/${user.id}`}
                        className="border rounded-xl p-4 hover:shadow-lg  transition"
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



// import Link from "next/link"
// import Image from "next/image"

// const BASE_URL = "https://api.escuelajs.co"

// async function getUsers() {
//   const res = await fetch(`${BASE_URL}/api/v1/users`, {
//     cache: "no-store",
//   })

//   if (!res.ok) throw new Error("Failed to fetch users")

//   return res.json()
// }

// export default async function UsersPage() {
//   const users = await getUsers()

//   return (
//     <div className="max-w-6xl mx-auto p-6">

//       <h1 className="text-3xl font-bold mb-8">
//         Users
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

//         {users.map((user: any) => (

//           <Link
//             key={user.id}
//             href={`/users/${user.id}`}
//             className="border rounded-lg p-4 hover:shadow text-center"
//           >

//             {/* <Image
//               src={user.avatar}
//               alt={user.name}
//               width={100}
//               height={100}
//               className="rounded-full mx-auto mb-4"
//             /> */}

//              <img
//               src={user.avatar}
//               alt={user.name}
//               width={100}
//               height={100}
//               className="rounded-full mx-auto mb-4"
//             />

//             <h3 className="font-semibold">
//               {user.name}
//             </h3>

//             <p className="text-gray-500 text-sm">
//               {user.email}
//             </p>

//           </Link>

//         ))}

//       </div>

//     </div>
//   )
// }