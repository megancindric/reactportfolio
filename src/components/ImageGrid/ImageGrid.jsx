import React, { useState } from "react";
import Kermit from "../../assets/kermit.png";

const ImageGrid = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex flex-row justify-around">
      <div className="flex justify-center flex-1 flex-wrap gap-4">
        <img
          className=" h-80 w-80 object-cover drop-shadow-2xl"
          alt="Profile for Megan Cindric"
          src={Kermit}
        />
        <img
          className=" h-80 w-80 object-cover drop-shadow-2xl"
          alt="Profile for Megan Cindric"
          src={Kermit}
        />
        <img
          className=" h-80 w-80 object-cover drop-shadow-2xl"
          alt="Profile for Megan Cindric"
          src={Kermit}
        />
        <img
          className=" h-80 w-80 object-cover drop-shadow-2xl"
          alt="Profile for Megan Cindric"
          src={Kermit}
        />
        <img
          className=" h-80 w-80 object-cover drop-shadow-2xl"
          alt="Profile for Megan Cindric"
          src={Kermit}
        />
        <img
          className=" h-80 w-80 object-cover drop-shadow-2xl"
          alt="Profile for Megan Cindric"
          src={Kermit}
        />
        <img
          className=" h-80 w-80 object-cover drop-shadow-2xl"
          alt="Profile for Megan Cindric"
          src={Kermit}
        />
        <img
          className=" h-80 w-80 object-cover drop-shadow-2xl"
          alt="Profile for Megan Cindric"
          src={Kermit}
        />
      </div>
    </div>
  );
};

export default ImageGrid;
