import React, { useState } from 'react'

function BackgroundChanger() {

    let [color,setColor] = useState("olive")
  return (
    
        <div className=' bg-white w-full h-screen duration-200' style={{backgroundColor:color}}>
            
            
            <div className='fixed flex flex-wrap bg-green-400 rounded-md text-wrap justify-end align-middle mb-0 bottom-12 inset-x-0'>
                <button onClick={() => setColor("white")} className='text-white m-3 bg-white-300 rounded-md px-3'>white</button>
                <button onClick={() => setColor("red")} className='text-white m-3 bg-red-600 rounded-md  px-3'>Red</button>
                <button onClick={() => setColor("blue")}  className='text-white m-3 bg-blue-600 rounded-md px-3'>Blue</button>
                <button onClick={() => setColor("green")} className='text-white m-3 bg-green-600 rounded-md px-3'>Green</button>
                <button onClick={() => setColor("yellow")} className='text-white m-3 bg-yellow-600 rounded-md px-3'>Yellow</button>
                <button onClick={() => setColor("gray")} className='text-white m-3 bg-gray-500 rounded-md px-3'>Gray</button>
                <button onClick={() => setColor("purple")} className='text-white m-3 bg-purple-600 rounded-md px-3'>Purple</button>
                <button onClick={() => setColor("orange")} className='text-white m-3 bg-orange-500 rounded-md px-3'>orange</button>
                <button onClick={() => setColor("red")} className='text-white m-3 bg-red-300 rounded-md px-3'>red</button>
                <button onClick={() => setColor("green")} className='text-white m-3 bg-green-900 rounded-md px-3'>Green</button>
                <button onClick={() => setColor("green")} className='text-white m-3 bg-green-300 rounded-md px-3'>Green</button>
                <button onClick={() => setColor("black")} className='text-white m-3 bg-black rounded-md px-3'>black</button>
                <button onClick={() => setColor("pink")} className='text-white m-3 bg-pink-900 rounded-md px-3'>Pink</button>


            </div>
        </div>
      
  )
}

export default BackgroundChanger
