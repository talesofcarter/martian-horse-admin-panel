import React from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

const Add = () => {
  return (
    <form className="w-full max-w-md mx-auto">
      <section className="bg-white rounded-xl shadow-sm custom-shadow p-6">
        {/* Header */}
        <header className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Upload Images</h3>
          <p className="text-sm text-gray-500">
            Supports up to 4 images (JPG, PNG)
          </p>
        </header>

        {/* Drop Zone */}
        <div className="border-2 border-dashed border-zinc-300 rounded-lg p-6 mb-4 hover:border-zinc-900 transition-colors duration-200">
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

      <div className="mt-6">
        <label
          htmlFor="product-name"
          className="block mb-2 text-base font-medium text-gray-700"
        >
          Product Name
        </label>
        <input
          id="product-name"
          name="productName"
          type="text"
          placeholder="Type here..."
          required
          className="w-full px-4 py-2 text-zinc-800 bg-white border border-gray-300 rounded-md focus:ring focus:ring-zinc-800 focus:border-zinc-800 outline-none transition-all duration-200 placeholder-zinc-600"
        />
      </div>

      <div className="mt-6">
        <label
          htmlFor="product-description"
          className="block mb-2 text-base font-medium text-gray-700"
        >
          Product Description
        </label>
        <textarea
          id="product-name"
          name="productName"
          type="text"
          placeholder="Enter product description..."
          required
          className="w-full px-4 py-2 text-zinc-800 bg-white border border-gray-300 rounded-md focus:ring focus:ring-zinc-800 focus:border-zinc-800 outline-none transition-all duration-200 placeholder-zinc-600"
        ></textarea>
      </div>

      <div className="mt-6">
        <label
          htmlFor="product-category"
          className="block mb-2 text-base font-medium text-gray-700"
        >
          Product Category
        </label>
        <div className="relative">
          <select
            id="product-category"
            name="productCategory"
            className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:ring focus:ring-zinc-800 focus:border-zinc-800 outline-none appearance-none transition-all duration-200 cursor-pointer hover:border-gray-400"
          >
            <option value="" disabled selected>
              Select a category...
            </option>
            <option value="Accessories">Accessories</option>
            <option value="Blouses">Blouses</option>
            <option value="Dresses">Dresses</option>
            <option value="Skirts">Skirts</option>
          </select>
          {/* Custom dropdown arrow */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <label
          htmlFor="product-category"
          className="block mb-2 text-base font-medium text-gray-700"
        >
          Sub-Category
        </label>
        <div className="relative">
          <select
            id="product-category"
            name="productCategory"
            className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:ring focus:ring-zinc-800 focus:border-zinc-800 outline-none appearance-none transition-all duration-200 cursor-pointer hover:border-gray-400"
          >
            <option value="" disabled selected>
              Select a subcategory...
            </option>
            <option value="Official">Official</option>
            <option value="Casual">Casual</option>
            <option value="Vacation">Vacation</option>
          </select>
          {/* Custom dropdown arrow */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <label
          htmlFor="product-price"
          className="block mb-2 text-base font-medium text-gray-700"
        >
          Product Price
        </label>
        <input
          id="product-price"
          name="productPrice"
          type="number"
          placeholder="Price in KES"
          min="0"
          step="1"
          className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:ring focus:ring-zinc-800 focus:border-zinc-800 outline-none transition-all duration-200 hover:border-gray-400"
        />
      </div>

      <div className="mt-6">
        <label
          htmlFor="sizes"
          className="block mb-2 text-base font-medium text-gray-700"
        >
          Product Sizes
        </label>
        <div className="flex gap-2 flex-wrap">
          {["S", "M", "L", "XL"].map((size) => (
            <div key={size}>
              <input
                type="checkbox"
                id={`size-${size}`}
                name="sizes"
                value={size}
                className="hidden peer"
              />
              <label
                htmlFor={`size-${size}`}
                className="inline-block px-3 py-2 text-gray-700 font-bold bg-gray-100 border border-gray-300 rounded-md cursor-pointer peer-checked:bg-zinc-800 peer-checked:text-white peer-checked:border-zinc-800"
              >
                {size}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2">
        <input
          type="checkbox"
          id="bestseller"
          name="bestseller"
          className="w-5 h-5 text-zinc-800 border-gray-300 rounded focus:ring-offset-2 cursor-pointer transition-all duration-200"
        />
        <label
          htmlFor="bestseller"
          className="text-base font-medium text-gray-700 cursor-pointer"
        >
          Add to Bestseller
        </label>
      </div>

      <div className="mt-6 flex justify-start">
        <button
          type="submit"
          className="text-base w-[25%] px-4 py-3 bg-black text-white rounded-md hover:bg-zinc-800 cursor-pointer"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default Add;
