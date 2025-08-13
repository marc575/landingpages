import React from 'react'
import Hero from '../components/calmnest/Hero'
import Navbar from '../components/calmnest/Navbar'
import Sidebar from '../components/Sidebar'

function Calmnest() {
  return (
    <>
        <header>
            <Navbar/>
        </header>
        <main>
            <Hero />
            {/* <Sidebar /> */}
        </main>
    </>
  )
}

export default Calmnest