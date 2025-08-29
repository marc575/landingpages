import React, { useEffect, useState } from 'react'
import Hero from '../components/podcast/Hero'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/podcast/Navbar'
import Popup from '../components/Popup';
import About from '../components/podcast/About';
import Features from '../components/podcast/Features';
import Reviews from '../components/podcast/Reviews';
import Bundle from '../components/podcast/Bundle';
import Newsletter from '../components/podcast/Newsletter';
import Footer from '../components/Footer';


function Podcast() {
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
          <title>Podcast | Tatchou Marc</title>
        </helmet>
        <header>
            <Navbar />
        </header>
        <main>
            <Hero />
            <About />
            <Features />
            <Reviews />
            <Bundle />
            <Newsletter />
            <Footer title={"PodCast"} />
            <Sidebar />

            <Popup show={isInactive} onClose={() => setIsInactive(false)} />
        </main>
    </>
  )
}

export default Podcast