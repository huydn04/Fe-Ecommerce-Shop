import { useState } from "react";
import PropTypes from "prop-types";
import SalesSp from "./SalesSp";
import ImgSales from "./ImgSales";
import SPpopular from "./componentsSPpopular";

const Sales = ({ className = "" }) => {
  const [currentSection, setCurrentSection] = useState("Ưu Đãi Hấp Dẫn");

  const handleArrowClick = (direction) => {
    if (direction === "next" && currentSection === "Ưu Đãi Hấp Dẫn") {
      setCurrentSection("Sản Phẩm Phổ Biến");
    } else if (direction === "prev" && currentSection === "Sản Phẩm Phổ Biến") {
      setCurrentSection("Ưu Đãi Hấp Dẫn");
    }
  };

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[76px] box-border max-w-full text-center text-21xl text-gray-scale-gray-900 font-body-small-body-small-400 lg:pb-[49px] lg:box-border mq825:pb-8 mq825:box-border ${className}`}
    >
      <div className="w-[1321px] flex flex-col items-start justify-start gap-[50px] max-w-full mq825:gap-[25px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <h1 className="m-0 w-[312px] relative text-inherit leading-[120%] font-semibold font-inherit inline-block mq450:text-5xl mq450:leading-[29px] mq825:text-13xl mq825:leading-[38px]">
            {currentSection}
          </h1>
          </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <div className="flex flex-row items-start justify-start gap-[12px]">
            <button
              onClick={() => handleArrowClick("prev")}
              className="h-[45px] w-[45px] flex items-center justify-center rounded-full transition-colors duration-300 hover:bg-green-500"
            >
              <img
                className="h-[30px] w-[30px] object-contain"
                loading="lazy"
                alt=""
                src="/aoorw.svg"
              />
            </button>
            <button
              onClick={() => handleArrowClick("next")}
              className="h-[45px] w-[45px] flex items-center justify-center rounded-full transition-colors duration-300 hover:bg-green-500"
            >
              <img
                className="h-[30px] w-[30px]"
                alt=""
                src="/aoorw-1.svg"
              />
            </button>
          </div>
        </div>
        {currentSection === "Ưu Đãi Hấp Dẫn" && (
          <div className="self-stretch flex flex-col items-end justify-start max-w-full text-left text-base text-gren-gray-scale-700">
            <div className="self-stretch grid flex-row items-start justify-start gap-[0.3px] grid-cols-[repeat(4,_minmax(248px,_1fr))] max-w-full lg:grid-cols-[repeat(2,_minmax(248px,_430px))] lg:justify-center mq450:grid-cols-[minmax(248px,_1fr)]">
              <div className="bg-gray-scale-white box-border flex flex-col items-start justify-start pt-[18px] px-0 pb-0 relative gap-[188px] max-w-full text-sm text-gray-scale-white border-[1px] border-solid border-gren-gray-scale-100 mq450:gap-[94px]">
                <div className="w-full h-[310px] !m-[0] absolute top-[0px] right-[0px] left-[0px] flex flex-col items-start justify-start p-[5px] box-border">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/public/táo xanh.png"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[21px] pl-5">
                  <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                    <div className="rounded bg-branding-error flex flex-row items-start justify-start py-[3px] px-2 gap-[4px] z-[1]">
                      <div className="relative leading-[150%] inline-block min-w-[37px]">
                        Giảm
                      </div>
                      <div className="relative leading-[150%] font-medium inline-block min-w-[30px]">
                        50%
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[6px] z-[1]">
                      <img
                        className="w-12 h-12 relative"
                        loading="lazy"
                        alt=""
                        src="/add-to-wishlist1.svg"
                      />
                      <img
                        className="w-12 h-12 relative"
                        loading="lazy"
                        alt=""
                        src="/quick-view1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-end justify-start pt-4 px-5 pb-5 text-base text-gren-gray-scale-700">
                  <div className="w-[290px] flex flex-col items-start justify-end pt-0 px-0 pb-[29px] box-border">
                    <div className="self-stretch flex flex-col items-start justify-start relative gap-[2px]">
                      <div className="self-stretch relative leading-[150%]">
                        Táo Xanh
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[2px] text-lg text-gren-gray-scale-900">
                        <div className="relative leading-[150%] font-medium inline-block min-w-[57px] whitespace-nowrap">
                          $14.99
                        </div>
                        <div className="relative text-base [text-decoration:line-through] leading-[150%] text-gren-gray-scale-400 inline-block min-w-[53px] whitespace-nowrap">
                          $20.99
                        </div>
                      </div>
                      <div className="w-[50px] h-[50px] !m-[0] absolute right-[4px] bottom-[-15px] rounded-21xl bg-gren-gray-scale-100 flex flex-row items-start justify-start p-[13px] box-border z-[1]">
                        <img className="m-0 h-6 w-6 relative" src="/public/bag-2.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[2px] ml-[-290px]">
                    <img
                      className="h-[18px] w-[18px] relative overflow-hidden shrink-0 min-h-[18px]"
                      alt=""
                      src="/star-11.svg"
                    />
                    <img
                      className="h-[18px] w-[18px] relative overflow-hidden shrink-0 min-h-[18px]"
                      alt=""
                      src="/star-11.svg"
                    />
                    <img
                      className="h-[18px] w-[18px] relative overflow-hidden shrink-0 min-h-[18px]"
                      alt=""
                      src="/star-11.svg"
                    />
                    <img
                      className="h-[18px] w-[18px] relative overflow-hidden shrink-0 min-h-[18px]"
                      alt=""
                      src="/star-11.svg"
                    />
                    <img
                      className="h-[18px] w-[18px] relative overflow-hidden shrink-0 min-h-[18px]"
                      alt=""
                      src="/star-51.svg"
                    />
                  </div>
                </div>
              </div>
              <SalesSp
                image="/public/đào.png"
                surjapurMango="Đào"
                bag="/bag-2.svg"
                star5="/star-51.svg"
              />
              <SalesSp
                image="/public/cà chua.png"
                surjapurMango="Cà Chua"
                bag="/bag-2.svg"
                star5="/star-51.svg"
              />
              <ImgSales
                image="/public/bông cải.png"
                freshCauliflower="Bông Cải Trắng"
                bag="/bag-2.svg"
                star5="/star-51.svg"
              />
            </div>
            <div className="self-stretch grid flex-row items-start justify-start grid-cols-[repeat(4,_minmax(248px,_1fr))] max-w-full lg:[grid-row-gap:20px] lg:grid-cols-[repeat(2,_minmax(248px,_430px))] lg:justify-center mq450:grid-cols-[minmax(248px,_1fr)]">
              <SalesSp
                image="/public/xalasch.png"
                surjapurMango="Xà Lách"
                bag="/bag-2.svg"
                star5="/star-51.svg"
              />
              <ImgSales
                image="/public/ớt chuông.png"
                freshCauliflower="Ớt Chuông"
                bag="/bag-2.svg"
                star5="/star-51.svg"
              />
              <SalesSp
                image="/public/ớt xanh.png"
                surjapurMango="Ớt Xanh"
                bag="/bag-2.svg"
                star5="/star-51.svg"
              />
              <SalesSp
                image="/public/cả tím.png"
                surjapurMango="Cà Tím"
                bag="/bag-2.svg"
                star5="/star-51.svg"
              />
            </div>
          </div>
        )}
        {currentSection === "Sản Phẩm Phổ Biến" && (
          <SPpopular />
        )}
      </div>
    </section>
  );
};

Sales.propTypes = {
  className: PropTypes.string,
};

export default Sales;
