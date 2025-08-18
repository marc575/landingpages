import React from 'react'
import Navbar from '../components/flowify/Navbar'
import Hero from '../components/flowify/Hero'
import Client from '../components/flowify/Client'
import Sidebar from '../components/Sidebar'

function Flowify() {
  return (
    <>
        <helmet>
          <title>Flowify | Tatchou Marc</title>
        </helmet>
        <header>
            <Navbar />
        </header>
        <main>
            <Hero />
            <Client />
            <Sidebar />
        </main>
    </>
  )
}

export default Flowify