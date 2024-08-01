const DichVu = () => {
  return (
    <div
      className="shadow-lg flex flex-row justify-between items-center p-10 gap-[61px] absolute rounded-lg
border border-black-600 mt-4"
    >
      <div className="w-[250px]">
        <a href="#" className="font-semibold text-base hover:text-gray-300">
          Free Shipping
        </a>
        <p className="text-sm">
          Giao hàng miễn phí cho tất cả đơn hàng của bạn
        </p>
      </div>
      <div className="w-[250px]">
        <a
          href="#"
          className="font-semibold text-base hover:text-gray-300"
          size={16}
        >
          Hỗ trợ khách hàng 24/7
        </a>
        <p className="text-sm">Truy cập tức thì vào Hỗ trợ</p>
      </div>
      <div className="w-[250px]">
        <a
          href="#"
          className="font-semibold text-base hover:text-gray-300"
          size={16}
        >
          Thanh toán an toàn 100%
        </a>
        <p className="text-sm">Chúng tôi đảm bảo tiền của bạn được tiết kiệm</p>
      </div>
      <div className="w-[250px]">
        <a
          href="#"
          className="font-semibold text-base hover:text-gray-300"
          size={16}
        >
          Đảm bảo hoàn tiền
        </a>
        <p className="text-sm">Đảm bảo hoàn tiền trong 30 ngày</p>
      </div>
    </div>
  )
}
export default DichVu
