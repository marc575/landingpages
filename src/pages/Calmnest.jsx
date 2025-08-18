import React, { useEffect, useState } from 'react'
import Hero from '../components/calmnest/Hero'
import Navbar from '../components/calmnest/Navbar'
import Sidebar from '../components/Sidebar'

useEffect(() => {
  const [isInactive, setIsInactive] = useState(false);

  let timer = setTimeout(() => { setIsInactive(true) }, 60000);

  const resetTime = () => {
    setIsInactive(false);
    clearTimeout(timer);
    timer = setTimeout(() => {
      setIsInactive(true)
    }, 60000);
  }

  window.addEventListener("mousemove", resetTime);
  window.addEventListener("keydown", resetTime);

  return () => {
    window.removeEventListener("mousemove", resetTime);
    window.removeEventListener("keydow", resetTime);
    clearTimeout(timer)
  }
}, []);

function Calmnest() {
  return (
    <>
        <helmet>
          <title>CalmNest | Tatchou Marc</title>
        </helmet>
        <header>
            <Navbar/>
        </header>
        <main>
            <Hero />
            <Sidebar />
        </main>
    </>
  )
}

export default Calmnest