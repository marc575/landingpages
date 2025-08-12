import React from 'react'
import Navbar from '../components/flowify/Navbar'
import Hero from '../components/flowify/Hero'
import Client from '../components/flowify/Client'

function Flowify() {
  return (
    <>
        <header className='container mx-auto'>
            <Navbar />
        </header>
        <main className='container mx-auto'>
            <Hero />
            <Client />
        </main>
    </>
  )
}

export default Flowify