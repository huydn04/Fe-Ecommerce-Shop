import ENG from "./ENG";
import TagBar1 from "./Midle";
import PropTypes from "prop-types";

const MainHeader = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch h-[195px] relative max-w-full text-left text-xs text-gray-scale-gray-600 font-body-small-body-small-400 mq1400:h-auto mq1400:min-h-[195] ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] bg-gray-scale-white w-full flex flex-col items-start justify-start max-w-full h-full">
        <div className="self-stretch shadow-[0px_1px_0px_#e6e6e6] bg-gray-scale-white flex flex-row items-start justify-center py-3 px-5 gap-[788px] mq450:gap-[98px] mq825:gap-[197px] mq1400:flex-wrap mq1400:gap-[394px]">
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <img
              className="h-[18px] w-[15px] relative min-h-[18px]"
              alt=""
              src="/Fe-Ecommerce-Shop/src/assets/attracpopular/map-pin.svg"
            />
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <div className="relative leading-[16px] whitespace-nowrap">
                FPT TEAM supermarket: Đồng nai - Tp.Biên Hòa
              </div>
            </div>
          </div>
          <div className="w-[232px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border text-center">
            <div className="self-stretch flex flex-row items-start justify-start gap-[19.7px]">
              <ENG />
              <div className="flex flex-row items-start justify-start gap-[6px]">
                <div className="relative leading-[16px] inline-block min-w-[24px]">
                  USD
                </div>
                <div className="flex flex-col items-start justify-start pt-[6.3px] px-0 pb-0">
                  <img
                    className="w-[7px] h-[3.5px] relative"
                    alt=""
                    src="/Fe-Ecommerce-Shop/src/assets/attracpopular/group.svg"
                  />
                </div>
              </div>
              <div className="h-4 w-px relative box-border border-r-[1px] border-solid border-gray-scale-gray-100" />
              <nav className="m-0 flex-1 flex flex-row items-start justify-start gap-[4px] text-left text-xs text-gray-scale-gray-600 font-body-small-body-small-400">
                <div className="flex-1 relative leading-[16px] inline-block min-w-[40px] whitespace-nowrap">
                  Sign In
                </div>
                <div className="relative leading-[16px] inline-block min-w-[6px]">
                  /
                </div>
                <div className="flex-1 relative leading-[16px] inline-block min-w-[46px] whitespace-nowrap">
                  Sign Up
                </div>
              </nav>
            </div>
          </div>
        </div>
        <TagBar1 />
        <div className="self-stretch bg-gray-scale-gray-900 flex flex-row items-center justify-between py-4 px-[300px] box-border sticky top-[0] z-[99] gap-[20px] max-w-full text-sm text-gray-scale-white mq450:pl-5 mq450:pr-5 mq450:box-border mq825:pl-[75px] mq825:pr-[75px] mq825:box-border mq1400:pl-[150px] mq1400:pr-[150px] mq1400:box-border">
          <div className="w-[590px] flex flex-row items-center justify-start gap-[32px] max-w-full mq825:hidden mq825:gap-[16px]">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start gap-[4px]">
              <div className="relative text-sm leading-[150%] font-medium font-body-small-body-small-400 text-gray-scale-white text-left inline-block min-w-[42px]">
                Home
              </div>
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 object-contain"
                alt=""
                src="/Fe-Ecommerce-Shop/src/assets/attracpopular/chevron-down-1.svg"
              />
            </button>
            <div className="flex flex-row items-center justify-start gap-[4px]">
              <div className="relative leading-[150%] font-medium inline-block min-w-[36px]">
                Shop
              </div>
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 object-contain"
                alt=""
                src="/Fe-Ecommerce-Shop/src/assets/attracpopular/chevron-down-1.svg"
              />
            </div>
            <div className="h-[21px] w-16 flex flex-row items-center justify-start gap-[4px]">
              <div className="relative leading-[150%] font-medium inline-block min-w-[44px]">
                Pages
              </div>
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 object-contain"
                alt=""
                src="/Fe-Ecommerce-Shop/src/assets/attracpopular/chevron-down-1.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start gap-[4px]">
              <div className="relative leading-[150%] font-medium inline-block min-w-[51px] whitespace-nowrap">
                Tin Tức
              </div>
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 object-contain"
                alt=""
                src="/Fe-Ecommerce-Shop/src/assets/attracpopular/chevron-down-1.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start gap-[4px]">
              <div className="relative leading-[150%] font-medium inline-block min-w-[69px] whitespace-nowrap">
                Giới Thiệu
              </div>
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 object-contain hidden"
                alt=""
                src="/Fe-Ecommerce-Shop/src/assets/attracpopular/chevron-down.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start gap-[4px]">
              <div className="relative leading-[150%] font-medium inline-block min-w-[108px] whitespace-nowrap">
                Liên hệ hostline
              </div>
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 object-contain hidden"
                alt=""
                src="//Fe-Ecommerce-Shop/src/assets/attracpopular/chevron-down.svg"
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[8px] text-gray-scale-white">
            <img
              className="h-7 w-7 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/Fe-Ecommerce-Shop/src/assets/attracpopular/phonecall-1.svg"
            />
            <div className="relative leading-[150%] font-medium inline-block min-w-[103px] whitespace-nowrap">
              (219) 555-0114
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute top-[19px] left-[61px] w-[223px] h-[174px] object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/blue-and-orange-simple-ilustration-supermarket-logo--1-removebgpreview-1@2x.png"
      />
    </header>
  );
};

MainHeader.propTypes = {
  className: PropTypes.string,
};

export default MainHeader;
