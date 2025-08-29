import React, { useEffect, useState } from 'react'
import Hero from '../components/evergreen/Hero'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/evergreen/Navbar'
import Popup from '../components/Popup';
import About from '../components/evergreen/About';
import Stats from '../components/evergreen/Stats';
import Find from '../components/evergreen/Find';
import Properties from '../components/evergreen/Properties';
import Reviews from '../components/evergreen/Reviews';
import Faq from '../components/evergreen/Faq';
import Contact from '../components/evergreen/Contact';
import Footer from '../components/Footer';


function Evergreen() {
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
          <title>EverGreen | Tatchou Marc</title>
        </helmet>
        <header>
            <Navbar />
        </header>
        <main>
            <Hero />
            <About />
            <Stats />
            <Find />
            <Properties />
            <Reviews />
            <Faq />
            <Contact />
            <Footer title={"EverGreen"} />
            <Sidebar />

            <Popup show={isInactive} onClose={() => setIsInactive(false)} />
        </main>
    </>
  )
}

export default Evergreen