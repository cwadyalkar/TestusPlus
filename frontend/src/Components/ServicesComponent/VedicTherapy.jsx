import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import icon01 from "../../assets/images/ayurvedic.jpg"
import icon02 from "../../assets/images/panchkarma.jpg"
import icon03 from "../../assets/images/Energyhealing.jpg"
import icon04 from "../../assets/images/yogatherapy.jpg"
import icon05 from "../../assets/images/rasayan.jpg"
import icon06 from "../../assets/images/meditation.jpg"

const VedicTherapy = () => {
  return (
    <section>
    <div className="container">
      <div className="xl:w-[470px] mx-auto ">
        <h2 className="heading text-center">
          Vedic Therapies We Provide
        </h2>
        <p className="text__para text-center">
          World Class Care For Everyone. Our Health System Offers
          Unmatched,Expert health Care
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
        <div className="py-[30px] px-5 ">
          <div className="flex items-center justify-center">
            <img src={icon01} alt="" />
          </div>

          <div className="mt-[30px]">
            <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
            Ayurvedic Clinic
            </h2>
            <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
              Lorem icing elit. Incidunt porro nobis animi sint, quasi ipsam
              suscipit perferendis a sunt autem.
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
            Panchakarma
            </h2>
            <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
              Lorem icing elit. Incidunt porro nobis animi sint, quasi ipsam
              suscipit perferendis a sunt autem.
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
            Energy Healing
            </h2>
            <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
              Lorem icing elit. Incidunt porro nobis animi sint, quasi ipsam
              suscipit perferendis a sunt autem.
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
            <img src={icon04} alt="" />
          </div>

          <div className="mt-[30px]">
            <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
            Yoga Therapy
            </h2>
            <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
              Lorem icing elit. Incidunt porro nobis animi sint, quasi ipsam
              suscipit perferendis a sunt autem.
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
            <img src={icon05} alt="" />
          </div>

          <div className="mt-[30px]">
            <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
            Rasayan Therapy
            </h2>
            <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
              Lorem icing elit. Incidunt porro nobis animi sint, quasi ipsam
              suscipit perferendis a sunt autem.
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
            <img src={icon06} alt="" />
          </div>

          <div className="mt-[30px]">
            <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
            Meditation Therapy
            </h2>
            <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
              Lorem icing elit. Incidunt porro nobis animi sint, quasi ipsam
              suscipit perferendis a sunt autem.
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
  )
}

export default VedicTherapy