import { useState } from 'react';

export default function Counter(){
    const mess = document.querySelector('.Message');
    let [counter, setCounter] =useState(15);
    function AddValue(){
        if(counter>=50){
            mess.innerText = "Limit Exceed";
            return ;
        }
        setCounter(counter+1);
    }
    function RemoveValue(){
        if(counter<=0){
            mess.innerText = "Limit Exceed";
            return; 
        }
        setCounter(counter-1);

    }
    return(
        <>
        <div className=' font-bold text-center w-screen h-screen bg-green-900'>
            <h1 >Counter Program </h1>
            <h4 className='Clock'>{counter}</h4>
            <button onClick={AddValue}className='rounded-xl p-2 bg-green-500 w-20 h-17 mr-1'>Add Value</button>
            <button onClick={RemoveValue} className='rounded-xl p-2 bg-red-500 w-20 h-17 ml-1'> Remove Value</button>
            <p className='Message bg-white w-40 m-auto mt-2'></p>
            <p></p>
        </div>
        </>
    );
}