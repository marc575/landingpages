import React, { useEffect, useState } from 'react'
import Hero from '../components/calmnest/Hero'
import Navbar from '../components/calmnest/Navbar'
import Sidebar from '../components/Sidebar'
import Popup from '../components/Popup';
import About from '../components/calmnest/About';
import Services from '../components/calmnest/Services';
import Schedule from '../components/calmnest/Schedule';
import Testimonials from '../components/calmnest/Testimonials';
import Contact from '../components/calmnest/Contact';
import Footer from '../components/Footer';

function Calmnest() {
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
          <title>CalmNest | Tatchou Marc</title>
        </helmet>
        <header>
            <Navbar/>
        </header>
        <main>
            <Hero />
            <About />
            <Services />
            <Schedule />
            <Testimonials />
            <Contact />
            <Footer />
            <Sidebar />

            <Popup show={isInactive} onClose={() => setIsInactive(false)} />
        </main>
    </>
  )
}

export default Calmnest