import PropTypes from "prop-types";

const ImgSales = ({ className = "", image, freshCauliflower, bag, star5 }) => {
  return (
    <div
      className={`h-[429px] bg-gray-scale-white box-border flex flex-col items-start justify-start max-w-full text-left text-base text-gren-gray-scale-700 font-body-small-body-small-400 border-[1px] border-solid border-gren-gray-scale-100 ${className}`}
    >
      <div className="self-stretch flex-1 flex flex-col items-start justify-start p-[5px]">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={image}
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-4 px-5 pb-5 gap-[11px]">
        <div className="self-stretch flex flex-col items-start justify-start relative gap-[2px]">
          <div className="self-stretch relative leading-[150%]">
            {freshCauliflower}
          </div>
          <div className="flex flex-row items-start justify-start gap-[2px] text-lg text-gren-gray-scale-900">
            <div className="relative leading-[150%] font-medium inline-block min-w-[57px] whitespace-nowrap">
              $14.99
            </div>
            <div className="h-6 w-[53px] relative text-base [text-decoration:line-through] leading-[150%] text-gren-gray-scale-400 hidden whitespace-nowrap">
              $20.99
            </div>
          </div>
          <div className="w-[50px] h-[50px] !m-[0] absolute right-[4px] bottom-[-15px] rounded-21xl bg-gren-gray-scale-100 flex flex-row items-start justify-start p-[13px] box-border z-[1]">
            <img className="h-6 w-6 relative" alt="" src={bag} />
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[2px]">
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
            src={star5}
          />
        </div>
      </div>
    </div>
  );
};

ImgSales.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  freshCauliflower: PropTypes.string,
  bag: PropTypes.string,
  star5: PropTypes.string,
};

export default ImgSales;
