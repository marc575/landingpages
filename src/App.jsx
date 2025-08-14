import { BrowserRouter as Router, Route, Routes } from 'react-router'
import Flowify from "./pages/Flowify"
import Calmnest from './pages/Calmnest'
import Xpress from './pages/Xpress'
import Flame from './pages/Flame'
import Finory from './pages/Finory'

function App() {

  return (
    <Router> 
      <Routes> 
        <Route path="/" element={<Calmnest/>} /> 
        <Route path="/xpress" element={<Xpress/>} /> 
        <Route path="/flowify" element={<Flowify/>} /> 
        <Route path="/flame" element={<Flame/>} /> 
        <Route path="/finory" element={<Finory/>} /> 
      </Routes> 
    </Router> 
  )
}

export default App
