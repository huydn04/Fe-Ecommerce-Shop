import { useState } from "react";
import PropTypes from "prop-types";

const SpHotSellerTop = ({
  className = "",
  image,
  productName,
  chaniseCabbage,
}) => {
  const [wishlistActive, setWishlistActive] = useState(false);

  const toggleWishlist = () => {
    setWishlistActive(!wishlistActive);
  };

  return (
    <div
      className={`self-stretch rounded-md bg-white flex flex-row items-start justify-start text-[14px] text-gray-950 border-[1px] border-solid border-gray-300 mq1050:justify-center ${className}`}
    >
      <div className="flex flex-row items-start justify-start p-[5px] shrink-0">
        <img
          className="h-[102px] w-[102px] relative object-cover"
          alt=""
          src={image}
        />
        <div className="flex flex-col items-start justify-start gap-[6px] z-[1] opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-2 right-2">
          <div
            className={`w-12 h-12 relative cursor-pointer flex items-center justify-center rounded-full ${
              wishlistActive ? "bg-green-500" : "bg-white"
            }`}
            onClick={toggleWishlist}
          >
            {/* <img
              className="w-10 h-10"
              loading="lazy"
              alt="Add to Wishlist"
              src="\src\assets\attracpopular\add-to-wishlist1.svg"
            /> */}
          </div>
          {/* <img
            className="w-12 h-12 relative"
            loading="lazy"
            alt="Quick View"
            src="\src\assets\attracpopular\quick-view1.svg"
          /> */}
        </div>
      </div>
      <div className="w-[467px] flex flex-col items-start justify-center pt-6 px-10 pb-[25px] box-border gap-[5px] shrink-0">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch relative leading-[150%]">
            {productName}
            {chaniseCabbage}
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 gap-[2px] text-base text-gray-900">
            <div className="relative leading-[150%] font-medium inline-block min-w-[51px] whitespace-nowrap">
              $20.99
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[2px]">
          <img
            className="h-[18px] w-[18px] relative overflow-hidden shrink-0 min-h-[18px]"
            alt="Star"
            src="\src\assets\attracpopular\star-11.svg"
          />
          <img
            className="h-[18px] w-[18px] relative overflow-hidden shrink-0 min-h-[18px]"
            alt="Star"
            src="\src\assets\attracpopular\star-11.svg"
          />
          <img
            className="h-[18px] w-[18px] relative overflow-hidden shrink-0 min-h-[18px]"
            alt="Star"
            src="\src\assets\attracpopular\star-11.svg"
          />
          <img
            className="h-[18px] w-[18px] relative overflow-hidden shrink-0 min-h-[18px]"
            alt="Star"
            src="\src\assets\attracpopular\star-11.svg"
          />
          <img
            className="h-[18px] w-[18px] relative overflow-hidden shrink-0 min-h-[18px]"
            alt="Star"
            src="\src\assets\attracpopular\star-11.svg"
          />
        </div>
      </div>
    </div>
  );
};

SpHotSellerTop.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  productName: PropTypes.string,
  bag: PropTypes.string,
  star5: PropTypes.string,
};

export default SpHotSellerTop;
