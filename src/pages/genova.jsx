import React, { useEffect, useState } from 'react'
import Hero from '../components/genova/Hero'
import Vehicules from '../components/genova/Vehicules'
import Navbar from '../components/genova/Navbar'
import Sidebar from '../components/Sidebar'
import Popup from '../components/Popup';
import Services from '../components/genova/Services'
import About from '../components/genova/About'
import Contact from '../components/genova/Contact'
import Testimonials from '../components/genova/Testimonials'
import FAQ from '../components/genova/FAQ'
import Newsletter from '../components/genova/Newsletter'
import Footer from '../components/Footer'

function Genova() {
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
          <title>Genova | Tatchou Marc</title>
        </helmet>
        <header>
            <Navbar/>
        </header>
        <main>
            <Hero />
            <Vehicules />
            <Services />
            <About />
            <Testimonials />
            <FAQ />
            <Newsletter />
            <Contact />
            <Footer />
            <Sidebar />

            <Popup show={isInactive} onClose={() => setIsInactive(false)} />
        </main>
    </>
  )
}

export default Genova