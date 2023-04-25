import React from "react";

const AboutSlide = (props) => {
  return (
    <div className=" gap-6  flex-col">
      <h3 className="text-5xl text-center">Hello, I'm Megan! 👋</h3>
      <hr className=" h-0.5 bg-black border-0 my-6 self-center w-full" />

      <p className=" text-2xl text-justify">
        I'm a Colorado-based Software Developer who enjoys coding, coffee, and
        spending time in the great outdoors. I'm building this website as a
        fusion of all of my passions and interests - coding, writing,
        connecting, and trying new things!
      </p>
      <p className="text-3xl pt-8">Thanks for stopping by!</p>
    </div>
  );
};

export default AboutSlide;
