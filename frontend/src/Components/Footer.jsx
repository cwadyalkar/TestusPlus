import {
  AiFillYoutube,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
import logo from "../assets/images/trans1234.png";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    path: "",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "",
    icon: <RiLinkedinBoxFill className="group-hover:text-white w-4 h-5" />,
  },
];

const quickLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/addlabs",
    display: "Add Laboratory",
  },
  {
    path: "/blog",
    display: "Blog",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="pb-16 pt-10">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px] ">
          <div>
            <img src={logo} className="w-[65px]" alt="" />
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4   ">
              Copyright {year} developed by IDEVIFY Solution all rights reserved{" "}
            </p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-cyan-400 hover:border-none"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 tex`t-headingColor">
              Quick Links
            </h2>
            <ul>
              {quickLinks.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
