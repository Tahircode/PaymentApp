import React, { useState } from "react"
export const Balance = ({ value }) => {
    const [balance,setBalance]=useState(0);
    return <div className="flex">
        <div className="font-bold text-lg">
            Your balance
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs {value}
        </div>
    </div>
}







