import React from "react";

const AddButton = () => {
  return (
    <div className="mt-6 flex justify-start">
      <button
        type="submit"
        className="text-base sm:text-lg w-full sm:w-[25%] px-4 py-2 sm:py-3 bg-black text-white rounded-md hover:bg-zinc-800 cursor-pointer"
      >
        Add
      </button>
    </div>
  );
};

export default AddButton;
