import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  async function removeProduct(id) {
    try {
      const response = await axios.post(
        backendUrl + "/api/product/remove",
        { id },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
        All Products List
      </h2>
      <div className="flex flex-col gap-4">
        {/* List Table Header */}
        <div className="hidden sm:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-3 px-4 bg-gray-50 text-gray-700 font-medium text-sm sm:text-base rounded-lg shadow-sm">
          <span>Image</span>
          <span>Name</span>
          <span>Category</span>
          <span>Price</span>
          <span className="text-center">Action</span>
        </div>

        {/* Product List */}
        {list.length === 0 ? (
          <p className="text-center text-gray-500 py-6">No products found.</p>
        ) : (
          list.map((item) => (
            <div
              key={item._id}
              className="grid grid-cols-1 sm:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-4 sm:gap-2 py-4 px-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 text-sm sm:text-base"
            >
              {/* Mobile Layout: Stacked */}
              <div className="sm:hidden flex items-center gap-4">
                <img
                  className="w-16 h-16 object-cover rounded-md"
                  src={item.image[0]}
                  alt={item.name}
                />
                <div className="flex-1">
                  <p className="font-medium text-gray-800">{item.name}</p>
                  <p className="text-gray-600">{item.category}</p>
                  <p className="text-gray-800">
                    {currency}{" "}
                    {new Intl.NumberFormat("en-KE").format(item.price)}
                  </p>
                </div>
                <button
                  onClick={() => removeProduct(item._id)}
                  className="p-2 text-red-600 hover:text-red-800 transition-colors duration-200"
                  aria-label={`Remove ${item.name}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </div>

              {/* Desktop/Tablet Layout: Grid */}
              <img
                className="hidden sm:block w-12 h-12 object-cover rounded-md"
                src={item.image[0]}
                alt={item.name}
              />
              <p className="hidden sm:block text-gray-800">{item.name}</p>
              <p className="hidden sm:block text-gray-600">{item.category}</p>
              <p className="hidden sm:block text-gray-800">
                {currency} {new Intl.NumberFormat("en-KE").format(item.price)}
              </p>
              <button
                onClick={() => removeProduct(item._id)}
                className="hidden sm:flex justify-center p-2 text-red-600 hover:text-red-800 transition-colors duration-200 cursor-pointer"
                aria-label={`Remove ${item.name}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default List;
