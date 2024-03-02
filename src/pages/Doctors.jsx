import React from "react";
import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";
import doc1 from "../assets/img/doc1.jpg";
import doc2 from "../assets/img/doc2.jpg";
import doc3 from "../assets/img/doc3.jpg";
import doc4 from "../assets/img/doc4.jpg";
import doc5 from "../assets/img/doc5.jpg";
import doc6 from "../assets/img/doc6.jpg";


const Doctors = () => {
  return (
    // <div>Doctors
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Our Doctors
          </h1>
          <p className=" mt-2 text-center lg:text-start">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
            quidem.
          </p>
        </div>
        <div className=" mt-4 lg:mt-0">
          <Button title="Our Articles" />
        </div>
      </div>
      <div className=" my-8">
        <div className=" flex flex-wrap justify-center gap-5">
          <BlogCard img={doc1} headlines="Dr. Ghanorila Suryavanshi" />
          <BlogCard img={doc2} headlines="Dr. Julian Bennett" />
          <BlogCard
            img={doc3}
            headlines="Dr. Strange"
          />
          <BlogCard img={doc4} headlines="Dr. Pranay Suryavanshi" />
          <BlogCard img={doc5} headlines="Dr. Victor Nguyen" />
          <BlogCard img={doc6} headlines="Dr. Ethan Carter" />
        </div>
      </div>
    </div>
    // </div>
  )
}

export default Doctors