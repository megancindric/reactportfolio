import React from "react";

const ImageModal = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
      <div className="max-w-3xl">
        <img src={image} alt="Full-size image" className="mx-auto" />
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-4 p-3 bg-white text-emerald-900 text-lg rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
