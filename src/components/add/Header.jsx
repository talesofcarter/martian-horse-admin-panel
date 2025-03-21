import React from "react";

const Header = () => {
  return (
    <header className="mb-4">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
        Upload Images
      </h3>
      <p className="text-sm sm:text-base text-gray-500">
        Supports up to 4 images (JPG, PNG)
      </p>
    </header>
  );
};

export default Header;
