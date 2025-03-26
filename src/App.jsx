import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/common/Header'
import Sidebar from './components/common/Sidebar'
import Footer from './components/common/Footer'
import Login from './components/Auth/Login'
import RootLayout from './components/Layout/RootLayout'



function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className='flex'>
        
        <RootLayout/>

      </div>
    </>
  )
}

export default App
