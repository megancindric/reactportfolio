import React from "react";

const AboutPage = (props) => {
  return (
    <div className="bg-gradient-to-b from-white to-emerald-400 gap-10 h-screen flex flex-col p-10">
      <h1 className="text-7xl font-gillsans text-center drop-shadow-lg pb-6">
        About Me
      </h1>
      <div className="flex border flex-col h-1/4">
        <div className="border">About me blurb</div>
        <div className="border">What I'm learning</div>
        <div className="border">My Toolbelt</div>
        <div className="border">Contact Me</div>
      </div>
    </div>
  );
};

export default AboutPage;
