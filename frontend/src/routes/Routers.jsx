import {Routes,Route} from "react-router-dom"
import Home from "../Pages/Home"
import AddLabs from "../Pages/AddLabs"
import Services from "../Pages/Services"
import Contact from "../Pages/Contact"

const Routers = () => {
  return (


  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Addlabs" element={<AddLabs/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/contact" element={<Contact/>}/>
  </Routes>
   )
}

export default Routers