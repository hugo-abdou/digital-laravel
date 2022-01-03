import { Link } from '@inertiajs/inertia-react'
import React from 'react'

export default function Home({user}) {
    return (
         <div className="flex flex-col w-full min-h-screen justify-center items-center">
             <h1 className="text-7xl block">
                 Name: <span className="text-d-yellow">{user.name}</span>
             </h1>
             <Link method='post' href='/logout' >logout</Link>
         </div>
    )
}
