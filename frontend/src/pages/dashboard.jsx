import React from "react";
import { Users } from "../components/users";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
export const Dashboard=()=>{
    return <div className="my-6 mx-6">
         <Appbar/>
         <Balance/>
         <Users/>
    </div>
}