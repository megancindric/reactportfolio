import React from "react";

import RiceField from "../../assets/ricefield.jpeg";
const BlogPost = (props) => {
  return (
    <div className=" bg-white p-8 flex flex-col gap-6 rounded-xl drop-shadow-xl">
      <img
        className="bg-cover h-1/2"
        src={RiceField}
        fit="cover"
        height="50%"
      />
      <div sx={{ padding: "1rem" }}>
        <h3 className="text-4xl font-gillsans" variant="h4" mb={1}>
          The blog is coming soon!
        </h3>
      </div>
    </div>
  );
};

export default BlogPost;
