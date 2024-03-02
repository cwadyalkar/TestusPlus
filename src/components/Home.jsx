import { Link } from "react-router-dom";
import Button from "../layouts/Button";
import Doctors from "./Doctors";
import Blogs from "./Blogs"
import Services from "./Services"
import About from "./About"

const Home = () => {
  return (
    <>
  
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home.png')] bg-no-repeat bg-cover opacity-90">
      <div className=" w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
          Empowering Health Choices for a Vibrant Life Your Trusted..
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magnam
          omnis natus accusantium quos. Reprehenderit incidunt expedita
          molestiae impedit at sequi dolorem iste sit culpa, optio voluptates
          fugiat vero consequatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptates ullam error cumque quos accusamus autem nesciunt esse ab reprehenderit, ipsam repudiandae perferendis non. Itaque magnam quasi voluptate perspiciatis qui.
        </p>

        <button className=" bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out">
       <Link to="/services">See Services</Link>
      </button>
      </div>
    </div>
    <Doctors/>
    <About/>
    <Services/>
    <Blogs/>
    </>
  );
}

export default Home;
