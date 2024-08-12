import React from 'react'
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'

function App() {
  return (
    <div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
      <Navbar />
      <Introduction />
    </div>
  )
}

export default App
