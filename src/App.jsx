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
import Genova from './pages/genova'
import One from './pages/Auth/One'
import Two from './pages/Auth/Two'
import Three from './pages/Auth/three'
import Fourth from './pages/Auth/Fourth'
import Five from './pages/Auth/Five'
import DashboardAnalytics from './pages/Dashboard/DashboardAnalytics'
import DashboardEcommerce from './pages/Dashboard/DashboardEcommerce'
import DashboardProject from './pages/Dashboard/DashboardProject'

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
        <Route path="/genova" element={<Genova/>} /> 
        <Route path="/one" element={<One/>} /> 
        <Route path="/two" element={<Two/>} /> 
        <Route path="/three" element={<Three/>} /> 
        <Route path="/fourth" element={<Fourth/>} /> 
        <Route path="/five" element={<Five/>} /> 
        <Route path="/analytics" element={<DashboardAnalytics/>} /> 
        <Route path="/ecommerce" element={<DashboardEcommerce/>} /> 
        <Route path="/project" element={<DashboardProject/>} /> 
      </Routes> 
    </Router> 
  )
}

export default App
