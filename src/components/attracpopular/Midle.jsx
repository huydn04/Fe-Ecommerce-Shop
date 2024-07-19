import PropTypes from "prop-types";

const TagBar1 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-6 pr-5 pl-[431px] box-border gap-[204px] max-w-full text-left text-13xl text-gren-gray-scale-900 font-body-small-body-small-400 mq450:gap-[25px] mq450:pl-5 mq450:box-border mq825:gap-[51px] mq825:pl-[107px] mq825:box-border mq1400:flex-wrap mq1400:gap-[102px] mq1400:justify-center mq1400:pl-[215px] mq1400:box-border ${className}`}
    >
      <div className="h-[38px] hidden flex-row items-center justify-start gap-[8px]">
        <img
          className="h-8 w-8 relative overflow-hidden shrink-0"
          alt=""
          src="/src/assets/attracpopular/plant-1.svg"
        />
      </div>
      <div className="w-[514px] rounded-md box-border flex flex-row items-start justify-center [row-gap:20px] max-w-full text-mini text-gray-scale-gray-500 border-[1px] border-solid border-gray-scale-gray-100 mq825:flex-wrap">
      <div className="flex-1 flex flex-row items-start justify-start py-[12.5px] px-4 box-border relative gap-[8px] min-w-[20px] max-w-full">
  <img
    className="h-5 w-5 relative overflow-hidden shrink-0"
    loading="lazy"
    alt=""
    src="/src/assets/attracpopular/search.svg"
  />
  <input
    type="text"
    placeholder="Tìm kiếm"
    className="w-[400px] absolute m-[0] top-[calc(50%_-_10.5px)] right-[-44px] leading-[21px] inline-block whitespace-nowrap bg-transparent border-none outline-none"
  />
</div>

        <button className="cursor-pointer [border:none] py-3.5 px-6 bg-branding-success rounded-tl-none rounded-tr-md rounded-br-md rounded-bl-none flex flex-row items-start justify-start whitespace-nowrap hover:bg-limegreen-100">
          <div className="relative text-sm leading-[17px] font-semibold font-body-small-body-small-400 text-gray-scale-white text-left inline-block min-w-[66px]">
            Tìm kiếm
          </div>
        </button>
      </div>
      <div className="flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0 text-center text-3xs text-gray-scale-white">
        <div className="flex flex-row items-start justify-start gap-[15.5px]">
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <img
              className="w-8 h-8 relative"
              loading="lazy"
              alt=""
              src="/src/assets/attracpopular/heart.svg"
            />
          </div>
          <div className="h-[29px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
            <div className="w-px h-[25px] relative box-border border-r-[1px] border-solid border-gray-scale-gray-200" />
          </div>
          <div className="flex flex-row items-start justify-start gap-[12px]">
            <div className="h-[34px] w-[34px] flex flex-row items-end justify-start pt-0 pb-[18px] pr-0 pl-[18px] box-border relative">
              <img
                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                loading="lazy"
                alt=""
                src="/src/assets/attracpopular/bag.svg"
              />
              <div className="h-5 flex-1 rounded-2xl bg-branding-success-dark box-border overflow-hidden flex flex-row items-start justify-start pt-[3.5px] px-1.5 pb-[4.5px] z-[1] border-[1px] border-solid border-gray-scale-white">
                <a className="[text-decoration:none] relative leading-[10px] font-medium text-[inherit] inline-block min-w-[6px]">
                  2
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[7px] text-left text-2xs text-gray-scale-gray-700">
              <div className="relative leading-[120%] inline-block min-w-[81px] whitespace-nowrap">
                Shopping cart:
              </div>
              <div className="relative text-sm leading-[100%] font-medium text-gray-scale-gray-900 inline-block min-w-[48px] whitespace-nowrap">
                $57.00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TagBar1.propTypes = {
  className: PropTypes.string,
};

export default TagBar1;
