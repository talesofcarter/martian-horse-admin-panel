import React from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

const Add = () => {
  return (
    <form className="w-full max-w-md mx-auto">
      <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        {/* Header */}
        <header className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Upload Images</h3>
          <p className="text-sm text-gray-500">
            Supports up to 4 images (JPG, PNG)
          </p>
        </header>

        {/* Drop Zone */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 mb-4 hover:border-blue-400 transition-colors duration-200">
          <div className="flex flex-col items-center gap-3">
            <IoCloudUploadOutline className="w-12 h-12 text-gray-400" />
            <div className="text-center">
              <p className="text-gray-600 font-medium">
                Drag and drop your files here
              </p>
              <p className="text-sm text-gray-400">or</p>
            </div>

            <label
              htmlFor="image-upload"
              className="px-4 py-2 bg-black text-white rounded-md hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              Browse Files
              <input
                type="file"
                id="image-upload"
                name="images"
                multiple
                accept="image/jpeg,image/png"
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Uploaded Files Preview */}
        <div
          className="grid grid-cols-4 gap-3"
          role="region"
          aria-label="Image previews"
        >
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="aspect-square bg-gray-100 rounded-md flex items-center justify-center border border-gray-200"
              aria-label={`Image slot ${num}`}
            >
              <span className="text-gray-400 text-sm">Empty</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-zinc-800 text-white rounded-md hover:bg-black transition-colors"
          >
            Upload
          </button>
        </div>
      </section>
    </form>
  );
};

export default Add;
