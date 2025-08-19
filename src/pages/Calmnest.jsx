import React, { useEffect, useState } from 'react'
import Hero from '../components/calmnest/Hero'
import Navbar from '../components/calmnest/Navbar'
import Sidebar from '../components/Sidebar'
import Popup from '../components/Popup';

function Calmnest() {
  const [isInactive, setIsInactive] = useState(false);
  
  useEffect(() => {
    let timer = setTimeout(() => { setIsInactive(true) }, 10000);

    const resetTime = () => {
      setIsInactive(false);
      clearTimeout(timer);
      timer = setTimeout(() => {
        setIsInactive(true)
      }, 10000);
    }

    window.addEventListener("mousemove", resetTime);
    window.addEventListener("keydown", resetTime);

    return () => {
      window.removeEventListener("mousemove", resetTime);
      window.removeEventListener("keydow", resetTime);
      clearTimeout(timer)
    }
  }, []);

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

            <Popup show={isInactive} onClose={() => setIsInactive(false)} />
        </main>
    </>
  )
}

export default Calmnest