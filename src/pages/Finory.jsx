import React from 'react'
import Hero from '../components/finory/Hero'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/finory/Navbar'

function Finory() {
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

export default Finory