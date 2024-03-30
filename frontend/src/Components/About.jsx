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
            <h2 className="heading">Proud To be One Of The Nations Best</h2>
            <p className="text__para">Lorem ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, enim. adipisicing elit. Odit nostrum beatae quas laborum, ex numquam. Consectetur illo modi magnam nobis.</p>
            <p className="text__para mt-[30px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae rem eligendi iusto sit! Velit, possimus? Accusantium, iste. Ea ipsa eaque corrupti modi accusamus! Velit inventore et nam.</p>
         <Link to="/"><button className="btn">Learn More</button></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
