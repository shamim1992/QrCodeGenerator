import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Qrcode from './components/Qrcode'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-slate-200 h-screen'>
    <Header/>
   <Qrcode/>
    </div>
  )
}

export default App
