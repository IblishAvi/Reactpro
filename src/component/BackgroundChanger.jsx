import React, { useState } from 'react'

function BackgroundChanger() {

    let [color,setColor] = useState("magenta")
  return (
    
        <div className=' w-full h-screen duration-200' style={{backgroundColor:color}}>
            <div className='fixed flex flex-wrap justify-centre  bottom-12 px-2 inset-x-0'>
                <div className='flex flex-wrap justify-center shadow-md bg-white rounded-3xl px-3 py-2 '>
                <button onClick={() => setColor("white")} className= 'outline-none  py-1 shadow-lg text-black m-3 rounded-full px-3' style={{backgroundColor:"white"}} >white</button>
                <button onClick={() => setColor("red")} className='text-white m-3 rounded-full  px-3' style={{backgroundColor:"red"}}  >Red</button>
                <button onClick={() => setColor("blue")}  className='text-white m-3 style={{backgroundColor:"blue"}} bg-blue-600 rounded-full px-3'>Blue</button>
                <button onClick={() => setColor("green")} className='text-white m-3 bg-green-600 rounded-full px-3'>Green</button>
                <button onClick={() => setColor("yellow")} className='text-white m-3 bg-yellow-600 rounded-full px-3'>Yellow</button>
                <button onClick={() => setColor("gray")} className='text-white m-3 bg-gray-500 rounded-full px-3'>Gray</button>
                <button onClick={() => setColor("purple")} className='text-white m-3 bg-purple-600 rounded-full px-3'>Purple</button>
                <button onClick={() => setColor("orange")} className='text-white m-3 bg-orange-500 rounded-full px-3'>orange</button>
                <button onClick={() => setColor("red")} className='text-white m-3 bg-red-300 rounded-full px-3'>red</button>
                <button onClick={() => setColor("olive")} className='text-white m-3  rounded-full px-3' style={{backgroundColor:"olive"}}>olive</button>
                <button onClick={() => setColor("green")} className='text-white m-3 bg-green-300 rounded-full px-3'>Green</button>
                <button onClick={() => setColor("black")} className='text-white m-3 bg-black rounded-full px-3'>black</button>
                <button onClick={() => setColor("pink")} className='text-white m-3 bg-pink-900 rounded-full px-3'>Pink</button>
                <button onClick={() => setColor("olive")} className='text-white m-3 style={{backgroundColor:"olive"} bg-olivegreen-200 rounded-full  px-3'>olive</button>
                </div>
            </div>
           
        </div>
      
  )
}

export default BackgroundChanger
