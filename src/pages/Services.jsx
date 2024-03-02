import React from "react";
 //import Button from "../layouts/Button";
import { RiMicroscopeLine } from "react-icons/ri";
//import ServicesCard from "../layouts/ServicesCard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";
import Button from "../layouts/Button";
import ServicesCard from "../layouts/ServicesCard";

const Services = () => {
  const icon1 = (
    <RiMicroscopeLine size={35} className=" text-backgroundColor" />
  );
  const icon2 = (
    <MdHealthAndSafety size={35} className=" text-backgroundColor" />
  );
  const icon3 = <FaHeartbeat size={35} className=" text-backgroundColor" />;

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start lg:px-32 px-5 pt-24 lg:pt-16">
          <center>Our Services</center>  
          </h1>
          <p className=" mt-2  text-center lg:text-start">
         <center><h6>Testus aim to provide world class primary health care easily accessible at patient's comfortable environment at affordable value. We assure patients safety under our trained attendants, nurses, caretakers, etc. Also, we take care of your personal information's secrecy. Our own trained caregiver are deployed to your the patients for their homily parental care.Our team is ready all the time to provide you services for 8Hrs, 10Hrs, 12Hrs, 24Hrs also the customizable time option is available.</h6> </center> 
          </p>
         </div>
        <div className=" mt-4 lg:mt-0">
          
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row gap-5 pt-10">
        <ServicesCard icon={icon1} title="Diagnostic Blood test" desc={"Convenient Blood Collection Service : We Provide Blood Collection Service,made for your comfort and wellbeing.Our trained team makes it easy for you to get blood drawn at home.  Petrol charge included for quick service. Transparent pricing based on distance traveled and our website makes it easy to find us."}/>
        <ServicesCard icon={icon2} title=" Vedic Therapy" desc={"Vedic healing therapies : Discover the power of ancient healing with our Vedic Therapies. From Ayurvedic massages to meditation techniques, our Vedic Therapies are tailored to rejuvenate and restore balance in your life. Experience the profound benefits of traditional healing methods at our Healthcare Website"}/>
        <ServicesCard icon={icon3} title="Home Patient Care" desc={" Home Patient Care services : Experience our Home Patient Care services, prioritizing your loved one's well-being. Our dedicated team offers specialized care for elders, critical patients, chronic diseases, and baby care.Explore reliable and compassionate care on our website today. "} />
      </div>
      <div>'   '
                                                                                                                                                                                                                          
     </div>
      <p  className=" mt-2  text-center  lg:flex-row gap-2 pt-3 lg:text-start"></p>
      <div> <p>
    </p></div>
    </div>
  );
};

export default Services;