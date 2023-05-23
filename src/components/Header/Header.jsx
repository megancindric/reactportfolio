import { ReactComponent as Evergreen } from "../../assets/icons/evergreen.svg";
import { useNavigate } from "react-router-dom";
import React from "react";

const Header = (post) => {
  const pages = [
    { button: "Projects", link: "projects" },
    { button: "Blog", link: "blog" },
    { button: "About Me", link: "about" },
  ];
  const navigate = useNavigate();
  return (
    <div className="h-24 bg-[#5e548e] flex flex-row justify-between">
      <div className="flex items-center px-3 transition-all duration-100 hover:scale-110">
        <Evergreen fill="white" className=" h-10" />
        <h1
          className="font-bold text-4xl text-teal-50 "
          onClick={() => navigate(`/`)}
        >
          Code & Explore
        </h1>
      </div>

      <div className="flex flex-row space-x-10 items-center px-14">
        <div
          onClick={() => navigate(`/projects`)}
          className="flex  text-3xl text-teal-50  p-2   border-teal-50 transition-all duration-100 hover:scale-110"
        >
          Projects
        </div>
        <div
          onClick={() => navigate(`/blog`)}
          className="flex  text-3xl text-teal-50  p-2   border-teal-50 transition-all duration-100 hover:scale-110"
        >
          Blog
        </div>
        <div
          onClick={() => navigate(`/art`)}
          className="flex  text-3xl text-teal-50  p-2   border-teal-50 transition-all duration-100 hover:scale-110"
        >
          Art
        </div>
        <div
          onClick={() => navigate(`/about`)}
          className="flex  text-3xl text-teal-50  p-2   border-teal-50 transition-all duration-100 hover:scale-110"
        >
          About Me
        </div>
      </div>
    </div>
  );
};

export default Header;
