import {Routes,Route} from "react-router-dom"
import Home from "../Pages/Home"
import AddLabs from "../Pages/AddLabs"
import Services from "../Pages/Services"
import Contact from "../Pages/Contact"
import VedicTherapy from "../Components/ServicesComponent/VedicTherapy"
import TestAtHome from "../Components/ServicesComponent/TestAtHome"
import DBT from "../Components/ServicesComponent/BloodTest"
import HospitalPickup from "../Components/ServicesComponent/HospitalPickup"
import AppointCareTaker from "../Components/ServicesComponent/AppointCareTaker"
import HomePatientCare from "../Components/ServicesComponent/HomePatientCare"


const Routers = () => {
  return (


  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Addlabs" element={<AddLabs/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/services/vedictherapy" element={<VedicTherapy/>}/>
    <Route path="/services/testathome" element={<TestAtHome/>}/>
    <Route path="/services/dbt" element={<DBT/>}/>
    <Route path="/services/hospitalpickup" element={<HospitalPickup/>}/>
    <Route path="/services/appointcaretaker" element={<AppointCareTaker/>}/>
    <Route path="/services/homepatientcare" element={<HomePatientCare/>}/>
  </Routes>
   )
}

export default Routers