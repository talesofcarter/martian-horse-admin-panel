import React from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

const FileUpload = ({
  setImage1,
  setImage2,
  setImage3,
  setImage4,
  image1,
  image2,
  image3,
  image4,
}) => {
  const imageSetters = {
    image1: setImage1,
    image2: setImage2,
    image3: setImage3,
    image4: setImage4,
  };

  const imageStates = {
    image1: image1,
    image2: image2,
    image3: image3,
    image4: image4,
  };
  return (
    <>
      {/* Uploaded Files Preview */}
      <div
        className="grid grid-cols-2 sm:grid-cols-4 gap-3"
        role="region"
        aria-label="Image previews"
      >
        {["image1", "image2", "image3", "image4"].map((image) => (
          <div
            key={image}
            className="aspect-square bg-gray-100 rounded-md flex items-center justify-center border border-gray-200"
            aria-label={`Image slot ${image}`}
          >
            <label
              htmlFor={image}
              className="text-gray-400 text-sm cursor-pointer w-full h-full flex items-center justify-center"
            >
              {!imageStates[image] ? (
                <IoCloudUploadOutline className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400" />
              ) : (
                (console.log(imageStates[image]),
                (
                  <img
                    className="w-full h-full object-contain"
                    src={URL.createObjectURL(imageStates[image])}
                    alt=""
                  />
                ))
              )}
              <input
                onChange={(e) => imageSetters[image](e.target.files[0])}
                type="file"
                id={image}
                hidden
              />
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default FileUpload;
