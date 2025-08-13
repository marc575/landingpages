import { BrowserRouter as Router, Route, Routes } from 'react-router'
import Flowify from "./pages/Flowify"
import Calmnest from './pages/Calmnest'
import Xpress from './pages/Xpress'

function App() {

  return (
    <Router> 
      <Routes> 
        <Route path="/" element={<Calmnest/>} /> 
        <Route path="/xpress" element={<Xpress/>} /> 
        <Route path="/flowify" element={<Flowify/>} /> 
      </Routes> 
    </Router> 
  )
}

export default App
