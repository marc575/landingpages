import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Client from '../components/Client'

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