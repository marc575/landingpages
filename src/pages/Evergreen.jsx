import React from 'react'
import Hero from '../components/evergreen/Hero'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/evergreen/Navbar'


function Evergreen() {
  return (
    <>
        <helmet>
          <title>EverGreen | Tatchou Marc</title>
        </helmet>
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

export default Evergreen