import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import { useState } from "react";
import Login from "./components/Login";

function App() {
  const [token, setToken] = useState("");

  return (
    <main className="min-h-screen flex flex-col">
      {token === "" ? (
        <Login />
      ) : (
        <>
          <Navbar />
          <div className="flex flex-1">
            <Sidebar />
            <div className="w-[70%] mx-auto ml-[max(5vw, 25px)] my-8 text-gray-600 text-base">
              <Routes>
                <Route path="/add" element={<Add />} />
                <Route path="/list" element={<List />} />
                <Route path="/orders" element={<Orders />} />
              </Routes>
            </div>
            <div className="flex-1 p-4 md:p-6 bg-gray-50">
              <Outlet />
            </div>
          </div>
        </>
      )}
    </main>
  );
}

export default App;
