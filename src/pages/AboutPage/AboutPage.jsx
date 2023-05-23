import React from "react";
import ProfilePic from "../../assets/profile.jpg";
import Kermit from "../../assets/kermit.png";
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
    <div className="bg-lightPurple h-screen flex flex-col py-10 gap-20 font-gillsans text-darkPurple">
      <h1 className="text-7xl text-center pb-16">About Me</h1>
      <div className="flex flex-row justify-around">
        <div className="flex justify-center flex-1">
          <img
            className=" h-96 rounded-full w-96 object-cover drop-shadow-2xl"
            alt="Profile for Megan Cindric"
            src={Kermit}
          />
        </div>
        <Carousel />
      </div>
    </div>
  );
};

export default AboutPage;
