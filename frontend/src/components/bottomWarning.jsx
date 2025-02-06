import {Link} from "react-router-dom"
import React from "react"
export function BottomWarning({label,ButtonText,to}){
return <div  className="py-2 text-sm flex justify-center">
        {label}
    <Link className="pointer underline pl-1 cursor-pointer" to={to}>
  {ButtonText}
    </Link>
</div>
 
}