import React, { useState } from "react";
import Kermit from "../../assets/kermit.png";
import ImageModal from "./ImageModal";

const ImageGrid = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = (image) => {
    setSelectedImage(null);
    setShowModal(false);
  };
  return (
    <div className="flex flex-row justify-around pb-10">
      <div className="flex justify-center flex-1 flex-wrap gap-4">
        <img
          className=" h-80 w-80 object-cover drop-shadow-2xl"
          alt="Profile for Megan Cindric"
          src={Kermit}
          onClick={() => openModal(Kermit)}
        />
        <img
          className=" h-80 w-80 object-cover drop-shadow-2xl"
          alt="Profile for Megan Cindric"
          src={Kermit}
          onClick={() => openModal(Kermit)}
        />{" "}
        <img
          className=" h-80 w-80 object-cover drop-shadow-2xl"
          alt="Profile for Megan Cindric"
          src={Kermit}
          onClick={() => openModal(Kermit)}
        />{" "}
        <img
          className=" h-80 w-80 object-cover drop-shadow-2xl"
          alt="Profile for Megan Cindric"
          src={Kermit}
          onClick={() => openModal(Kermit)}
        />{" "}
        <img
          className=" h-80 w-80 object-cover drop-shadow-2xl"
          alt="Profile for Megan Cindric"
          src={Kermit}
          onClick={() => openModal(Kermit)}
        />{" "}
        <img
          className=" h-80 w-80 object-cover drop-shadow-2xl"
          alt="Profile for Megan Cindric"
          src={Kermit}
          onClick={() => openModal(Kermit)}
        />{" "}
        <img
          className=" h-80 w-80 object-cover drop-shadow-2xl"
          alt="Profile for Megan Cindric"
          src={Kermit}
          onClick={() => openModal(Kermit)}
        />{" "}
        <img
          className=" h-80 w-80 object-cover drop-shadow-2xl"
          alt="Profile for Megan Cindric"
          src={Kermit}
          onClick={() => openModal(Kermit)}
        />{" "}
        <img
          className=" h-80 w-80 object-cover drop-shadow-2xl"
          alt="Profile for Megan Cindric"
          src={Kermit}
          onClick={() => openModal(Kermit)}
        />{" "}
        <img
          className=" h-80 w-80 object-cover drop-shadow-2xl"
          alt="Profile for Megan Cindric"
          src={Kermit}
          onClick={() => openModal(Kermit)}
        />{" "}
        <img
          className=" h-80 w-80 object-cover drop-shadow-2xl"
          alt="Profile for Megan Cindric"
          src={Kermit}
          onClick={() => openModal(Kermit)}
        />{" "}
        <img
          className=" h-80 w-80 object-cover drop-shadow-2xl"
          alt="Profile for Megan Cindric"
          src={Kermit}
          onClick={() => openModal(Kermit)}
        />
      </div>
      {showModal && <ImageModal image={selectedImage} onClose={closeModal} />}
    </div>
  );
};

export default ImageGrid;
