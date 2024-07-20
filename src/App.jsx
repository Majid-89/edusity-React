import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Programs/Program'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Program />
      </div>

    </>
  )
}

export default App