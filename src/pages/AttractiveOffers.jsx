import React from 'react';

import MainHeader from "../components/attracpopular/MainHeader";
import BackGroup1 from "../components/attracpopular/FrameComponent";
import Sales from "../components/attracpopular/Sales";
import ListComment2 from "../components/attracpopular/ListComment2";
import FooterDetails2 from "../components/attracpopular/FooterDetails2";
import FooterBottomContainer from "../components/attracpopular/FooterBottomContainer";


const AttractiveOffers = () => {
  return (
    <div className="w-full relative bg-gray-scale-white overflow-hidden flex flex-col items-start justify-start gap-[24px] tracking-[normal] leading-[normal]">
      <MainHeader />
      <BackGroup1 />
      <Sales />
      <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[76px] box-border max-w-full text-center text-21xl text-gren-gray-scale-900 font-body-small-body-small-400 lg:pb-[49px] lg:box-border mq825:pb-8 mq825:box-border">
        <div className="w-[1320px] flex flex-col items-start justify-start gap-[100px] max-w-full mq450:gap-[25px] mq825:gap-[50px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[50px] max-w-full mq825:gap-[25px]">
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <h1 className="m-0 w-[508px] relative text-inherit leading-[120%] font-semibold font-inherit inline-block shrink-0 max-w-full mq450:text-5xl mq450:leading-[29px] mq825:text-13xl mq825:leading-[38px]">
                Gợi Ý Hôm Nay
              </h1>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center [row-gap:20px] text-left text-sm text-gray-scale-gray-700">
              <div className="h-[328px] flex-1 bg-gray-scale-white box-border flex flex-col items-start justify-start pt-0 px-0 pb-[87px] gap-[0.5px] min-w-[260px] max-w-[265px] text-gray-scale-white border-[1px] border-solid border-gray-scale-gray-100 mq450:pb-[57px] mq450:box-border">
                <div className="self-stretch h-60 relative shrink-0">
                  <div className="absolute top-[0px] left-[0px] w-full h-full flex flex-col items-start justify-start p-[5px] box-border">
                    <img
                      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/src/assets/attracpopular/táo xanh.png"
                    />
                  </div>
                  <div className="absolute top-[16px] left-[16px] rounded bg-branding-error flex flex-row items-start justify-start py-[3px] px-2 gap-[4px] z-[1]">
                    <div className="relative leading-[150%] inline-block min-w-[37px]">
                      Giảm
                    </div>
                    <div className="relative leading-[150%] font-medium inline-block min-w-[30px]">
                      50%
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-center p-3 relative gap-[6px] shrink-0 text-gray-scale-gray-700">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[150%]">
                      Táo Xanh
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[2px] text-base text-gray-scale-gray-900">
                      <div className="relative leading-[150%] font-medium inline-block min-w-[51px] whitespace-nowrap">
                        $14.99
                      </div>
                      <div className="relative [text-decoration:line-through] leading-[150%] text-gray-scale-gray-400 inline-block min-w-[53px] whitespace-nowrap">
                        $20.99
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px]"
                      alt=""
                      src="/src/assets/attracpopular/star-1.svg"
                    />
                    <img
                      className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px]"
                      alt=""
                      src="/src/assets/attracpopular/star-1.svg"
                    />
                    <img
                      className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px]"
                      alt=""
                      src="/src/assets/attracpopular/star-1.svg"
                    />
                    <img
                      className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px]"
                      alt=""
                      src="/src/assets/attracpopular/star-1.svg"
                    />
                    <img
                      className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px]"
                      alt=""
                      src="/src/assets/attracpopular/star-5.svg"
                    />
                  </div>
                  <img
                    className="w-10 h-10 absolute !m-[0] top-[23px] right-[16px] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/src/assets/attracpopular/add-to-cart-6.svg"
                  />
                </div>
              </div>
              <div className="h-[328px] flex-1 bg-gray-scale-white box-border flex flex-col items-start justify-start pt-0 px-0 pb-[87px] gap-[0.5px] min-w-[260px] max-w-[265px] border-[1px] border-solid border-gray-scale-gray-100 mq450:pb-[57px] mq450:box-border">
                <div className="self-stretch h-60 flex flex-col items-start justify-start p-[5px] box-border shrink-0">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/src/assets/attracpopular/cam.png"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-center p-3 relative gap-[6px] shrink-0">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[150%]">
                      Cam Ấn Độ
                    </div>
                    <div className="flex flex-row items-start justify-start text-base text-gray-scale-gray-900">
                      <div className="relative leading-[150%] font-medium inline-block min-w-[55px] whitespace-nowrap">
                        $20.00
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px]"
                      alt=""
                      src="/src/assets/attracpopular/star-1.svg"
                    />
                    <img
                      className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px]"
                      alt=""
                      src="/src/assets/attracpopular/star-1.svg"
                    />
                    <img
                      className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px]"
                      alt=""
                      src="/src/assets/attracpopular/star-1.svg"
                    />
                    <img
                      className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px]"
                      alt=""
                      src="/src/assets/attracpopular/star-1.svg"
                    />
                    <img
                      className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px]"
                      alt=""
                      src="/src/assets/attracpopular/star-5.svg"
                    />
                  </div>
                  <img
                    className="w-10 h-10 absolute !m-[0] top-[23px] right-[16px] z-[1]"
                    alt=""
                    src="/src/assets/attracpopular/add-to-cart-7.svg"
                  />
                </div>
              </div>
              <div className="h-[328px] flex-1 bg-gray-scale-white box-border flex flex-col items-start justify-start pt-0 px-0 pb-[87px] gap-[0.5px] min-w-[260px] max-w-[265px] z-[2] text-branding-success-dark border-[1px] border-solid border-gray-scale-gray-100 mq450:pb-[57px] mq450:box-border">
              <div className="self-stretch h-60 flex flex-col items-start justify-start p-[5px] box-border relative gap-[10px] shrink-0">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/src/assets/attracpopular/cải .png"
                  />
                  <div className="!m-[0] absolute top-[16px] right-[16px] flex flex-col items-start justify-start gap-[6px]">
                    <img
                      className="w-10 h-10 relative z-[1]"
                      alt=""
                      src="/src/assets/attracpopular/add-to-wishlist.svg"
                    />
                    <img
                      className="w-10 h-10 relative z-[1]"
                      alt=""
                      src="/src/assets/attracpopular/quick-view.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-center p-3 relative gap-[6px] shrink-0">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[150%]">
                      Cải Thìa
                    </div>
                    <div className="flex flex-row items-start justify-start text-base text-gray-scale-gray-900">
                      <div className="relative leading-[150%] font-medium inline-block min-w-[50px] whitespace-nowrap">
                        $12.00
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px]"
                      alt=""
                      src="/src/assets/attracpopular/star-1.svg"
                    />
                    <img
                      className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px]"
                      alt=""
                      src="/src/assets/attracpopular/star-1.svg"
                    />
                    <img
                      className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px]"
                      alt=""
                      src="/src/assets/attracpopular/star-1.svg"
                    />
                    <img
                      className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px]"
                      alt=""
                      src="/src/assets/attracpopular/star-1.svg"
                    />
                    <img
                      className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px]"
                      alt=""
                      src="/src/assets/attracpopular/star-5.svg"
                    />
                  </div>
                  <img
                    className="w-10 h-10 absolute !m-[0] top-[23px] right-[16px] z-[1]"
                    alt=""
                    src="/src/assets/attracpopular/add-to-cart-8.svg"
                  />
                </div>
              </div>
              <div className="h-[328px] flex-1 bg-gray-scale-white box-border flex flex-col items-start justify-start pt-0 px-0 pb-[87px] gap-[0.5px] min-w-[260px] max-w-[265px] border-[1px] border-solid border-gray-scale-gray-100 mq450:pb-[57px] mq450:box-border">
                <div className="self-stretch h-60 flex flex-col items-start justify-start p-[5px] box-border shrink-0">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/src/assets/attracpopular/xalasch.png"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-center p-3 relative gap-[6px] shrink-0">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[150%]">
                      Xà Lách
                    </div>
                    <div className="flex flex-row items-start justify-start text-base text-gray-scale-gray-900">
                      <div className="relative leading-[150%] font-medium inline-block min-w-[45px] whitespace-nowrap">
                        $9.00
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px]"
                      alt=""
                      src="/src/assets/attracpopular/star-1.svg"
                    />
                    <img
                      className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px]"
                      alt=""
                      src="/src/assets/attracpopular/star-1.svg"
                    />
                    <img
                      className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px]"
                      alt=""
                      src="/src/assets/attracpopular/star-1.svg"
                    />
                    <img
                      className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px]"
                      alt=""
                      src="/src/assets/attracpopular/star-1.svg"
                    />
                    <img
                      className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px]"
                      alt=""
                      src="/src/assets/attracpopular/star-5.svg"
                    />
                  </div>
                  <img
                    className="w-10 h-10 absolute !m-[0] top-[23px] right-[16px] z-[1]"
                    alt=""
                    src="/src/assets/attracpopular/add-to-cart-7.svg"
                  />
                </div>
              </div>
              <div className="h-[328px] flex-1 bg-gray-scale-white box-border flex flex-col items-start justify-start pt-0 px-0 pb-[87px] gap-[0.5px] min-w-[260px] max-w-[265px] z-[2] border-[1px] border-solid border-gray-scale-gray-100 mq450:pb-[57px] mq450:box-border">
                <div className="self-stretch h-60 flex flex-col items-start justify-start p-[5px] box-border shrink-0">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/src/assets/attracpopular/cà tím.png"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-center p-3 relative gap-[6px] shrink-0">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[150%]">
                      Cà Tím
                    </div>
                    <div className="flex flex-row items-start justify-start text-base text-gray-scale-gray-900">
                      <div className="relative leading-[150%] font-medium inline-block min-w-[55px] whitespace-nowrap">
                        $34.00
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px]"
                      alt=""
                      src="/src/assets/attracpopular/star-1.svg"
                    />
                    <img
                      className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px]"
                      alt=""
                      src="/src/assets/attracpopular/star-1.svg"
                    />
                    <img
                      className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px]"
                      alt=""
                      src="/src/assets/attracpopular/star-1.svg"
                    />
                    <img
                      className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px]"
                      alt=""
                      src="/src/assets/attracpopular/star-1.svg"
                    />
                    <img
                      className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px]"
                      alt=""
                      src="/src/assets/attracpopular/star-5.svg"
                    />
                  </div>
                  <img
                    className="w-10 h-10 absolute !m-[0] top-[23px] right-[16px] z-[1]"
                    alt=""
                    src="/src/assets/attracpopular/add-to-cart-7.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch grid flex-row items-start justify-start gap-[24px] grid-cols-[repeat(3,_minmax(318px,_1fr))] max-w-full text-sm text-gray-scale-white lg:grid-cols-[repeat(2,_minmax(318px,_551px))] lg:justify-center mq825:grid-cols-[minmax(318px,_1fr)]">
            <div className="flex flex-col items-start justify-start pt-[35px] px-0 pb-[294px] box-border relative gap-[16px] max-w-full mq825:pt-[23px] mq825:pb-[191px] mq825:box-border">
              <img
                className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/src/assets/attracpopular/banner-shape@2x.png"
              />
              <div className="self-stretch relative tracking-[0.03em] leading-[100%] uppercase font-medium z-[1]">
                deal hot
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2 gap-[8px] text-21xl">
                <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-semibold font-inherit z-[1] mq450:text-5xl mq450:leading-[29px] mq825:text-13xl mq825:leading-[38px]">
                  Tháng siêu sale
                </h1>
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-[67px] text-5xl mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[8px] z-[1]">
                    <div className="flex-1 rounded-md flex flex-col items-start justify-start gap-[4px]">
                      <div className="self-stretch relative leading-[150%] mq450:text-lgi mq450:leading-[29px]">
                        00
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 pr-[11px] pl-2.5 text-xs text-gray-200">
                        <div className="relative tracking-[0.03em] leading-[100%] uppercase inline-block min-w-[35px]">
                          ngày
                        </div>
                      </div>
                    </div>
                    <h2 className="m-0 relative text-inherit leading-[150%] font-normal font-inherit text-gray-100 inline-block min-w-[6px] mq450:text-lgi mq450:leading-[29px]">
                      :
                    </h2>
                    <div className="flex-1 rounded-md flex flex-col items-start justify-start gap-[4px]">
                      <div className="self-stretch relative leading-[150%] mq450:text-lgi mq450:leading-[29px]">
                        02
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 pr-2.5 pl-[9px] text-xs text-gray-200">
                        <div className="relative tracking-[0.03em] leading-[100%] uppercase inline-block min-w-[37px]">
                          tiếng
                        </div>
                      </div>
                    </div>
                    <h2 className="m-0 relative text-inherit leading-[150%] font-normal font-inherit text-gray-100 inline-block min-w-[6px] mq450:text-lgi mq450:leading-[29px]">
                      :
                    </h2>
                    <div className="flex-1 rounded-md flex flex-col items-start justify-start gap-[4px]">
                      <div className="self-stretch relative leading-[150%] mq450:text-lgi mq450:leading-[29px]">
                        18
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 pr-3 pl-[11px] text-xs text-gray-200">
                        <div className="relative tracking-[0.03em] leading-[100%] uppercase inline-block min-w-[32px]">
                          phút
                        </div>
                      </div>
                    </div>
                    <h2 className="m-0 relative text-inherit leading-[150%] font-normal font-inherit text-gray-100 inline-block min-w-[6px] mq450:text-lgi mq450:leading-[29px]">
                      :
                    </h2>
                    <div className="flex-1 rounded-md flex flex-col items-start justify-start gap-[4px]">
                      <div className="self-stretch relative leading-[150%] mq450:text-lgi mq450:leading-[29px]">
                        46
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 px-[13px] text-xs text-gray-200">
                        <div className="relative tracking-[0.03em] leading-[100%] uppercase inline-block min-w-[29px]">
                          giây
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                <button className="cursor-pointer [border:none] py-3.5 px-8 bg-gray-scale-white rounded-24xl flex flex-row items-start justify-start gap-[12px] z-[1]">
                  <div className="relative text-sm leading-[17px] font-semibold font-body-small-body-small-400 text-branding-success text-justify inline-block min-w-[73px]">
                    Mua Ngay
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                    <img
                      className="w-[15px] h-3 relative"
                      alt=""
                      src="/src/assets/attracpopular/group-3.svg"
                    />
                  </div>
                </button>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[35px] px-0 pb-[307px] box-border relative gap-[28.5px] max-w-full mq825:pt-[23px] mq825:pb-[200px] mq825:box-border">
              <img
                className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/src/assets/attracpopular/thịt.png"
              />
              <div className="self-stretch flex flex-col items-end justify-start gap-[12.5px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                  <div className="self-stretch relative tracking-[0.03em] leading-[100%] uppercase font-medium z-[1]">
                    giảm 85% chất béo
                  </div>
                  <h1 className="m-0 self-stretch relative text-21xl leading-[120%] font-semibold font-inherit z-[1] mq450:text-5xl mq450:leading-[29px] mq825:text-13xl mq825:leading-[38px]">
                    Thịt Ít Mỡ
                  </h1>
                </div>
                <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] text-lg">
                  <div className="w-[145px] flex flex-row items-start justify-start gap-[8px] z-[1]">
                    <div className="flex-1 flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                      <div className="self-stretch relative leading-[150%] inline-block min-w-[70px]">
                        Giá gốc
                      </div>
                    </div>
                    <div className="relative text-xl leading-[150%] font-semibold text-branding-warning inline-block min-w-[67px] whitespace-nowrap mq450:text-base mq450:leading-[24px]">
                      $79.99
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                <button className="cursor-pointer [border:none] py-3.5 px-8 bg-gray-scale-white rounded-24xl flex flex-row items-start justify-start gap-[12px] z-[1]">
                  <div className="relative text-sm leading-[17px] font-semibold font-body-small-body-small-400 text-branding-success text-justify inline-block min-w-[73px]">
                    Mua Ngay
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                    <img
                      className="w-[15px] h-3 relative"
                      alt=""
                      src="/src/assets/attracpopular/group-3.svg"
                    />
                  </div>
                </button>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[35px] px-0 pb-[307px] box-border relative gap-[24px] max-w-full text-xs text-gray-scale-gray-900 mq825:pt-[23px] mq825:pb-[200px] mq825:box-border">
              <img
                className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/src/assets/attracpopular/foodall.png"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[18px]">
                <div className="self-stretch relative tracking-[0.03em] leading-[100%] uppercase font-medium z-[1]">
                  Ưu đãi mùa hè
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[10px] text-19xl">
                  <h1 className="m-0 self-stretch relative text-inherit leading-[46px] font-semibold font-inherit z-[1] mq450:text-4xl mq450:leading-[27px] mq825:text-11xl mq825:leading-[36px]">
                    100% Trái Cây Tươi
                  </h1>
                  <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-lg">
                    <div className="flex flex-row items-start justify-start gap-[12px] z-[1]">
                      <div className="w-[74px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
                        <div className="self-stretch relative leading-[150%] inline-block min-w-[74px]">
                          Giảm tới
                        </div>
                      </div>
                      <div className="rounded-8xs bg-gray-scale-gray-900 flex flex-row items-start justify-start py-1.5 px-3 whitespace-nowrap text-gold">
                        <div className="relative leading-[150%] font-semibold inline-block min-w-[76px]">
                          64% OFF
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                <button className="cursor-pointer [border:none] py-3.5 px-8 bg-gray-scale-white rounded-24xl flex flex-row items-start justify-start gap-[12px] z-[1]">
                  <div className="relative text-sm leading-[17px] font-semibold font-body-small-body-small-400 text-branding-success text-justify inline-block min-w-[73px]">{`Mua Ngay `}</div>
                  <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                    <img
                      className="w-[15px] h-3 relative"
                      alt=""
                      src="/src/assets/attracpopular/group-3.svg"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[76px] box-border max-w-full text-left text-21xl text-gray-scale-gray-900 font-body-small-body-small-400 mq825:pb-[49px] mq825:box-border">
        <div className="flex-1 bg-gren-gray-scale-50 flex flex-col items-start justify-start py-[100px] px-0 box-border gap-[50px] max-w-full mq825:gap-[25px] mq825:pt-[65px] mq825:pb-[65px] mq825:box-border">
          <div className="self-stretch flex flex-row items-start justify-between py-0 px-[300px] box-border max-w-full gap-[20px] lg:pl-[150px] lg:pr-[150px] lg:box-border mq825:pl-[75px] mq825:pr-[75px] mq825:box-border mq1400:flex-wrap">
            <div className="flex flex-col items-start justify-start gap-[16px] max-w-full">
              <h1 className="m-0 relative text-inherit leading-[120%] font-semibold font-inherit mq450:text-5xl mq450:leading-[29px] mq825:text-13xl mq825:leading-[38px]">
                Đánh giá của khách hàng
              </h1>
              <div className="w-[72px] flex flex-row items-start justify-between relative gap-[20px]">
                <div className="h-1 w-3 relative bg-limegreen-200" />
                <div className="h-full w-10 absolute !m-[0] top-[0px] bottom-[0px] left-[calc(50%_-_20px)] bg-branding-success" />
                <div className="h-1 w-3 relative bg-limegreen-200" />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[11.5px] px-0 pb-0">
              <div className="flex flex-row items-start justify-start gap-[12px]">
                <img
                  className="h-[45px] w-[45px] relative object-contain min-h-[45px]"
                  alt=""
                  src="/src/assets/attracpopular/aoorw.svg"
                />
                <img
                  className="h-[45px] w-[45px] relative min-h-[45px]"
                  alt=""
                  src="/src/assets/attracpopular/aoorw-1.svg"
                />
              </div>
            </div>
          </div>
          <ListComment2 />
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <div className="h-2 w-2 relative rounded-[50%] bg-gren-gray-scale-200" />
              <div className="h-2 w-2 relative rounded-[50%] bg-gren-gray-scale-200" />
              <div className="h-2 w-4 relative rounded-31xl bg-branding-success" />
              <div className="h-2 w-2 relative rounded-[50%] bg-gren-gray-scale-200" />
              <div className="h-2 w-2 relative rounded-[50%] bg-gren-gray-scale-200" />
            </div>
          </div>
        </div>
      </section>
      <footer className="self-stretch bg-gray-scale-gray-900 flex flex-col items-start justify-start gap-[80px] max-w-full text-left text-5xl text-gray-scale-gray-900 font-body-small-body-small-400 lg:gap-[40px] mq825:gap-[20px]">
        <div className="self-stretch bg-gray-scale-gray-50 flex flex-row items-start justify-center py-[50.5px] pr-5 pl-[357px] box-border relative max-w-full [row-gap:20px] mq450:pl-5 mq450:box-border mq825:pl-[89px] mq825:box-border mq1400:flex-wrap mq1400:pl-[178px] mq1400:box-border">
          <div className="h-[162px] w-[1920px] relative bg-gray-scale-gray-50 hidden max-w-full z-[0]" />
          <div className="w-[448px] flex flex-col items-start justify-start gap-[4px] max-w-full z-[1]">
            <h2 className="m-0 relative text-inherit leading-[150%] font-medium font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[29px]">
              Đăng ký nhận thêm thông tin
            </h2>
            <div className="self-stretch relative text-sm leading-[150%] text-gray-scale-gray-400">
              Pellentesque eu nibh eget mauris congue mattis matti.
            </div>
          </div>
          <div className="w-[535px] flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0 box-border max-w-full text-base text-gray-scale-gray-500">
            <div className="self-stretch flex flex-row items-start justify-start max-w-full z-[1]">
              <div className="flex-1 rounded-27xl bg-gray-scale-white box-border flex flex-row items-start justify-start py-3 px-6 whitespace-nowrap max-w-full border-[1px] border-solid border-gray-scale-gray-100">
                <div className="w-[400px] relative leading-[150%] inline-block shrink-0 max-w-[calc(100%_-_0px)]">
                  Your email address
                </div>
              </div>
              <button className="cursor-pointer [border:none] py-4 px-10 bg-branding-success rounded-24xl flex flex-row items-start justify-start z-[1] ml-[-118px] hover:bg-limegreen-100">
                <div className="relative text-base leading-[20px] font-semibold font-body-small-body-small-400 text-gray-scale-white text-left inline-block min-w-[82px]">
                  Subscribe
                </div>
              </button>
            </div>
          </div>
          <img
            className="h-[233px] w-[326px] absolute !m-[0] bottom-[-45px] left-[100px] object-cover z-[2]"
            alt=""
            src="/src/assets/attracpopular/blue-and-orange-simple-ilustration-supermarket-logo--1-removebgpreview-1-1@2x.png"
          />
        </div>
        <FooterDetails2 />
        <FooterBottomContainer />
      </footer>
    </div>
  );
};

export default AttractiveOffers;
