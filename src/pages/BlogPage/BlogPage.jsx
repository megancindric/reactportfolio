import React from "react";
import BlogPost from "../../components/BlogPost/BlogPost";

const BlogPage = (props) => {
  const fakeEntries = [
    "Placeholder 1",
    "Placeholder 2",
    "Placeholder 3",
    "Placeholder 4",
  ];
  return (
    <div className="bg-emerald-50 gap-10 h-screen flex flex-col p-10 items-center ">
      <h1 className=" text-7xl font-gillsans text-center pb-6">
        This is the blog!
      </h1>

      <div className="flex flex-row gap-14 justify-between w-2/3">
        <div flexGrow={2}>
          <BlogPost />
        </div>
        <div
          sx={{
            minWidth: 300,
          }}
        >
          <div className=" rounded-xl px-8 py-6 bg-white drop-shadow-xl w-72">
            <h3 className="text-3xl text-center font-gillsans font-semibold">
              Past Entries
            </h3>
            <ul className="list-none p-2">
              {fakeEntries.map((entry) => (
                <li className="list-none text-xl py-6 font-gillsans  transition-all duration-100 hover:scale-110">
                  {entry}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
