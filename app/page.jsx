"use client"
import React, { useState } from 'react'

function page() {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [maintask, setMaintask] = useState([ ])
  const submitHandler=(e)=>{
    e.preventDefault();
    setMaintask([...maintask,{title,desc}])
    setTitle("")
    setDesc("")
    
  }
  const deleterHandler=(i)=>{
    let copytask=[...maintask]
    copytask.splice(i,1)
    setMaintask(copytask)
  }

  let renderTask=<h2>No task available</h2>
  if (maintask.length>0) {
    renderTask=maintask.map((t,i)=>{
      return <ui className='flex justify-between items-center'> 
      <div className='flex justify-between items-center mb-5 w-1/2'>
         <h5 className='font-bold text-3xl' key={i}>{t.title}</h5>
         <h5 className='font-bold text-4xl' key={i}>{t.desc}</h5>
      </div>
      <button  onClick={()=>{
        deleterHandler(i)
      }} className='bg-red-700 text-white font-bold rounded px-5 py-3'>Delete</button>
      </ui>
  })
  }
   
  return (
  <>
  <h1 className='bg-black text-white p-5 text-xl font-bold text-center'> Bhaskar todo list</h1>
  <form onSubmit={submitHandler}>
    <input type="text" className='text-2xl border-2 border-zinc-800 m-5 px-4 py-2 ' placeholder='Enter your title here' value={title} onChange={(e)=>{setTitle(e.target.value);}}/>
    <input type="text" className='text-2xl border-2 border-zinc-800 m-5 px-4 py-2 ' placeholder='Enter description here' value={desc} onChange={(e)=>{setDesc(e.target.value);}}/>
    <button  className='bg-black text-white px-4 py-2 font-bold text-2xl rounded m-5' >Add task</button>
  </form>
  <hr />
  <div className='p-8 bg-slate-200'>
      {renderTask}
  </div>
  </>
  )
}

export default page