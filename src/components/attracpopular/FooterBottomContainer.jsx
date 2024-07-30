import PropTypes from "prop-types";


const FooterBottomContainer = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-[14px] text-gray-500 font-body-small-body-small-400 ${className}`}
    >
      <div className="w-[1320px] shadow-[0px_-1px_0px_#333] bg-gray-900 flex flex-row items-start justify-between py-6 px-0 box-border max-w-full gap-[20px] [1200px]:flex-wrap [1200px]:justify-center">
        <div className="flex flex-row items-start justify-start py-0 pr-[100px] pl-0 gap-[8px] mq450:pr-5 mq450:box-border">
          <img
            className="h-10 w-10 relative min-h-[40px]"
            loading="lazy"
            alt=""
            src="\src\assets\attracpopular\social-media.svg"
          />
          <img
            className="h-10 w-10 relative rounded-[500px] min-h-[40px]"
            alt=""
            src="\src\assets\attracpopular\social-media-1.svg"
          />
          <img
            className="h-10 w-10 relative rounded-[500px] min-h-[40px]"
            alt=""
            src="\src\assets\attracpopular\social-media-2.svg"
          />
          <img
            className="h-10 w-10 relative rounded-[500px] min-h-[40px]"
            alt=""
            src="\src\assets\attracpopular\social-media-3.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0 box-border max-w-full">
          <div className="relative leading-[150%]">
            Ecobazar eCommerce © 2021. All Rights Reserved
          </div>
        </div>
        <div className="w-[277px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border text-[11px] text-white">
          <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
            <img
              className="self-stretch w-[45px] relative max-h-full object-cover min-h-[32px]"
              loading="lazy"
              alt=""
              src="\src\assets\attracpopular\methodapplepay@2x.png"
            />
            <img
              className="self-stretch w-[45px] relative max-h-full object-cover min-h-[32px]"
              loading="lazy"
              alt=""
              src="\src\assets\attracpopular\methodvisa@2x.png"
            />
            <img
              className="self-stretch w-[45px] relative max-h-full object-cover min-h-[32px]"
              alt=""
              src="\src\assets\attracpopular\methoddiscover@2x.png"
            />
            <img
              className="self-stretch w-[45px] relative max-h-full object-cover min-h-[32px]"
              alt=""
              src="\src\assets\attracpopular\methodmastercard1@2x.png"
            />
            <div className="w-[65px] rounded-[5.29px] bg-gray-900 box-border flex flex-col items-start justify-start py-0.5 px-0 gap-[1px] border-[1px] border-solid border-gray-800">
              <div className="self-stretch h-8 relative rounded-[5.29px] bg-gray-900 box-border hidden border-[1px] border-solid border-gray-800" />
              <div className="flex flex-row items-start justify-start py-0 pr-[9px] pl-[5px]">
                <div className="flex flex-row items-start justify-start gap-[2px]">
                  <img
                    className="h-[11px] w-[11px] relative overflow-hidden shrink-0 min-h-[11px] z-[1]"
                    alt=""
                    src="\src\assets\attracpopular\lock-1.svg"
                  />
                  <div className="relative leading-[100%] inline-block min-w-[38px] z-[1]">
                    Secure
                  </div>
                </div>
              </div>
              <div className="self-stretch relative text-[12px] leading-[100%] font-semibold text-center inline-block min-w-[65px] z-[1]">
                Payment
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FooterBottomContainer.propTypes = {
  className: PropTypes.string,
};

export default FooterBottomContainer;
