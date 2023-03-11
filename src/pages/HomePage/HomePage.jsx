import React from "react";
import ProfilePic from "../../assets/profile.jpg";
const HomePage = (props) => {
  return (
    <div className="flex flex-row justify-center h-screen items-center bg-gradient-to-b from-white to-emerald-400 gap-10">
      <div className="flex flex-col gap-12 justify-center text-center w-1/4 border p-10 rounded-xl drop-shadow-xl bg-white">
        <p className=" text-6xl font-gillsans ">Hello! 👋</p>
        <p className=" text-lg text-justify  font-gillsans ">
          This is a little about me blurb Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.{" "}
        </p>
      </div>
      <div className="flex ">
        <img
          className=" h-96 rounded-full w-96 object-cover m-10 drop-shadow-2xl"
          alt="Profile picture for Megan Cindric"
          src={ProfilePic}
        />
      </div>
    </div>
  );
};

export default HomePage;
