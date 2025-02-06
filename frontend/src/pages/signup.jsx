import { BottomWarning } from "../components/bottomWarning";
import { Button } from "../components/button";
import { Heading } from "../components/heading";
import { InputBox } from "../components/inputBox";
import { SubHeading } from "../components/subHeading";
import { useNavigate } from "react-router-dom"
import axios from "axios";

import React, { useState } from "react";
export const Signup = ()=>{
 const [firstname,setFirstname]=useState("");
 const [lastname,setLastname]=useState("");
 const [username,setUsername]=useState("");
 const [password,setPassword]=useState("");
 const navigate=useNavigate();
  
 return <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
         <Heading label={"Sign up"}/>
         <SubHeading label={"Enter your infromation to create an account"} />
        <InputBox onChange={(e)=>{
           setFirstname(e.target.value);
        }} placeholder="Tahir" label={"First Name"} />
        <InputBox onChange={(e)=>{
          setLastname(e.target.value);
        }} placeholder="Khan" label={"Last Name"} />
        <InputBox onChange={(e)=>{
           setUsername(e.target.value);
        }} placeholder="tahir01" label={"Username"} />
        <InputBox onChange={(e)=>{
          setPassword(e.target.value);
        }}
         placeholder="123456" label={"Password"} />
        <div className="pt-4">
            <Button onClick=
            {async ()=>{
             const response= await axios.post("http://localhost:4000/api/user/signup",{
                firstname:firstname,
                lastname:lastname,
                username:username,
                password:password
              });
              localStorage.setItem("token", response.data.token);
              navigate("/dashboard");
            }}  
            label={"Sign up"}/>
        </div>
        <BottomWarning label={"Already have an account?"} ButtonText={"Sign in"} to={"/signin"}/>
        </div>
      </div>
 </div>
}
