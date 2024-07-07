  import PropTypes from "prop-types";
  
const SpHotSellerTop = ({ className = "", image, chaniseCabbage }) => {
  return (
    <div
      className={`self-stretch rounded-md bg-white flex flex-row items-start justify-start py-0 px-0 text-left text-sm text-gray-scale-gray-700 font-heading-05-heading-05-600 border-[1px] border-solid border-gray-scale-gray-100 mq1050:justify-center ${className}`}
    >
      <div className="flex flex-row items-start justify-start p-[5px]">
        <img
          className="h-[102px] w-[102px] relative object-cover"
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
          <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 text-base text-gray-scale-gray-900">
            <div className="relative leading-[150%] font-medium inline-block min-w-[51px] whitespace-nowrap">
              $14.99
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
            loading="lazy"
            alt=""
            src="/star-1-5.svg"
          />
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
            loading="lazy"
            alt=""
            src="/star-1-5.svg"
          />
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
            loading="lazy"
            alt=""
            src="/star-1-5.svg"
          />
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
            loading="lazy"
            alt=""
            src="/star-1-5.svg"
          />
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
            loading="lazy"
            alt=""
            src="/star-5-5.svg"
          />
        </div>
      </div>
    </div>
  );
};

SpHotSellerTop.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  chaniseCabbage: PropTypes.string,
};

export default SpHotSellerTop;
