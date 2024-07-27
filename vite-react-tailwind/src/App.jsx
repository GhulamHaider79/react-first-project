import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
     <div className='w-full h-screen duration-300 bg-slate-500' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-8 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3
        py-2 rounded-3xl'>
          <button onClick={() => setColor('yellow')} className='outline-none px-4 py-2 rounded-full text-black shadow-lg'>Yellow</button>
          <button  onClick={() => setColor('green')} className='outline-none px-4 py-2 rounded-full text-black shadow-lg'>Green</button>
          <button  onClick={() => setColor('red')} className='outline-none px-4 py-2 rounded-full text-black shadow-lg'>Red</button>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
