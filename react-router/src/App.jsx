import { useState } from 'react'
import Header from './component/header'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <Header />
    <h1 className='bg-red-400'>welcome</h1>
    
    
    </>
  )
}

export default App
