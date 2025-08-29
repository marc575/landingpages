import React, { useEffect, useState } from 'react'
import Hero from '../components/ibte/Hero'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/ibte/Navbar'
import Popup from '../components/Popup';
import Features from '../components/ibte/Features';
import About from '../components/ibte/About';
import Comparison from '../components/ibte/Comparison';
import Footer from '../components/Footer';

function Ibte() {
  const [isInactive, setIsInactive] = useState(false);
  
  useEffect(() => {
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
            <Features />
            <About />
            <Comparison />
            <Footer title="IBTE" />
            <Sidebar />

            <Popup show={isInactive} onClose={() => setIsInactive(false)} />
        </main>
    </>
  )
}

export default Ibte