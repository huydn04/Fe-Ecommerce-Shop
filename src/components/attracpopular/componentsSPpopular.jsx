import { Button } from "@mui/material";
import ImgSpPopular from "./componentsImgSpPopular";
import SpHotSellerTop from "./SpHotSellerTop";
import SpT from "./SpT"; 
import PropTypes from "prop-types";
import React, { useState } from 'react';  




const SPpopular = ({ className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`w-[1320px] max-w-full flex flex-col items-start justify-start gap-[50px] leading-[normal] tracking-[normal] text-left text-[40px] text-gray-900 font-heading-05-heading-05-600 gap-[25px] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[383px] flex flex-col items-start justify-start gap-[16px] max-w-full">
          
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <div className="w-[72px] flex flex-row items-start justify-between relative gap-[20px]">
            </div>
          </div>
        </div>
      </div>
      <section className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[20px] text-left text-[14px] text-gray-950 font-heading-05-heading-05-600">
        <ImgSpPopular image="\src\assets\attracpopular\image@2x.png" greenApple="Táo Xanh" />
        <ImgSpPopular image="\src\assets\attracpopular\image-1@2x.png" greenApple="Cải Thìa" />
        <ImgSpPopular image="\src\assets\attracpopular\image-2@2x.png" greenApple="Xà Lách" />
        <div
        className="flex-1 rounded-[18px] bg-white box-border overflow-hidden flex flex-col items-start justify-start min-w-[243px] max-w-[248px] border-[1px] border-solid border-gray-100"
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)} 
      >
          <div className="self-stretch h-[248px] relative">
            <img
              className="absolute top-[1px] left-[1px] w-full h-full object-cover"
              alt=""
              src="\src\assets\attracpopular\image-3@2x.png"
              />
            {isHovered && ( 
              <div className="absolute h-[34.68%] w-[16.13%] top-[6.45%] right-[6.85%] bottom-[58.87%] left-[77.02%] z-[1]">
                <img
                  className="absolute h-[46.51%] w-full top-[0%] right-[0%] bottom-[53.49%] left-[0%] max-w-full overflow-hidden max-h-full"
                  loading="lazy"
                  alt=""
                  src="\src\assets\attracpopular\add-to-wishlist.svg"
                />
                <img
                  className="absolute h-[46.51%] w-full top-[53.49%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  loading="lazy"
                  alt=""
                  src="\src\assets\attracpopular\quick-view.svg"
                />
              </div>
            )}
          </div>
          <div className="self-stretch flex flex-col items-start justify-center pt-3 px-4 pb-4 relative gap-[6px]">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[150%]">
                Ớt Chuông
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 text-base text-gray-900">
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
              src="\src\assets\attracpopular\add-to-cart-3.svg"
            />
          </div>
          <div className="w-20 rounded bg-red-500 hidden flex-row items-center justify-center py-[3px] px-2 box-border gap-[4px] text-white">
            <div className="h-[21px] flex-1 relative leading-[150%] inline-block">
              Sale
            </div>
            <div className="h-[21px] flex-1 relative leading-[150%] font-medium inline-block">
              50%
            </div>
          </div>
        </div>
        <ImgSpPopular image="\src\assets\attracpopular\bắp.png" greenApple="Bắp" />
        
        
      </section>
      <section className="self-stretch flex flex-row items-start justify-center gap-[24px] text-left text-[20px] text-gray-900 font-heading-05-heading-05-600 mq1050:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[287px] max-w-[312px]">
          <h3 className="m-0 relative text-inherit leading-[150%] font-medium font-inherit inline-block min-w-[75px] mq450:text-base mq450:leading-[24px]">
            Giá sốc
          </h3>
          <SpHotSellerTop image="\src\assets\attracpopular\image-5@2x.png" chaniseCabbage="Táo Xanh" />
          <div className="self-stretch rounded-md bg-white flex flex-row items-start justify-start text-[14px] text-gray-950 border-[1px] border-solid border-gainsboro mq1050:justify-center">
            <div className="flex flex-row items-start justify-start p-[5px] shrink-0">
              <img  
                className="h-[102px] w-[102px] relative object-cover"
                loading="lazy"
                alt=""
                src="\src\assets\attracpopular\image-6@2x.png"
              />
            </div>
            <div className="w-[312px] flex flex-col items-start justify-start py-6 px-3 box-border border-gainsboro gap-[7px] shrink-0">
              <div className="self-stretch relative leading-[150%]">Cam</div>
              <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 gap-[12px]">
                <img
                  className="h-10 w-10 relative min-h-[40px]"
                  loading="lazy"
                  alt=""
                  src="\src\assets\attracpopular\add-to-cart-5.svg"
                />
                <img
                  className="h-10 w-10 relative min-h-[40px]"
                  loading="lazy"
                  alt=""
                  src="\src\assets\attracpopular\quick-view.svg"
                />
                <img
                  className="h-10 w-10 relative min-h-[40px]"
                  loading="lazy"
                  alt=""
                  src="\src\assets\attracpopular\add-to-wishlist.svg"
                />
              </div>
            </div>
          </div>
          <SpHotSellerTop image="\src\assets\attracpopular\image-7@2x.png" chaniseCabbage="Xà Lách" />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[287px] max-w-[312px]">
          <h3 className="m-0 relative text-inherit leading-[150%] font-medium font-inherit mq450:text-base mq450:leading-[2px]">
            Sản phẩm bán chạy
          </h3>
          <SpHotSellerTop image="\src\assets\attracpopular\image-8@2x.png" chaniseCabbage="Cà Tím" />
          <SpT image="\src\assets\attracpopular\image-9@2x.png" chaniseCabbage="Đậu Bắp" />
          <SpHotSellerTop image="\src\assets\attracpopular\image-10@2x.png" chaniseCabbage="Cà Chua" />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[287px] max-w-[312px]">
          <h3 className="m-0 relative text-inherit leading-[150%] font-medium font-inherit mq450:text-base mq450:leading-[24px]">
            Được đánh giá cao nhất
          </h3>
          <SpHotSellerTop image="\src\assets\attracpopular\image-11@2x.png" chaniseCabbage="Khoai Tây" />
          <SpT image="\src\assets\attracpopular\image-12@2x.png" chaniseCabbage="Bắp" />
          <SpHotSellerTop
            image="\src\assets\attracpopular\image-13@2x.png"
            chaniseCabbage="Bông Cải Trắng"
          />
        </div>
        <div className="flex-[0.7949] flex flex-row items-start justify-start pt-[46.7px] px-8 pb-[47px] box-border relative min-w-[287px] max-w-[312px] min-h-[426px] text-center text-[12px] mq450:flex-1">
          <img
            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[18px] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="\src\assets\attracpopular\image-14@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] z-[1]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch relative tracking-[0.03em] leading-[100%] uppercase font-medium">
                Ưu đãi mùa hè cực sốc
              </div>
              <h1 className="m-0 self-stretch relative text-[32px] leading-[120%] font-semibold font-inherit text-green-500 mq450:text-[19px] mq450:leading-[23px] mq1000:text-[26px] mq1000:leading-[31px]">
                Giảm đến 70%
              </h1>
            </div>
            <div className="self-stretch h-[45px] flex flex-row items-start justify-start py-0 px-[42px] box-border">
              <Button
                className="self-stretch flex-1 shadow-[0px_0px_12px_rgba(0,_0,_0,_0.12)]"
                endIcon={<img width="15px" height="12px" src="\src\assets\attracpopular\group.svg" />}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#00b307",
                  fontSize: "14",
                  background: "#fff",
                  borderRadius: "43px",
                  "&:hover": { background: "#fff" },
                }}
              >
                Mua Ngay
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

SPpopular.propTypes = {
  className: PropTypes.string,
};

export default SPpopular;
