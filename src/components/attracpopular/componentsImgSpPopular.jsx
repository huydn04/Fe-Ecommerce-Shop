import PropTypes from "prop-types";

const ImgSpPopular = ({ className = "", image, greenApple }) => {
  return (
    <div
      className={`flex-1 rounded-lg bg-white box-border overflow-hidden flex flex-col items-start justify-start min-w-[243px] max-w-[248px] text-left text-sm text-gray-scale-gray-700 font-heading-05-heading-05-600 border-[1px] border-solid border-gray-scale-gray-100 ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start p-px">
        <img
          className="h-[246px] w-[246px] relative object-cover"
          loading="lazy"
          alt=""
          src={image}
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-center pt-3 px-4 pb-4 relative gap-[6px]">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch relative leading-[150%]">
            {greenApple}
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 text-base text-gray-scale-gray-900">
            <div className="relative leading-[150%] font-medium inline-block min-w-[51px] whitespace-nowrap">
              $14.99
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0">
          <img
            className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px]"
            alt=""
            src="\src\assets\attracpopular\star-1.svg"
          />
          <img
            className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px]"
            alt=""
            src="\src\assets\attracpopular\star-1.svg"
          />
          <img
            className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px]"
            alt=""
            src="\src\assets\attracpopular\star-1.svg"
          />
          <img
            className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px]"
            alt=""
            src="\src\assets\attracpopular\star-1.svg"
          />
          <img
            className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px]"
            alt=""
            src="\src\assets\attracpopular\star-5.svg"
          />
        </div>
        <img
          className="w-10 h-10 absolute !m-[0] right-[16px] bottom-[25px] z-[1]"
          loading="lazy"
          alt=""
          src="\src\assets\attracpopular\add-to-cart.svg"
        />
      </div>
      <div className="w-20 rounded bg-branding-error hidden flex-row items-center justify-center py-[3px] px-2 box-border gap-[4px] text-white">
        <div className="h-[21px] flex-1 relative leading-[150%] inline-block">
          Sale
        </div>
        <div className="h-[21px] flex-1 relative leading-[150%] font-medium inline-block">
          50%
        </div>
      </div>
    </div>
  );
};

ImgSpPopular.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  greenApple: PropTypes.string,
};

export default ImgSpPopular;
