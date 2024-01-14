import React, { useEffect } from 'react'
import { useState } from "react";

const Counter = () => {



  const  [count, setCount] = useState(0)
 const test= '';
  return (
    <>
    <div className='m-auto w-25 my-4'>

   
    <h1 className='text-center'>Counter</h1>
    <h5 className='text-center'>{count}</h5>
    <div className='d-flex gap-3'>

    
    <button onClick={()=> setCount(count+1)} className="btn btn-success">Increase</button>
    <button onClick={()=> setCount(0)} className="btn btn-outline-warning ">Reset</button>
    <button onClick={()=> setCount(count-1)}  type="button" className="btn btn-danger">Decrease</button>
    
    </div>
    </div>
    </>
  )
}

export default Counter