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
    <div className="h-20 bg-emerald-700 flex flex-row justify-between">
      <div className="flex items-center px-3">
        <Evergreen fill="white" className=" h-10" />
        <h1
          className="font-bold text-4xl text-teal-50"
          onClick={() => navigate(`/`)}
        >
          Code & Explore
        </h1>
      </div>

      <div className="flex flex-row space-x-10 items-center px-14">
        <div
          onClick={() => navigate(`/projects`)}
          className="flex  text-2xl text-teal-50 border p-2 rounded-lg  border-teal-50"
        >
          Projects
        </div>
        <div
          onClick={() => navigate(`/blog`)}
          className="flex  text-2xl text-teal-50 border p-2 rounded-lg  border-teal-50"
        >
          Blog
        </div>
        <div
          onClick={() => navigate(`/about`)}
          className="flex  text-2xl text-teal-50 border p-2 rounded-lg  border-teal-50"
        >
          About Me
        </div>
      </div>
    </div>
  );
};

export default Header;
