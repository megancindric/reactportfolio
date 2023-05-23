import React from "react";
import ImageGrid from "../../components/ImageGrid/ImageGrid";

const ArtPage = (props) => {
  return (
    <div className=" bg-lightPurple h-screen flex flex-col py-10 gap-20  font-gillsans text-darkPurple">
      <h1 className="text-7xl text-center">My Art</h1>
      <ImageGrid />
    </div>
  );
};

export default ArtPage;
