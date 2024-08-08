import React from "react";
import { FaTimes } from "react-icons/fa";

const OrderDetailModal = ({ order, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Chi tiết đơn hàng</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FaTimes />
          </button>
        </div>
        <div className="space-y-2">
          <div>
            <strong>Mã đơn hàng:</strong> {order.code_orders}
          </div>
          <div>
            <strong>Khách hàng:</strong> {order.name}
          </div>
          <div>
            <strong>Số điện thoại:</strong> {order.phone}
          </div>
          <div>
            <strong>Địa chỉ:</strong> {order.address}
          </div>
          <div>
            <strong>Voucher:</strong> {order.voucher}
          </div>
          <div>
            <strong>Tổng thanh toán:</strong> {order.total_payment}
          </div>
          <div>
            <strong>Giá sau khuyến mãi:</strong> {order.total_payment_sale}
          </div>
          <div>
            <strong>Phương thức thanh toán:</strong> {order.payment_methods}
          </div>
          <div>
            <strong>Ngày đặt hàng:</strong> {order.order_date}
          </div>
          <div>
            <strong>Ngày dự kiến giao hàng:</strong> {order.expected_delivery_date}
          </div>
          <div>
            <strong>Sản phẩm:</strong> {order.product}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailModal;
