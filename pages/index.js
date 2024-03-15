import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [name, setName] = useState("First")
  const [rollNumber, setrollNumber] = useState("")
  async function submitName(){
    console.log('button Clicked ',name)
    const response  =  await axios.post("/api/hello" ,
    {
      studentName : name,
      studentRollNumber : rollNumber
    })


    console.log("reponse ",response.data);
  }
  return (
   <div className="p-10 bg-black min-h-screen ">
      <h1 className="text-red-500">
        Login 
      </h1>
      <div className="text-white ">
        <div className="my-5">

        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value={name} onChange={(e)=>{setName(e.target.value)}}  className="text-black"/>
        </div>
        <div>
        <label htmlFor="name">Roll Number</label>
        <input type="text" name="rollNumber" id="rollNumber" value={rollNumber} onChange={(e)=>{setrollNumber(e.target.value)}}  className="text-black"/>

        </div>
        <button className="m-5 p-2 bg-orange-700 rounded-lg " onClick={submitName}>Submit</button>
      </div>
   </div>
  );
}
