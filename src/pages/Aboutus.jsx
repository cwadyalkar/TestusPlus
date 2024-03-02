import img from "../assets/img/about.jpg";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">About Us</h1>
        
        <p className=" text-justify lg:text-start">
        we're committed to providing top-notch pathology services designed to protect your health with precision and care. 
        Our expert team utilizes advanced technology and strict protocols to deliver accurate and reliable results that you can depend on. From diagnostic testing to disease monitoring, we prioritize your well-being by offering insightful insights to guide your healthcare decisions. Trust us to take care of your health needs with dedication and expertise. 
        </p>
        <p className="text-justify lg:text-start">
        Pathology is the medical discipline that provides diagnostic information to patients and clinicians. It impacts nearly
         all aspects of patient care, from diagnosing cancer to managing chronic diseases through accurate laboratory testing.  
        </p>
        
        <h6><b>DIRECTOR : Dr. Ghananila Suryawanshi</b></h6>
        <h6><b>DIRECTOR : Pranay Suryawanshi </b></h6>
        <h6><b>CTO : Devesh Umredkar</b></h6>
        
        
               
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
