import React from 'react'
import Hero from '../components/therapy/Hero'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/therapy/Navbar'

function Therapy() {
  return (
    <>
        <header>
            <Navbar />
        </header>
        <main>
            <Hero />
            <Sidebar />
        </main>
    </>
  )
}

export default Therapy