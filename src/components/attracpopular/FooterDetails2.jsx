import PropTypes from "prop-types";

const FooterDetails2 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-xl text-gray-scale-white font-body-small-body-small-400 ${className}`}
    >
      <div className="w-[1320px] flex flex-row items-start justify-between max-w-full gap-[20px] lg:flex-wrap lg:justify-center">
        <div className="w-[336px] flex flex-col items-start justify-start gap-[16px] max-w-full text-sm">
          <h3 className="m-0 relative text-xl leading-[150%] font-medium font-inherit inline-block min-w-[128px] mq450:text-base mq450:leading-[24px]">
            Về FPT Team
          </h3>
          <div className="self-stretch relative leading-[150%] text-gray-scale-gray-500">
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
            dui, eget bibendum magna congue nec.
          </div>
          <div className="w-[281px] flex flex-row items-center justify-start gap-[16px]">
            <div className="shadow-[0px_1.5px_0px_#20b526] bg-gray-scale-gray-900 flex flex-row items-center justify-center py-1.5 px-0 whitespace-nowrap">
              <div className="relative leading-[150%] font-medium inline-block min-w-[103px]">
                (219) 555-0114
              </div>
            </div>
            <div className="relative text-base leading-[150%] text-gray-scale-gray-500 inline-block min-w-[17px]">
              or
            </div>
            <input
              className="w-full [border:none] [outline:none] bg-gray-scale-gray-900 h-[33px] flex-1 shadow-[0px_1.5px_0px_#20b526] flex flex-row items-center justify-center py-1.5 px-0 box-border font-body-small-body-small-400 font-medium text-sm text-gray-scale-white min-w-[77px]"
              placeholder="Proxy@gmail.com"
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[20px]">
          <h3 className="m-0 relative text-inherit leading-[150%] font-medium font-inherit inline-block min-w-[119px] mq450:text-base mq450:leading-[24px]">
            My Account
          </h3>
          <div className="flex flex-col items-start justify-start gap-[12px] text-sm text-gray-scale-gray-400">
            <div className="relative leading-[150%] inline-block min-w-[83px]">
              My Account
            </div>
            <div className="relative leading-[150%] inline-block min-w-[91px]">
              Order History
            </div>
            <div className="relative leading-[150%] text-gray-scale-white inline-block min-w-[92px]">
              Shoping Cart
            </div>
            <div className="relative leading-[150%] inline-block min-w-[53px]">
              Wishlist
            </div>
            <div className="relative leading-[150%] inline-block min-w-[57px]">
              Settings
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[20px]">
          <h3 className="m-0 relative text-inherit leading-[150%] font-medium font-inherit inline-block min-w-[56px] mq450:text-base mq450:leading-[24px]">
            Helps
          </h3>
          <div className="flex flex-col items-start justify-start gap-[12px] text-sm text-gray-scale-gray-400">
            <div className="relative leading-[150%] inline-block min-w-[57px]">
              Contact
            </div>
            <div className="relative leading-[150%] inline-block min-w-[34px]">
              Faqs
            </div>
            <div className="relative leading-[150%]">{`Terms & Condition`}</div>
            <div className="relative leading-[150%] inline-block min-w-[95px]">
              Privacy Policy
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[20px]">
          <h3 className="m-0 relative text-inherit leading-[150%] font-medium font-inherit inline-block min-w-[54px] mq450:text-base mq450:leading-[24px]">
            Proxy
          </h3>
          <div className="flex flex-col items-start justify-start gap-[12px] text-base text-gray-scale-gray-400">
            <div className="relative leading-[150%] inline-block min-w-[48px]">
              About
            </div>
            <div className="relative leading-[150%] inline-block min-w-[41px]">
              Shop
            </div>
            <div className="relative leading-[150%] inline-block min-w-[63px]">
              Product
            </div>
            <div className="relative text-sm leading-[150%] inline-block min-w-[113px]">
              Products Details
            </div>
            <div className="relative text-sm leading-[150%] inline-block min-w-[82px]">
              Track Order
            </div>
          </div>
        </div>
        <div className="w-[312px] flex flex-col items-start justify-start gap-[20px]">
          <h3 className="m-0 relative text-inherit leading-[150%] font-medium font-inherit mq450:text-base mq450:leading-[24px]">
            Download our Mobile App
          </h3>
          <div className="self-stretch flex flex-row items-start justify-start gap-[8px] text-2xs text-gray-scale-gray-300">
            <div className="flex-1 rounded bg-gray-scale-gray-800 flex flex-row items-center justify-start p-2.5 gap-[6px]">
              <img
                className="h-7 w-7 relative overflow-hidden shrink-0"
                alt=""
                src="/src/assets/attracpopular/applenegative-1.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="relative leading-[130%] inline-block min-w-[100px]">
                  Download on the
                </div>
                <div className="self-stretch relative text-base leading-[24.5px] font-medium text-gray-scale-white">
                  App Store
                </div>
              </div>
            </div>
            <div className="rounded bg-gray-scale-gray-800 flex flex-row items-center justify-start p-2.5 gap-[6px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/src/assets/attracpopular/icongoogleplay-1.svg"
              />
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[130%] inline-block min-w-[100px]">
                  Download on the
                </div>
                <div className="relative text-base leading-[24.5px] font-medium text-gray-scale-white inline-block min-w-[100px]">
                  Google play
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FooterDetails2.propTypes = {
  className: PropTypes.string,
};

export default FooterDetails2;
