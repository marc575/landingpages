import React from 'react'
import Hero from '../components/flame/Hero'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/flame/Navbar'

function Flame() {
  return (
    <>
        <helmet>
          <title>Flame | Tatchou Marc</title>
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

export default Flame