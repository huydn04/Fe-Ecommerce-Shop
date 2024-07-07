import PropTypes from "prop-types";

const BackGroup1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[79px] box-border max-w-full text-left text-31xl text-gray-scale-gray-900 font-body-small-body-small-400 lg:pb-[51px] lg:box-border mq825:pb-[33px] mq825:box-border ${className}`}
    >
      <div className="w-[1520px] flex flex-row items-end justify-start max-w-full">
        <div className="w-[1520px] flex flex-col items-start justify-start pt-0 px-0 pb-[61px] box-border min-h-[865px] max-w-full lg:pb-10 lg:box-border mq450:pb-[26px] mq450:box-border">
          <div className="self-stretch rounded-lg bg-gren-gray-scale-50 flex flex-col items-start justify-start pt-[118px] pb-[104px] pr-[52px] pl-[100px] box-border gap-[71px] max-w-full mq450:gap-[18px] mq450:pt-[50px] mq450:pb-11 mq450:box-border mq825:gap-[35px] mq825:pl-[25px] mq825:pt-[77px] mq825:pb-[68px] mq825:box-border mq1400:pl-[50px] mq1400:pr-[26px] mq1400:box-border">
            <div className="w-[1520px] h-[804px] relative rounded-lg bg-gren-gray-scale-50 hidden max-w-full" />
            <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-[20px] mq1400:flex-wrap">
              <div className="h-[439px] w-[304px] flex flex-col items-start justify-start min-w-[304px] mq1400:flex-1">
                <div className="self-stretch flex flex-row items-start justify-start relative">
                  <h1 className="!m-[0] w-[596px] absolute top-[22px] right-[-287px] text-inherit leading-[120%] font-semibold font-inherit inline-block z-[2] mq450:text-11xl mq450:leading-[36px] mq825:text-21xl mq825:leading-[48px]">{`Thực phẩm hữu cơ tươi ngon & tốt cho sức khỏe`}</h1>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[208px] text-center text-sm text-branding-success mq450:gap-[104px]">
                    <div className="relative tracking-[0.02em] leading-[100%] uppercase font-medium whitespace-pre-wrap z-[1]">{`Chào mừng đến với  FPT team `}</div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[32px] text-left text-13xl text-gray-scale-gray-900 mq450:gap-[16px]">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[12px] z-[1]">
                        <h1 className="m-0 relative text-inherit leading-[120%] font-normal font-inherit mq450:text-lgi mq450:leading-[23px] mq825:text-7xl mq825:leading-[31px]">
                          Ưu đãi đến 30%
                        </h1>
                        <div className="relative text-sm leading-[150%] text-gray-scale-gray-500">
                          Giao hàng miễn phí. Đặt hàng và tận hưởng
                        </div>
                      </div>
                      <button className="cursor-pointer [border:none] py-4 px-10 bg-branding-success rounded-34xl flex flex-row items-start justify-start gap-[13px] z-[1]">
                        <div className="relative text-base leading-[120%] font-semibold font-body-small-body-small-400 text-gray-scale-white text-left inline-block min-w-[83px]">
                          Mua Ngay
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0">
                          <img
                            className="w-[15px] h-3 relative"
                            alt=""
                            src="/group-2.svg"
                          />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[503px] w-[819.2px] relative max-w-full z-[1] flex items-center justify-center">
                <img
                  className="h-full w-full z-[1] object-contain absolute left-[0px] top-[9px] [transform:scale(1.09)] mq1400:flex-1"
                  loading="lazy"
                  alt=""
                  src="/public/giỏ trái cây.png"
                />
              </div>
            </div>
            <div className="w-[1320px] flex flex-row items-start justify-center max-w-full">
              <div className="flex flex-row items-center justify-start gap-[8px] z-[1]">
                <div className="h-2 w-2 relative rounded-[50%] bg-gren-gray-scale-200" />
                <div className="h-2 w-4 relative rounded-31xl bg-branding-success" />
                <div className="h-2 w-2 relative rounded-[50%] bg-gren-gray-scale-200" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1400px] shadow-[0px_8px_40px_rgba(0,_38,_3,_0.08)] rounded-lg bg-gray-scale-white flex flex-row items-center justify-between p-10 box-border gap-[20px] max-w-full z-[3] ml-[-1460px] text-base mq1400:flex-wrap">
          <div className="w-[306px] flex flex-row items-center justify-center gap-[16px]">
            <img
              className="h-10 w-10 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/deliverytruck-1.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-center gap-[5px]">
              <div className="self-stretch relative leading-[120%] font-semibold">
                Free Shipping
              </div>
              <div className="self-stretch relative text-sm leading-[150%] text-gray-scale-gray-400">{`Giao hàng miễn phí `}</div>
            </div>
          </div>
          <div className="w-[306px] flex flex-row items-center justify-center gap-[16px]">
            <img
              className="h-12 w-12 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/shipping.svg"
            />
            <img
              className="h-10 w-10 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/sucure.svg"
            />
            <img
              className="h-10 w-10 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/box.svg"
            />
            <img
              className="h-10 w-10 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/headphones-1.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-center gap-[5px]">
              <div className="self-stretch relative leading-[120%] font-semibold">
                Hỗ trợ khách hàng 24/7
              </div>
              <div className="self-stretch relative text-sm leading-[150%] text-gray-scale-gray-400">
                Truy cập tức thì vào Hỗ trợ
              </div>
            </div>
          </div>
          <div className="w-[306px] flex flex-row items-center justify-center gap-[16px]">
            <img
              className="h-12 w-12 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/shipping.svg"
            />
            <img
              className="h-11 w-11 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/247.svg"
            />
            <img
              className="h-10 w-10 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/box.svg"
            />
            <img
              className="h-10 w-10 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/shoppingbag.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-center gap-[5px]">
              <div className="self-stretch relative leading-[120%] font-semibold">
                Thanh toán an toàn 100%
              </div>
              <div className="self-stretch relative text-sm leading-[150%] text-gray-scale-gray-400">
                Đảm bảo bạn tiết kiệm được tiền
              </div>
            </div>
          </div>
          <div className="w-[306px] flex flex-row items-center justify-center gap-[16px]">
            <img
              className="h-12 w-12 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/shipping.svg"
            />
            <img
              className="h-11 w-11 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/247.svg"
            />
            <img
              className="h-10 w-10 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/sucure.svg"
            />
            <img
              className="h-10 w-10 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/package.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-center gap-[5px]">
              <div className="self-stretch relative leading-[120%] font-semibold">
                Đảm bảo hoàn tiền
              </div>
              <div className="self-stretch relative text-sm leading-[150%] text-gray-scale-gray-400">
                Đảm bảo hoàn tiền trong 30 ngày
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

BackGroup1.propTypes = {
  className: PropTypes.string,
};

export default BackGroup1;
