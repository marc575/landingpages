import React from 'react'
import Hero from '../components/xpress/Hero'
import Sidebar from '../components/Sidebar'
import TravelBooking from '../components/xpress/TravelBooking'
import Navbar from '../components/xpress/Navbar'

function Xpress() {
  return (
    <>
        <header>
            <Navbar />
        </header>
        <main>
            <Hero />
            <TravelBooking />
            <Sidebar />
        </main>
    </>
  )
}

export default Xpress