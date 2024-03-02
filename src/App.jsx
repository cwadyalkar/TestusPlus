
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import Footer from "./components/Footer";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Doctors from "./pages/Doctors";
import About from "./pages/Aboutus";

const App = () => {
  return (
    // <div>
    //   <Navbar />

    //   <main>
    //     <div id="home">
    //       <Home />
    //     </div>

    //     <div id="about">
    //       <About />
    //     </div>

    //     <div id="services">
    //       <Services />
    //     </div>

    //     <div id="doctors">
    //       <Doctors />
    //     </div>

    //     <div id="blog">
    //       <Blogs />
    //     </div>
    //   </main>

    //   <Footer />
    // </div>
    <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/doctors" element={<Doctors/>}/>
        <Route path="/aboutus" element={<About/>}/>
        
      </Routes>
        <Footer/>
    </Router>

  );
};

export default App;
