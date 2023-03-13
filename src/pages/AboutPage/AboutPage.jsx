import React from "react";
import ProfilePic from "../../assets/profile.jpg";
import TechIcon from "../../components/TechIcon/TechIcon";

const AboutPage = (props) => {
  const techStack = [
    "Python",
    "JavaScript",
    "CSharp",
    "ReactJs",
    "Tailwind",
    "MySql",
    "Django",
    "Docker",
    "GitHub",
  ];
  return (
    <div className="bg-gradient-to-b from-white to-emerald-400 h-full flex flex-col w-full py-10 gap-20 text-emerald-900 font-gillsans">
      <h1 className="text-7xl text-center drop-shadow-lg pb-20">About Me</h1>
      <div className="grow flex flex-row items-center justify-center">
        <div className="flex w-1/2 items-center justify-center">
          <img
            className=" h-96 rounded-full w-96 object-cover m-10 drop-shadow-2xl"
            alt="Profile for Megan Cindric"
            src={ProfilePic}
          />
        </div>
        <div className="items-center justify-center my-auto  w-1/2 gap-6 flex flex-col px-8 ">
          <h3 className="  text-5xl py-8">Hello, I'm Megan! 👋</h3>
          <p className=" text-2xl text-justify w-1/2">
            I'm a Wisconsin-based Software Developer who enjoys coding, coffee,
            and spending time in the great outdoors. I'm building this website
            as a fusion of all of my passions and interests - coding, writing,
            connecting, and trying new things!
          </p>
          <p className="text-3xl py-8">Thanks for stopping by!</p>
        </div>
      </div>
      <div className=" grow w-1/2 flex flex-col justify-center items-center">
        <h1 className="text-5xl pt-3  text-center "> What I'm Learning...</h1>
        <hr className=" h-0.5 bg-emerald-800 border-0 mt-6 mb-10 w-1/2 self-center" />

        <ul className="text-3xl  list-disc w-1/2 px-14 ">
          <li className="p-3">Tailwind CSS</li>
          <li className="p-3">C#.NET, .NET Core 5.0, and .NET Framework</li>
          <li className="p-3">Next.JS</li>
          <li className="p-3">TypeScript</li>
          <li className="p-4 list-none text-right"> ....and more!</li>
        </ul>
      </div>
      <div className=" grow items-center text-center flex flex-row-reverse ">
        <div className="flex flex-col w-1/2 bg-white drop-shadow-2xl rounded-sm py-10">
          <h1 className="text-5xl pt-3">My Toolbelt</h1>
          <hr className=" h-0.5 bg-emerald-800 border-0 mt-6 mb-10 w-1/3 self-center" />
          <div className="flex flex-row justify-center gap-6 pt-4 ">
            {techStack.map((tech, index) => (
              <TechIcon key={index} tech={tech} />
            ))}
          </div>
        </div>
      </div>
      <div className=" grow flex flex-col w-1/2 justify-center text-center items-center">
        <div className="flex  flex-col w-1/2 bg-white drop-shadow-2xl rounded-lg p-12">
          <h1 className="text-5xl pt-3">Let's Get in Touch!</h1>
          <hr className=" h-0.5 bg-emerald-800 border-0 mt-6 mb-6 w-5/6 self-center" />

          <p className="text-2xl text-justify py-6">
            I'm always looking for new opportunities to connect with others,
            collaborate on projects, and learn something new! Let's connect and
            build something great together!
          </p>
          <div className="flex flex-row justify-between pt-6 pb-8">
            <a
              href="https://www.linkedin.com/in/megan-cindric/"
              target="+blank"
              className="transition-all duration-100 hover:scale-110"
            >
              <TechIcon tech="LinkedIn" />
            </a>
            <a
              href="https://github.com/megancindric"
              target="+blank"
              className="transition-all duration-100 hover:scale-110"
            >
              <TechIcon tech="GitHub" />
            </a>
            <a
              href="mailto:megancindric@gmail.com"
              className="transition-all duration-100 hover:scale-110"
            >
              <TechIcon tech="Email" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
