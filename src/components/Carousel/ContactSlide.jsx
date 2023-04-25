import React from "react";
import TechIcon from "../TechIcon/TechIcon";
const ContactSlide = (props) => {
  return (
    <div>
      <h1 className="text-5xl text-center">Let's Get in Touch!</h1>
      <hr className=" h-0.5 bg-black border-0 my-6 w-full " />

      <p className="text-2xl text-justify py-6">
        I'm always looking for new opportunities to connect with others,
        collaborate on projects, and learn something new! Let's connect and
        build something great together!
      </p>
      <div className="flex flex-row justify-between  pt-6 pb-8">
        <a
          href="https://www.linkedin.com/in/megan-cindric/"
          target="+blank"
          className="transition-all duration-100 hover:scale-110"
        >
          <TechIcon tech="LinkedIn" className="h-20" />
        </a>
        <a
          href="https://github.com/megancindric"
          target="+blank"
          className="transition-all duration-100 hover:scale-110"
        >
          <TechIcon tech="GitHub" className="h-20" />
        </a>
        <a
          href="mailto:megancindric@gmail.com"
          className="transition-all duration-100 hover:scale-110"
        >
          <TechIcon tech="Email" className="h-20" />
        </a>
      </div>
    </div>
  );
};

export default ContactSlide;
