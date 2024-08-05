import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [colorChange, setColorChange] = useState('slate')

  return (
    <div className="flex justify-center items-center h-full w-full">
     <div className=" w-[30rem] flex flex-col items-center justify-center bg-slate-500 duration-700 py-8 rounded-3xl text-white" style={{backgroundColor: colorChange}}>
     <h1 className='text-3xl'>Countdown</h1>
      
        <h1 className='text-3xl mt-8 w-[8rem] bg-slate-300 rounded-3xl text-black '>{count}</h1>
        <div className="flex gap-3 justify-center mt-8">
        <button onClick={() => setCount(count + 1)} className='w-20 h-8 rounded-lg bg-slate-200 shadow-2xl text-slate-600 shadow-slate-50 hover:bg-white hover:text-black' >Increase</button>
        <button onClick={() => setCount(count - 1)} className='w-20 h-8 rounded-lg bg-slate-200 shadow-2xl text-slate-600 shadow-slate-50 hover:bg-white hover:text-black'>Decrease</button>
        
      </div>
      <div className="flex gap-3 justify-center mt-8">
        <button onClick={() => setColorChange('red')} className='w-20 h-8 rounded-lg bg-slate-200 shadow-2xl text-slate-600 shadow-slate-50 hover:bg-white hover:text-black' >Red</button>
        <button onClick={() => setColorChange('green')} className='w-20 h-8 rounded-lg bg-slate-200 shadow-2xl text-slate-600 shadow-slate-50 hover:bg-white hover:text-black'>Green</button>
        
      </div>
     </div>
    </div>
  )
}

export default App
