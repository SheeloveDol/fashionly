import React from 'react'
import { useState } from "react";
import { MdOutlineMarkEmailRead } from "react-icons/md"
const Subscribe = () => {
    const [email, setEmail] = useState("");
  return (
    <div className='w-4/5 my-20 mx-auto text-center'>
      <button className=''>
        <MdOutlineMarkEmailRead className='text-xl'/>
      </button>
      <h3>Subcribe To Our Newsletter</h3>
      <p className='text-xs'>to get 15% off on your first order at checkout </p>
      <div className='my-4 mx-auto flex items-center w-3/4 bg-slate-200'>
        <input 
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            placeholder='enter email'
            type='email'
            className=' input-sm bg-slate-200 w-4/5'
        >
        </input>
        <div 
            className='mx-0 py-1 divider divider-horizontal'
        >
        </div>
        <p 
            className="m-0 p-2 text-xs cursor-pointer bg-slate-200"
        >
            Subscribe
        </p>
      </div>
    </div>
  )
}

export default Subscribe
