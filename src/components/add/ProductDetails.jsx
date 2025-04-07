import React from "react";

const ProductDetails = ({
  name,
  description,
  category,
  subCategory,
  price,
  bestseller,
  sizes,
  setName,
  setDescription,
  setCategory,
  setSubCategory,
  setPrice,
  setBestseller,
  setSizes,
}) => {
  const handleSizeToggle = (size) => {
    setSizes((prev) => {
      const newSizes = prev.includes(size)
        ? prev.filter((item) => item !== size)
        : [...prev, size];
      return newSizes;
    });
  };
  return (
    <>
      <div className="mt-6">
        <label
          htmlFor="product-name"
          className="block mb-2 text-base sm:text-lg font-medium text-gray-700"
        >
          Product Name
        </label>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          id="product-name"
          name="productName"
          type="text"
          placeholder="Type here..."
          required
          className="w-full px-4 py-2 text-zinc-800 bg-white border border-gray-300 rounded-md focus:ring focus:ring-zinc-800 focus:border-zinc-800 outline-none transition-all duration-200 placeholder-zinc-600 text-sm sm:text-base ios-border-fix"
        />
      </div>

      <div className="mt-6">
        <label
          htmlFor="product-description"
          className="block mb-2 text-base sm:text-base font-medium text-gray-700"
        >
          Product Description
        </label>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          id="product-name"
          name="productName"
          type="text"
          placeholder="Enter product description..."
          required
          className="w-full px-4 py-2 text-zinc-800 bg-white border border-gray-300 rounded-md focus:ring focus:ring-zinc-800 focus:border-zinc-800 outline-none transition-all duration-200 placeholder-zinc-600 text-sm sm:text-base min-h-[100px] sm:min-h-[120px] ios-border-fix"
        ></textarea>
      </div>

      <div className="mt-6">
        <label
          htmlFor="product-category"
          className="block mb-2 text-base sm:text-base font-medium text-gray-700"
        >
          Product Category
        </label>
        <div className="relative">
          <select
            onChange={(e) => setCategory(e.target.value)}
            defaultValue={category}
            id="product-category"
            name="productCategory"
            className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:ring focus:ring-zinc-800 focus:border-zinc-800 outline-none appearance-none transition-all duration-200 cursor-pointer hover:border-gray-400 text-sm sm:text-base ios-border-fix"
          >
            <option value="">Select a category...</option>
            <option value="Accessories">Accessories</option>
            <option value="Blouses">Blouses</option>
            <option value="Dresses">Dresses</option>
            <option value="Skirts">Skirts</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500"
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
          className="block mb-2 text-base sm:text-base font-medium text-gray-700"
        >
          Sub-Category
        </label>
        <div className="relative">
          <select
            onChange={(e) => setSubCategory(e.target.value)}
            defaultValue={subCategory}
            id="product-category"
            name="productCategory"
            className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:ring focus:ring-zinc-800 focus:border-zinc-800 outline-none appearance-none transition-all duration-200 cursor-pointer hover:border-gray-400 text-sm sm:text-base ios-border-fix"
          >
            <option value="">Select a subcategory...</option>
            <option value="Official">Official</option>
            <option value="Casual">Casual</option>
            <option value="Vacation">Vacation</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500"
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
          className="block mb-2 text-base sm:text-base font-medium text-gray-700"
        >
          Product Price
        </label>
        <input
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          id="product-price"
          name="productPrice"
          type="number"
          placeholder="Price in KES"
          min="0"
          step="1"
          className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:ring focus:ring-zinc-800 focus:border-zinc-800 outline-none transition-all duration-200 hover:border-gray-400 text-sm sm:text-base ios-border-fix"
        />
      </div>
      <div className="mt-6">
        <label
          htmlFor="sizes"
          className="block mb-2 text-base sm:text-base font-medium text-gray-700"
        >
          Product Sizes
        </label>
        <div className="flex gap-2 sm:gap-3 flex-wrap">
          {["S", "M", "L", "XL"].map((size) => (
            <div key={size}>
              <input
                type="checkbox"
                id={`size-${size}`}
                name="sizes"
                value={size}
                checked={sizes.includes(size)}
                onChange={() => handleSizeToggle(size)}
                className="hidden peer ios-border-fix"
              />
              <label
                htmlFor={`size-${size}`}
                className={`flex justify-center w-10 h-10 sm:w-12 sm:h-12 px-5 py-2 rounded-md border cursor-pointer transition-all duration-200 text-sm sm:text-base ${
                  sizes.includes(size)
                    ? "bg-zinc-800 text-white border-zinc-800 font-bold"
                    : "bg-gray-100 text-gray-700 border-gray-300"
                }`}
              >
                {size}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex items-center gap-2 sm:gap-3">
        <input
          onChange={() => setBestseller((prev) => !prev)}
          checked={bestseller}
          type="checkbox"
          id="bestseller"
          name="bestseller"
          className="w-5 h-5 sm:w-5 sm:h-5 text-zinc-800 border-gray-300 rounded focus:ring-offset-2 cursor-pointer transition-all duration-200 ios-border-fix"
        />
        <label
          htmlFor="bestseller"
          className="text-base sm:text-base font-medium text-gray-700 cursor-pointer"
        >
          Add to Bestseller
        </label>
      </div>
    </>
  );
};

export default ProductDetails;
