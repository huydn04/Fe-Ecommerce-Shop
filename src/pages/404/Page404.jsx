import React from "react";
import { Button } from "react-daisyui";
import { Link } from "react-router-dom";

const Pages404 = () => {
  return (
    <div className="h-full w-full relative">
      <div className="flex items-center justify-center  ">
        <img
          className="h-screen w-screen object-cover"
          src="https://yoast.com/app/uploads/2015/08/404_error_checking_FI.png"
          alt=""
        />
      </div>
      <div className="absolute left-1/2 top-1/2 translate-x--1/2 translate-y--1/2">
        <Link to={"/"}>
          <Button color="primary" className="text-green-200 ">
            <p>Quay Lại</p>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Pages404;
