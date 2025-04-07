import React, { useState, useEffect } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { IoClose } from "react-icons/io5";
import {
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCity,
  FaGlobe,
  FaPhone,
} from "react-icons/fa";
import "./../orders.css";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
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
      }
    } catch (error) {
      console.error(error);
      toast.error("Error fetching orders");
    }
  };

  const statusHandler = async (e, orderId) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/order/status`,
        { orderId, status: e.target.value },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchAllOrders();
      }
    } catch (error) {
      console.error(error);
      toast.error("Error updating status");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  const getStatusColor = (status) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800";
      case "processing":
        return "bg-yellow-100 text-yellow-800";
      case "dispatched":
        return "bg-blue-100 text-blue-800";
      case "in-transit":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatPrice = (amount) => {
    return new Intl.NumberFormat("en-KE").format(amount.toFixed(2));
  };

  const OrderPopup = ({ order, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-2xl transform transition-all duration-300 scale-100 hover:scale-[1.01]">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-800">
            Order #{order._id.slice(-6)}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors p-1 rounded-full hover:bg-gray-100 cursor-pointer"
          >
            <IoClose size={24} />
          </button>
        </div>
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-3">
              <p className="text-sm text-gray-600">
                <span className="font-medium text-gray-800">Order ID:</span>{" "}
                {order._id}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium text-gray-800">Date:</span>{" "}
                {new Date(order.date).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium text-gray-800">Price:</span>{" "}
                {currency} {formatPrice(order.amount)}
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-gray-600">
                <span className="font-medium text-gray-800">Payment:</span>{" "}
                {order.paymentMethod}
              </p>
              <div>
                <span className="text-sm font-medium text-gray-800 block mb-1">
                  Status:
                </span>
                <select
                  onChange={(e) => statusHandler(e, order._id)}
                  value={order.status}
                  className={`w-full p-2 rounded-md text-sm border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ios-border-fix ${getStatusColor(
                    order.status
                  )} cursor-pointer`}
                >
                  <option value="order placed">Order Placed</option>
                  <option value="processing">Processing</option>
                  <option value="dispatched">Dispatched</option>
                  <option value="in-transit">In-transit</option>
                  <option value="delivered">Delivered</option>
                </select>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-800 mb-3">Order Items</h4>
            <div className="space-y-3">
              {order.items.map((item, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 gap-2 text-sm border-b border-gray-200 pb-2 last:border-b-0"
                >
                  <span className="text-gray-600">{item.name}</span>
                  <span className="text-gray-800 font-medium text-center">
                    {item.quantity}
                  </span>
                  <span className="text-gray-800 font-medium text-right">
                    {currency} {formatPrice(item.price)}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 mb-3">
              Shipping Information
            </h4>
            <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <FaUser className="text-gray-500" size={16} />
                  <span>
                    {order.address.firstName} {order.address.lastName}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaEnvelope className="text-gray-500" size={16} />
                  <span>{order.address.email || "N/A"}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaMapMarkerAlt className="text-gray-500" size={16} />
                  <span>{order.address.street || order.address.address}</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <FaCity className="text-gray-500" size={16} />
                  <span>
                    {order.address.city},{" "}
                    {order.address.county || order.address.postalCode}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaGlobe className="text-gray-500" size={16} />
                  <span>{order.address.country || "N/A"}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaPhone className="text-gray-500" size={16} />
                  <span>{order.address.phone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="orders-dashboard">
      <h3 className="text-xl font-semibold mb-6">Orders Dashboard</h3>

      <div className="overflow-x-auto">
        <table className="order-table">
          <thead className="table-header">
            <tr>
              <th>Order ID</th>
              <th>Order Date</th>
              <th>Status</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="table-row">
                <td className="table-cell" data-label="Order ID">
                  {order._id}
                </td>
                <td className="table-cell" data-label="Date">
                  {new Date(order.date).toLocaleDateString()}
                </td>
                <td className="table-cell" data-label="Status">
                  <span
                    className={`status-badge ${getStatusColor(order.status)}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="table-cell" data-label="Price">
                  {currency} {formatPrice(order.amount)}
                </td>
                <td className="table-cell" data-label="Actions">
                  <button
                    onClick={() => setSelectedOrder(order)}
                    className="bg-gray-800 text-white px-3 rounded-md py-3 font-medium transition-all hover:bg-white hover:text-gray-800 border border-transparent hover:border-gray-800 duration-500"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="total-sales">
        Total Sales: {currency} {formatPrice(totalAmount)}
      </div>

      {selectedOrder && (
        <OrderPopup
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
        />
      )}
    </section>
  );
};

export default Orders;
