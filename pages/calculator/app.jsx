import React, { useState } from 'react'
import App
// const [result, setResult] = useState("");
function calculator() {
    //   const Operation = (event) => {

    // setResult(result.concat(event.target.value))

    //   }
    //   const Plus=(event)=>{
    //     setResult(event+value)
    //   }
    return (
        <div className="app bg-orange-200  flex items-center justify-center h-screen flex-col" >
            <div className='c justify-items-center my-9	 border border-black w-900'>calculator
                <form className='screen max-w-screen-sm '>
                    <div className='buttons'>
                        <input placeholder='type here...' className='input grid justify-items-center items-center h-10 border border-black 		' />

                        <div className='operations-btn flex-auto justify-center	w-100 pt-4	'>
                            <button className='btn btn-yellow bg-red-300 w-14 border border-black h-10'>*</button>
                            <button className='btn btn-yellow bg-red-300 w-14 border border-black h-10'>/</button>
                            <button className='btn btn-yellow bg-red-300 w-14 border border-black h-10'>-</button>
                            <button className='btn btn-yellow bg-red-300 w-14 border border-black h-10'>+</button>
                        </div>
                        <div className='no-btn justify-items-center items-center pt-4 flex flex-wrap		'>
                            <button className='btn btn-grey bg-slate-100 w-14 h-10	border border-black	'>9</button>
                            <button className='btn btn-grey bg-slate-100 w-14 h-10	border border-black	'>8</button>
                            <button className='btn btn-grey bg-slate-100 w-14 h-10 border border-black	'>7</button>
                            <button className='btn btn-grey bg-slate-100 w-14 h-10 border border-black	'>6</button>
                            <button className='btn btn-grey bg-slate-100 w-14 h-10 border border-black	'>5</button>
                            <button className='btn btn-grey bg-slate-100 w-14 h-10 border border-black	'>4</button>
                            <button className='btn btn-grey bg-slate-100 w-14 h-10 border border-black	'>3</button>
                            <button className='btn btn-grey bg-slate-100 w-14 h-10 border border-black	'>2</button>
                            <button className='btn btn-grey bg-slate-100 w-14 h-10 border border-black	'>1</button>
                            <button className='btn btn-grey bg-slate-100 w-14 h-10 border border-black	'>0</button>
                        </div>
                        <button className='btn btn-grey bg-green-200 w-14 border border-black h-10'>.</button>
                        <button className='btn btn-equal bg-green-200 w-14 border border-black h-10'>=</button>
                        <button className='btn btn-clear bg-green-200 w-14 border border-black	 h-10	'>C</button>

                    </div>
                </form>
            </div>
        </div>

    )
}
export default calculator