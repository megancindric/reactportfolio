import React from "react";
import ImageGrid from "../../components/ImageGrid/ImageGrid";

const ArtPage = (props) => {
  return (
    <div className=" bg-orange-50 h-screen flex flex-col py-10 gap-20  font-gillsans">
      <h1 className="text-7xl text-center text-emerald-900">My Art</h1>
      <ImageGrid />
    </div>
  );
};

export default ArtPage;
