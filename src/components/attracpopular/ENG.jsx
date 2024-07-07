import { memo } from "react";
import PropTypes from "prop-types";

const ENG = memo(({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-start justify-start gap-[6px] text-center text-xs text-gray-scale-gray-600 font-body-small-body-small-400 ${className}`}
    >
      <div className="relative leading-[16px] inline-block min-w-[22px]">
        Eng
      </div>
      <div className="flex flex-col items-start justify-start pt-[6.3px] px-0 pb-0">
        <img className="w-[7px] h-[3.5px] relative" alt="" src="/public/group.svg" />
      </div>
    </div>
  );
});

ENG.propTypes = {
  className: PropTypes.string,
};

export default ENG;
