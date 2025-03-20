import React from "react";
import { NavLink } from "react-router-dom";
import { GoChecklist } from "react-icons/go";

const Sidebar = () => {
  return (
    <aside className="hidden md:block md:w-[18%] min-h-screen border-r border-gray-200 transition-all duration-300">
      <div className="flex flex-col gap-4 pt-6 pl-[20%] px-5 text-[15px]">
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              isActive
                ? "bg-slate-900 text-white shadow-md"
                : "text-gray-800 hover:bg-gray-100 hover:text-gray-900"
            }`
          }
          to="/add"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-7 w-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
            />
          </svg>
          <p className="hidden xl:block">Add Items</p>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              isActive
                ? "bg-slate-900 text-white shadow-md"
                : "text-gray-800 hover:bg-gray-100 hover:text-gray-900"
            }`
          }
          to="/list"
        >
          <GoChecklist className="h-7 w-7" />
          <p className="hidden xl:block">List Items</p>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              isActive
                ? "bg-slate-900 text-white shadow-md"
                : "text-gray-800 hover:bg-gray-100 hover:text-gray-900"
            }`
          }
          to="/orders"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          <p className="hidden xl:block">Orders</p>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
