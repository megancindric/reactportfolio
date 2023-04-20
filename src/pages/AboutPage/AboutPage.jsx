import React from "react";
import ProfilePic from "../../assets/profile.jpg";
import Carousel from "../../components/Carousel/Carousel";

const AboutPage = (props) => {
  const techStack = [
    "Python",
    "JavaScript",
    "CSharp",
    "ReactJs",
    "Tailwind",
    "MySql",
    "Django",
    "Flask",
    "Docker",
    "GitHub",
  ];
  return (
    <div className="bg-gradient-to-b from-white to-emerald-400 h-screen flex flex-col py-10 gap-20 text-emerald-900 font-gillsans">
      <h1 className="text-7xl text-center drop-shadow-lg pb-20">About Me</h1>
      <div className="flex flex-row">
        <div className="flex justify-center flex-1">
          <img
            className=" h-96 rounded-full w-96 object-cover drop-shadow-2xl"
            alt="Profile for Megan Cindric"
            src={ProfilePic}
          />
        </div>
        <Carousel />
      </div>
    </div>
  );
};

export default AboutPage;
