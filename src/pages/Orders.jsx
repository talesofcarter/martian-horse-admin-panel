import React, { useState, useEffect } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);
  const totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);

  const fetchAllOrders = async () => {
    if (!token) return;

    try {
      const response = await axios.post(
        `${backendUrl}/api/order/list`,
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        setOrders(response.data.orders);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch orders.");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <section className="p-4 sm:p-6 max-w-full lg:max-w-6xl mx-auto">
      <h3 className="text-lg sm:text-xl font-semibold mb-4">
        Orders Dashboard
      </h3>

      {/* Mobile and Medium screens layout */}
      <div className="lg:hidden space-y-4">
        {orders.map((order, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 border hover:bg-gray-100"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-sm">Order #{index + 1}</span>
            </div>
            <div className="space-y-2 text-sm">
              <div>
                <span className="font-medium">Customer: </span>
                {order.address.firstName} {order.address.lastName}
                <br />
                <span className="text-gray-600">{order.address.phone}</span>
              </div>
              <div>
                <span className="font-medium">Order ID: </span>
                <div className="mt-1">
                  {order.items.map((item, i) => (
                    <p key={i} className="truncate">
                      {item._id} x {item.quantity}
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <span className="font-medium">Payment Method: </span>
                {order.paymentMethod}
              </div>
              <div>
                <span className="font-medium">Status: </span>
                <select className="w-full p-1 border rounded-md text-sm mt-1">
                  <option value="order placed">Order Placed</option>
                  <option value="processing">Processing</option>
                  <option value="dispatched">Dispatched</option>
                  <option value="in-transit">In-transit</option>
                  <option value="delivered">Delivered</option>
                </select>
              </div>
              <div>
                <span className="font-medium">Total: </span>
                <span className="font-bold">
                  {currency}{" "}
                  {new Intl.NumberFormat("en-KE").format(
                    order.amount.toFixed(2)
                  )}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Large screens table layout */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 text-left">#</th>
              <th className="p-3 text-left">Customer</th>
              <th className="p-3 text-left">Order ID</th>
              <th className="p-3 text-left">Quantity</th>
              <th className="p-3 text-left">Payment Method</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">
                  {order.address.firstName} {order.address.lastName}
                  <br />
                  <span className="text-gray-600 text-sm">
                    {order.address.phone}
                  </span>
                </td>
                <td className="p-3">
                  {order.items.map((item, i) => (
                    <p key={i}>{item.name}</p>
                  ))}
                </td>
                <td className="p-3">
                  <p>{order.quantity}</p>
                </td>
                <td className="p-3">{order.paymentMethod}</td>
                <td className="p-3">
                  <select className="p-2 border rounded-md">
                    <option value="order placed">Order Placed</option>
                    <option value="processing">Processing</option>
                    <option value="dispatched">Dispatched</option>
                    <option value="in-transit">In-transit</option>
                    <option value="delivered">Delivered</option>
                  </select>
                </td>
                <td className="p-3 font-bold">
                  {currency}{" "}
                  {new Intl.NumberFormat("en-KE").format(
                    order.amount.toFixed(2)
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Fixed Footer */}
      <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-2 sm:p-4 text-center font-semibold shadow-md text-xs sm:text-base">
        Total Sales: {currency}{" "}
        {new Intl.NumberFormat("en-KE").format(totalAmount.toFixed(2))}
      </div>
    </section>
  );
};

export default Orders;
