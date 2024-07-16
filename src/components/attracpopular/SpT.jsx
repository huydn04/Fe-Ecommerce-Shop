import PropTypes from "prop-types";
// import React from "react";
const SpT = ({ className = "", image, chaniseCabbage }) => {
  return (
    <div
      className={`self-stretch rounded-md bg-white flex flex-row items-start justify-start py-0 px-0 text-left text-sm text-gray-scale-gray-700 font-heading-05-heading-05-600 border-[1px] border-solid border-gray-scale-gray-100 mq1050:justify-center ${className}`}
    >
      <div className="flex flex-row items-start justify-start p-[5px]">
        <img
          className="h-[102px] w-[102px] relative object-contain"
          loading="lazy"
          alt=""
          src={image}
        />
      </div>
      <div className="w-[312px] flex flex-col items-start justify-center pt-6 px-3 pb-[25px] box-border gap-[6px] shrink-0">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch relative leading-[150%]">
            {chaniseCabbage}
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 gap-[2px] text-base text-gray-scale-gray-900">
            <div className="relative leading-[150%] font-medium inline-block min-w-[51px] whitespace-nowrap">
              $15
            </div>
            <div className="relative leading-[150%] text-gray-scale-gray-400 inline-block min-w-[53px] whitespace-nowrap">
              $20.99
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
            alt=""
            src="/Fe-Ecommerce-Shop/src/assets/attracpopular/star-1-5.svg"
          />
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
            alt=""
            src="/Fe-Ecommerce-Shop/src/assets/attracpopular/star-1-5.svg"
          />
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
            alt=""
            src="/Fe-Ecommerce-Shop/src/assets/attracpopular/star-1-5.svg"
          />
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
            alt=""
            src="/Fe-Ecommerce-Shop/src/assets/attracpopular/star-1-5.svg"
          />
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
            alt=""
            src="/Fe-Ecommerce-Shop/src/assets/attracpopular/star-5-5.svg"
          />
        </div>
      </div>
    </div>
  );
};

SpT.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  chaniseCabbage: PropTypes.string,
};

export default SpT;
