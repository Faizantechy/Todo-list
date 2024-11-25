import React, { useState } from 'react'

function App() {


  const [title, setTitle] = useState('')
  const [des, setDes] = useState('')
  const [tasks, settasks] = useState([])

  const deleteTasks = (i) => {

    let copyTasks = [...tasks]
    copyTasks.splice(i, 1)
    settasks(copyTasks)

  }
  

  let renderTask= <h2>No Tasks Available</h2>

  const handleForm = (e)=>{
    
    e.preventDefault()

    settasks([...tasks, {title, des }])
    console.log(tasks);
    

    setTitle('')
    setDes('')


  }

  if (tasks.length > 0) {
    renderTask= tasks.map((t, i) => {
    
      return <div key={i} className='flex justify-between w-2/3 justify-between'><h2>{t.title}</h2>
        <h3>{t.des}</h3>
        <span className='text-red-800 font-bold text-2xl cursor-pointer' onClick={() => {
          
          deleteTasks(i)

        }}>X</span>
      
      </div>
  
    })

  }
  


  return (
    <div>

      <h1 className='text-5xl text-center font-bold text-white mt-10'> Todo-List</h1>


      <form className='flex gap-5 mt-10' onSubmit={handleForm}>

        <input type="text" className='px-5 py-1 text-2xl rounded-sm ml-10' placeholder='Enter Task' value={title} onChange={(e) => setTitle(e.target.value)} /> <br />
        

        <input type="text" className='px-5 py-`1 text-2xl rounded-sm ml-10'placeholder='Enter Description' value={des} onChange={(e)=>setDes(e.target.value)} />



        <button className='px-3 py-2 rounded-xl bg-black text-white font-bold text-2xl active:scale-[90%]'>Add Task</button>
      </form>

      <div className='w-full py-5  px-3 bg-slate-400 mt-10 text-white'>

      <ul>

          <li>{ renderTask}</li>
</ul>

      </div>


     

    </div>
  )
}

export default App