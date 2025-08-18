import React from 'react'
import Hero from '../components/xpress/Hero'
import Sidebar from '../components/Sidebar'
import TravelBooking from '../components/xpress/TravelBooking'
import Navbar from '../components/xpress/Navbar'

function Xpress() {
  return (
    <>
        <helmet>
          <title>Xpress | Tatchou Marc</title>
        </helmet>
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