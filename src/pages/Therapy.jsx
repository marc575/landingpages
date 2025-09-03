import React, { useEffect, useState } from 'react'
import Hero from '../components/therapy/Hero'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/therapy/Navbar'
import Popup from '../components/Popup';
import Relationship from '../components/therapy/Relationship';
import Conflict from '../components/therapy/Conflict';
import Process from '../components/therapy/Process';
import Testimonials from '../components/therapy/Testimonials';
import Emergency from '../components/therapy/Emergency';
import TherapyCubes from '../components/therapy/TherapyCubes';
import Contact from '../components/therapy/Contact';
import Footer from '../components/Footer';

function Therapy() {
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
          <title>Therapy | Tatchou Marc</title>
        </helmet>
        <header>
            <Navbar />
        </header>
        <main>
            <Hero />
            <Relationship />
            <Conflict />
            <Process />
            <Testimonials />
            <Emergency />
            <TherapyCubes />
            <Contact />
            <Footer title="Therapy" />
            <Sidebar />

            <Popup show={isInactive} onClose={() => setIsInactive(false)} />
        </main>
    </>
  )
}

export default Therapy