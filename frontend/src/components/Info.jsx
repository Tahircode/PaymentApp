import React from "react"
export function Info ({a,b}){
    return ( <div className="flex flex-row gap-4">
     <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold">
     {a.charAt(0).toUpperCase()}
     </div> 
     <div className="flex items-center"> <h1 className="text-lg font-bold">{a}</h1>
     {/* <h2 className="text-sm text-gray-700">{b}</h2> */}
     </div>
     </div>
    )
 }