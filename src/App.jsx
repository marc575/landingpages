import { BrowserRouter as Router, Route, Routes } from 'react-router'
import Flowify from "./pages/Flowify"

function App() {

  return (
    <Router> 
      <Routes> 
        <Route path="/" element={<Flowify/>} /> 
      </Routes> 
    </Router> 
  )
}

export default App
