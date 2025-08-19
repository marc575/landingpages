import { BrowserRouter as Router, Route, Routes } from 'react-router'
import Flowify from "./pages/Flowify"
import Calmnest from './pages/Calmnest'
import Xpress from './pages/Xpress'
import Flame from './pages/Flame'
import Finory from './pages/Finory'
import Ibte from './pages/Ibte'
import Therapy from './pages/Therapy'
import Evergreen from './pages/Evergreen'
import Podcast from './pages/Podcast'

function App() {

  return (
    <Router> 
      <Routes> 
        <Route path="/" element={<Calmnest/>} /> 
        <Route path="/xpress" element={<Xpress/>} /> 
        <Route path="/flowify" element={<Flowify/>} /> 
        <Route path="/flame" element={<Flame/>} /> 
        <Route path="/finory" element={<Finory/>} /> 
        <Route path="/ibte" element={<Ibte/>} /> 
        <Route path="/therapy" element={<Therapy/>} /> 
        <Route path="/evergreen" element={<Evergreen/>} /> 
        <Route path="/podcast" element={<Podcast/>} /> 
      </Routes> 
    </Router> 
  )
}

export default App
