import { Link } from "react-router-dom";
import herobg01 from "../assets/images/hero-img01.png";
// import herobg02 from "../assets/images/microscope.png";
import herobg03 from "../assets/images/hero-img03.png";
import herobg02 from "../assets/images/hero-img02.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import feature from "../assets/images/feature-img.png";
import { BiRightArrowAlt } from "react-icons/bi";
import About from "../Components/About";
import ServicesList from "../Components/ServicesList";
import LaboratoryList from "../Components/LaboratoryList";
import faqImg from "../assets/images/faq-img.png";
import FaqList from "../Components/FaqList";
// import testusimg from "../assets/images/testusimg.png";
const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between ">
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-white font-[800] md:text-[60px] md:leading-[70px]">
                  We Help Patient live a healthy, longer life
                </h1>
                <p className="text__para text-white">
                  Testus aim to Provide World class primary health care easily
                  accessible at patient comfortable environment at affordable
                  value. We assure patients safety under our trained attendants,
                  nurses, caretakers, etc. Also, we take care of your personal
                  information secrecy. Our own trained caregiver are deployed to
                  your the patients for their homily parental care.
                </p>
                <button className="btn">Explore More</button>
              </div>

              <div className="mt-[30px] items-center lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    2+
                  </h2>
                  <span className="w-[50px] h-2 bg-yellowColor rounded-full block mt-[-14px] "></span>
                  <p className="text__para">Years of Experience </p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    1.5+
                  </h2>
                  <span className="w-[80px] h-2 bg-purpleColor rounded-full block mt-[-14px] "></span>
                  <p className="text__para">Years of Perfection </p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[120px] h-2 bg-irisBlueColor rounded-full block mt-[-14px] "></span>
                  <p className="text__para">Patient Satisfaction </p>
                </div>
              </div>
            </div>

            {/* hero content */}

            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full " src={herobg01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img
                  src={herobg02}
                  alt=""
                  className="w-full mb-[30px] rounded-lg"
                />
                <img src={herobg03} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto ">
            <h2 className="heading text-center">
              Providing the Best Medical Services
            </h2>
            <p className="text__para text-center">
              Receive compassionate and professional home patient care services,
              tailored to meet your unique needs and ensure comfort and dignity
              in familiar surroundings.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Appoint Care Taker
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                Appoint a compassionate and experienced caretaker today to ensure personalized, reliable care for your loved one&#39;s well-being and comfort.
                </p>
                <Link
                  to="/services"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-cyan-400 hover:border-none"
                >
                  <BiRightArrowAlt className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Hospital Pickup
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                Schedule hassle-free hospital pickup services, providing efficient and reliable transportation for patients to and from medical appointments
                </p>
                <Link
                  to="/services"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-cyan-400 hover:border-none"
                >
                  <BiRightArrowAlt className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Home Patient Care
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                Receive compassionate and professional home patient care services, tailored to meet your unique needs and ensure comfort and dignity in familiar surroundings.
                </p>
                <Link
                  to="/services"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-cyan-400 hover:border-none"
                >
                  <BiRightArrowAlt className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto  ">
            <h2 className="heading text-center">Our Services</h2>
            <p className="text__para text-center">
            Receive compassionate and professional home patient care services, tailored to meet your
unique needs and ensure comfort and dignity in familiar surroundings.
            </p>
          </div>

          <ServicesList />
        </div>
      </section>

      {/* feature section */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get Home Patient Care <br />
                Anytime
              </h2>
              <ul className="pl-4">
                <li className="text__para">
                  1. We insure the safety of patients condition and provide you
                  service through experienced person
                </li>
                <li className="text__para">
                  2. You get what you pay for. Additionally, guaranteed
                  replacement, verification document and more!
                </li>
                <li className="text__para">
                  3. Our executive is always their for you to hear you out.{" "}
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>

            <div className="relative z-10 xl:w-[770px] flex justify-center mt-[50px] lg:mt-0">
              <img src={feature} className="w-3/4" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* best Laboratory section */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto ">
            <h2 className="heading text-center">Best Laboratories in Nagpur</h2>
            <p className="text__para text-center">
              World Class Care For Everyone. Our Health System Offers
              Unmatched,Expert health Care
            </p>
          </div>
          <LaboratoryList />
        </div>
      </section>

      {/* Faq Section */}

      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="heading">Explore Blood Packages</h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      {/* <section>
      <div className="container">
          <div className="xl:w-[470px] mx-auto ">
            <h2 className="heading text-center">What Our Client Says</h2>
            <p className="text__para text-center">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iusto tempora modi assumenda autem ipsa blanditiis perferendis harum, distinctio repudiandae.
            </p>
          </div>
          
        </div>
      </section> */}
    </>
  );
};

export default Home;
