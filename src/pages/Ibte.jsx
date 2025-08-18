import React from 'react'
import Hero from '../components/ibte/Hero'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/ibte/Navbar'

function Ibte() {
  return (
    <>
        <helmet>
          <title>Ibte | Tatchou Marc</title>
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

export default Ibte