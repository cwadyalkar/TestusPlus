import { Link } from "react-router-dom";
import aboutImg from "../assets/images/about.png";
const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col  lg:flex-row items-center">
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="" />
          </div>
          {/* about content */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Who Are We ? </h2>
            <p className="text__para">
              Launched in 2023, Our technology platform connect patient,
              laboratories, caregiver and phlebotomist to serving their needs.
              Patient use our platform to search blood testing laboratories,
              book test at home, hospital sample pickup also make payment on
              laboratories and book care-taker.
            </p>
            <p className="text__para mt-[30px]">
            On the other-hand we provide
              marketing tool to the laboratories to grow their revenue. We also
              provide our phlebotomist & caregiver partners with transparent and
              flexible earning opportunities.
            </p>
            <Link to="/">
              <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
