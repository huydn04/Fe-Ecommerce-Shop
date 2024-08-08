import React, { useState } from "react";
import { FaCheckCircle, FaEye, FaTrash, FaSearch, FaTimes} from "react-icons/fa";
import SidebarAdminPages from "../../components/admin/sidebar/SidebarAdmin";
import OrderDetailModal from "./OrderDetailModal";

const OrderList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const data = [
    {
      code_orders: "#10421",
      date: "1 Nov, 10:20 AM",
      status: "Paid",
      name: "Phúc Hậu",
      phone: "123-456-7890",
      address: "Biên Hòa",
      voucher: "ABC123",
      total_payment: "$140.20",
      total_payment_sale: "$120.00",
      payment_methods: "Tiền mặt",
      order_date: "1 Nov, 2023",
      expected_delivery_date: "5 Nov, 2023",
      customerImg: "https://randomuser.me/api/portraits/men/1.jpg",
      product: "Táo Xanh",
    },
    {
      code_orders: "#10422",
      date: "2 Nov, 11:15 AM",
      status: "Unpaid",
      name: "Nhuần Linh",
      phone: "234-567-8901",
      address: "Biên Hòa",
      voucher: "DEF456",
      total_payment: "$90.00",
      total_payment_sale: "$80.00",
      payment_methods: "Chuyển khoản",
      order_date: "2 Nov, 2023",
      expected_delivery_date: "6 Nov, 2023",
      customerImg: "https://randomuser.me/api/portraits/women/1.jpg",
      product: "Muối",
    },
    {
      code_orders: "#10423",
      date: "3 Nov, 2:00 PM",
      status: "Unpaid",
      name: "Hoàng Nhân",
      phone: "345-678-9012",
      address: "Nhơn Trạch",
      voucher: "GHI789",
      total_payment: "$75.00",
      total_payment_sale: "$70.00",
      payment_methods: "Momo",
      order_date: "3 Nov, 2023",
      expected_delivery_date: "7 Nov, 2023",
      customerImg: "https://randomuser.me/api/portraits/men/2.jpg",
      product: "Cam",
    },
    {
      code_orders: "#10424",
      date: "4 Nov, 9:30 AM",
      status: "Paid",
      name: "Yến Nhi",
      phone: "456-789-0123",
      address: "Hà Nội",
      voucher: "JKL012",
      total_payment: "$150.50",
      total_payment_sale: "$145.00",
      payment_methods: "Tiền mặt",
      order_date: "4 Nov, 2023",
      expected_delivery_date: "8 Nov, 2023",
      customerImg: "https://randomuser.me/api/portraits/women/2.jpg",
      product: "Chuối",
    },
    {
      code_orders: "#10425",
      date: "5 Nov, 1:45 PM",
      status: "Paid",
      name: "Minh Nghĩa",
      phone: "567-890-1234",
      address: "Biên Hòa",
      voucher: "MNO345",
      total_payment: "$200.00",
      total_payment_sale: "$190.00",
      payment_methods: "PayPal",
      order_date: "5 Nov, 2023",
      expected_delivery_date: "9 Nov, 2023",
      customerImg: "https://randomuser.me/api/portraits/men/3.jpg",
      product: "Nho",
    },
    {
      code_orders: "#10426",
      date: "6 Nov, 3:00 PM",
      status: "Unpaid",
      name: "Thu Thảo",
      phone: "678-901-2345",
      address: "Hồ Chí Minh",
      voucher: "PQR678",
      total_payment: "$120.00",
      total_payment_sale: "$115.00",
      payment_methods: "Bank",
      order_date: "6 Nov, 2023",
      expected_delivery_date: "10 Nov, 2023",
      customerImg: "https://randomuser.me/api/portraits/women/3.jpg",
      product: "Dưa Hấu",
    },
    {
      code_orders: "#10427",
      date: "7 Nov, 10:00 AM",
      status: "Paid",
      name: "Trung Hiếu",
      phone: "789-012-3456",
      address: "Biên Hòa",
      voucher: "STU901",
      total_payment: "$180.00",
      total_payment_sale: "$170.00",
      payment_methods: "Credit Card",
      order_date: "7 Nov, 2023",
      expected_delivery_date: "11 Nov, 2023",
      customerImg: "https://randomuser.me/api/portraits/men/4.jpg",
      product: "Ổi",
    },
  ];

  const handleView = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  const filteredData = data.filter(item =>
    item.code_orders.includes(searchTerm) ||
    item.date.includes(searchTerm) ||
    item.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.phone.includes(searchTerm) ||
    item.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.voucher.includes(searchTerm) ||
    item.total_payment.includes(searchTerm) ||
    item.total_payment_sale.includes(searchTerm) ||
    item.payment_methods.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen">
      <SidebarAdminPages />
      <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
        <div className="flex justify-end mb-4">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="w-full p-3 pl-12 border border-gray-300 rounded-lg shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-2 px-4 text-center text-gray-500 font-medium">
                  ID
                </th>
                <th className="py-2 px-4 text-center text-gray-500 font-medium">
                  DATE
                </th>
                <th className="py-2 px-4 text-center text-gray-500 font-medium">
                  STATUS
                </th>
                <th className="py-2 px-4 text-center text-gray-500 font-medium">
                  CUSTOMER
                </th>
                <th className="py-2 px-4 text-center text-gray-500 font-medium">
                  PRODUCT
                </th>
                <th className="py-2 px-4 text-center text-gray-500 font-medium">
                  ACTIONS
                </th>
              </tr>
            </thead>
            <tbody>
  {filteredData.map((item, index) => (
    <tr key={index} className="border-t border-gray-200">
      <td className="py-2 px-4 text-center text-gray-700">
        {item.code_orders}
      </td>
      <td className="py-2 px-4 text-center text-gray-700">
        {item.date}
      </td>
      <td className="py-2 px-4 text-center text-gray-700">
      <div className="flex items-center translate-x-10">
    {item.status === "Paid" ? (
      <FaCheckCircle className="text-green-500 text-2xl" />
    ) : (
      <FaTimes className="text-white bg-red-500 border border-red-600 rounded-full p-1 text-2xl" />
    )}
    <span>{item.status}</span>
  </div>
      </td>
      <td className="py-2 px-4 text-center flex items-center translate-x-12">
        <img
          src={item.customerImg}
          alt={item.name}
          className="w-8 h-8 rounded-full mr-2"
        />
        <span>{item.name}</span>
      </td>
      <td className="py-2 px-4 text-center text-gray-700">
        {item.product}
      </td>
      <td className="py-2 px-4 text-center flex items-center justify-center space-x-4">
        <button
          onClick={() => handleView(item)}
          className="text-blue-500 hover:text-blue-700"
        >
          <FaEye />
        </button>
        <button
          onClick={() => console.log(`Delete order ${item.code_orders}`)}
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
                
                      {isModalOpen && (
                        <OrderDetailModal
                          order={selectedOrder}
                          onClose={handleCloseModal}
                        />
                      )}
                    </div>
                  );
                };
                
                export default OrderList;
                