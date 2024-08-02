import React, { useState } from "react";
import { FaCheckCircle, FaEye, FaTrash, FaSearch } from "react-icons/fa";
import SidebarAdminPages from "../../components/admin/sidebar/SidebarAdmin";

const OrderList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const data = [
    // Dữ liệu giả
    {
      id: "#10421",
      date: "1 Nov, 10:20 AM",
      status: "Paid",
      customer: "Orlando Imieto",
      customerImg: "https://randomuser.me/api/portraits/men/1.jpg",
      product: "Táo Xanh",
      revenue: "$140,20",
    },
    {
      id: "#10422",
      date: "1 Nov, 10:53 AM",
      status: "Paid",
      customer: "Alice Murinho",
      customerImg: "https://randomuser.me/api/portraits/women/1.jpg",
      product: "Muối",
      revenue: "$42,00",
    },
    {
      id: "#10423",
      date: "2 Nov, 11:15 AM",
      status: "Unpaid",
      customer: "John Doe",
      customerImg: "https://randomuser.me/api/portraits/men/2.jpg",
      product: "Cam",
      revenue: "$90,00",
    },
    {
      id: "#10424",
      date: "3 Nov, 12:30 PM",
      status: "Paid",
      customer: "Jane Smith",
      customerImg: "https://randomuser.me/api/portraits/women/2.jpg",
      product: "Chuối",
      revenue: "$60,00",
    },
    {
      id: "#10425",
      date: "4 Nov, 1:45 PM",
      status: "Pending",
      customer: "Michael Johnson",
      customerImg: "https://randomuser.me/api/portraits/men/3.jpg",
      product: "Nho",
      revenue: "$75,00",
    },
    {
      id: "#10426",
      date: "5 Nov, 2:50 PM",
      status: "Paid",
      customer: "Emily Davis",
      customerImg: "https://randomuser.me/api/portraits/women/3.jpg",
      product: "Dưa Hấu",
      revenue: "$120,00",
    },
    {
      id: "#10427",
      date: "6 Nov, 3:30 PM",
      status: "Unpaid",
      customer: "David Brown",
      customerImg: "https://randomuser.me/api/portraits/men/4.jpg",
      product: "Ổi",
      revenue: "$85,00",
    },
  ];

  const handleView = (id) => {
    console.log(`View order ${id}`);
    // Implement logic to view the order details
  };

  const handleDelete = (id) => {
    console.log(`Delete order ${id}`);
    // Implement logic to delete the order
  };

  // Filter data based on search term
  const filteredData = data.filter(item =>
    item.id.includes(searchTerm) ||
    item.date.includes(searchTerm) ||
    item.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.revenue.includes(searchTerm)
  );

  return (
    <div className="flex h-screen">
      <div className="w-[260px] flex-shrink-0">
        <SidebarAdminPages />
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        <div className="mb-4">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="w-full p-3 pl-12 border border-gray-300 rounded-lg shadow-sm  "
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-2 px-4 text-left text-gray-500 font-medium">
                  ID
                </th>
                <th className="py-2 px-4 text-left text-gray-500 font-medium">
                  DATE
                </th>
                <th className="py-2 px-4 text-left text-gray-500 font-medium">
                  STATUS
                </th>
                <th className="py-2 px-4 text-left text-gray-500 font-medium">
                  CUSTOMER
                </th>
                <th className="py-2 px-4 text-left text-gray-500 font-medium">
                  PRODUCT
                </th>
                <th className="py-2 px-4 text-left text-gray-500 font-medium">
                  REVENUE
                </th>
                <th className="py-2 px-4 text-left text-gray-500 font-medium">
                  ACTIONS
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index} className="border-t border-gray-200">
                  <td className="py-2 px-4 flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-gray-700">{item.id}</span>
                  </td>
                  <td className="py-2 px-4 text-gray-700">{item.date}</td>
                  <td className="py-2 px-4 text-gray-700">
                    <div className="flex items-center">
                      <FaCheckCircle className="text-green-500 mr-1" />
                      <span>{item.status}</span>
                    </div>
                  </td>
                  <td className="py-2 px-4 flex items-center">
                    <div className="flex items-center">
                      <img
                        src={item.customerImg}
                        alt={item.customer}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <span className="text-gray-700">{item.customer}</span>
                    </div>
                  </td>
                  <td className="py-2 px-4 text-gray-700">{item.product}</td>
                  <td className="py-2 px-4 text-gray-700">{item.revenue}</td>
                  <td className="py-2 px-4 flex items-center space-x-4">
                    <button
                      onClick={() => handleView(item.id)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FaEye />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
