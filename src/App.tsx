
import {  useState } from 'react'
import './App.css'
import Button from './components/Button/Button'
import logo from '/vite.svg'

function App() {

 

  const onclick=()=>{
    alert('clicked')
    setLoading(!loading)
  }

  const [loading,setLoading]=useState<boolean>(false)


  return (
    <div className='w-full h-screen flex flex-col gap-2 items-center justify-center bg-slate-900'>
      <Button  type='button' 
        classes='hover:bg-blue-300 '
        onClick={onclick}
        loading={loading}
        varient='primary'
        >
          submit
          <img src={logo} alt="vite logo" className='w-4 h-4'/>
      </Button>
      
      <Button  type='button' 
        classes='py-2 px-4 hover:bg-purple-500 '
        disabled
        varient='secondary'
        >
          <img src={logo} alt="vite logo" className='w-4 h-4'/>
          send
      
      </Button>
    </div>
  )
}

export default App
