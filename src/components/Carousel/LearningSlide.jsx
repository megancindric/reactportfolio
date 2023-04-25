import React from "react";

const LearningSlide = () => {
  return (
    <div className=" flex flex-col">
      <h1 className="text-5xl text-center">I'm Currently Learning...</h1>
      <hr className=" h-0.5 bg-black border-0 mt-6 mb-10 self-center w-full" />

      <ul className="text-3xl  ">
        <li className="p-3">Tailwind CSS</li>
        <li className="p-3">C#.NET, .NET Core 5.0, and .NET Framework</li>
        <li className="p-3">Next.JS</li>
        <li className="p-3">TypeScript</li>
      </ul>
    </div>
  );
};

export default LearningSlide;
