import PropTypes from "prop-types";
import { useState } from "react";





const ImgSales = ({ className = "", image, productName, bag, star5 }) => {
  const [wishlistActive, setWishlistActive] = useState(false);
  
  const toggleWishlist = () => {
    setWishlistActive(!wishlistActive);
  };




  return (
    <div
      className={`h-[429px] bg-white box-border flex flex-col items-start justify-start max-w-full text-left text-base text-green-800 font-body-small-body-small-400 border-[1px] border-solid border-gray-300 group ${className}`}
    >
      <div className="self-stretch flex-1 flex flex-col items-start justify-start p-[5px] relative">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          alt={productName}
          src={image}
        />
        <div className="flex flex-col items-start justify-start gap-[6px] z-[1] opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-2 right-2">
          <div
            className={`w-12 h-12 relative cursor-pointer flex items-center justify-center rounded-full ${
              wishlistActive ? "bg-green-500" : "bg-white"
            }`}
            onClick={toggleWishlist}
          >
            <img
              className="w-10 h-10"
              loading="lazy"
              alt="Add to Wishlist"
              src="/src/assets/attracpopular/add-to-wishlist1.svg"
            />
          </div>
          <div
            className="w-12 h-12 relative cursor-pointer flex items-center justify-center rounded-full bg-white"
          >
            <img
              className="w-10 h-10"
              loading="lazy"
              alt="Quick View"
              src="/src/assets/attracpopular/quick-view1.svg"
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[6px] z-[1] opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-2 right-2">
          <div
            className={`w-12 h-12 relative cursor-pointer flex items-center justify-center rounded-full ${
              wishlistActive ? "bg-green-500" : "bg-white"
            }`}
            onClick={toggleWishlist}
          >
            <img
              className="w-10 h-10"
              loading="lazy"
              alt="Add to Wishlist"
              src="\src\assets\attracpopular\add-to-wishlist1.svg"
            />
          </div>
          <div
            className={`w-12 h-12 relative cursor-pointer flex items-center justify-center rounded-full bg-white`}
          >
            <img
              className="w-6 h-6"
              loading="lazy"
              alt="Quick View"
              src="\src\assets\attracpopular\quick-view1.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-4 px-5 pb-5 gap-[11px]">
        <div className="self-stretch flex flex-col items-start justify-start relative gap-[2px]">
          <div className="self-stretch relative leading-[150%]">
            {productName}
          </div>
          <div className="flex flex-row items-start justify-start gap-[2px] text-[18px] text-lime-900">
            <div className="relative leading-[150%] font-medium inline-block min-w-[57px] whitespace-nowrap">
              $14.99
            </div>
            <div className="h-6 w-[53px] relative text-base [text-decoration:line-through] leading-[150%] text-lime-800 hidden whitespace-nowrap">
              $20.99
            </div>
          </div>
          <div className="w-[50px] h-[50px] !m-[0] absolute right-[4px] bottom-[-15px] rounded-[40px] bg-lime-50 flex flex-row items-start justify-start p-[13px] box-border z-[1]">
            <img className="h-6 w-6 relative" alt="Shopping Bag" src={bag} />
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
            src={star5}
          />
        </div>
      </div>
    </div>
  );
};

ImgSales.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  bag: PropTypes.string,
  star5: PropTypes.string
};

export default ImgSales;
