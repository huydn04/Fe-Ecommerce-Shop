import React from 'react'
import { Apple, bigContent, Blueberry, Maize, Strawberry } from '../../assets/about-img'
import { Content } from '../../assets/about-img'
import { IoIosCheckmarkCircle } from "react-icons/io";

const AboutPage = () => {
  return (
    <div className='w-full flex justify-center'>
      <div>
        <div>
          <img src={bigContent} alt="" />
        </div>
        <div className='bg-red-300 flex justify-center ml-56 mr-96 gap-5'>
          <div className='basis-3/4 bg-blue-400 w-[300px]'>
            <div className='flex justify-center gap-14 basis-1/2 pt-5 pb-5'>
              <div>
                <img className='w-[250px] h-[350px]'
                  src={Content} alt="" />
              </div>
              <div className='flex flex-col basis-1/2'>
                <h1 className='font-bold text-[35px] leading-[43px]'>Best Oraganic Agriculture Firms</h1>
                <p className='mt-5'>Give lady of they such they sure it. Me contained explained my education.
                  Vulgar as hearts by garret. Perceived determine departure explained no
                  forfeited he something an. Contrasted dissimilar get joy you instrument out
                  reasonably. Again keeps at no meant stuff.</p>
                <div className='flex flex-row gap-2 mt-3 font-bold'>
                  <IoIosCheckmarkCircle className='mt-1 text-green-500' />
                  <p> Best Quality Standards</p>
                </div>
                <div className='flex flex-row gap-2 mt-1 font-bold'>
                  <IoIosCheckmarkCircle className='mt-1 text-green-500' />
                  <p> Natural Healthy Products</p>
                </div>
                <button className='bg-amber-200 w-[180px] h-[35px] mt-3'>Discover More</button>
              </div>
            </div>
          </div>
          <div className='w-[500px] bg-slate-600 flex flex-col justify-center gap-10'>
            <div className='bg-white w-[300px] h-[300px] pt-8 pl-16'>
              <div className='flex flex-row gap-5'>
                <img className='w-[45px]' src={Blueberry} alt="" />
                <p className='text-xl mt-1'>Blueberry</p>
              </div>
              <div className='flex flex-row gap-5 mt-5'>
                <img className='w-[45px]' src={Strawberry} alt="" />
                <p className='text-xl mt-3'>Blueberry</p>
              </div>
              <div className='flex flex-row gap-5 mt-5'>
                <img className='w-[45px]' src={Maize} alt="" />
                <p className='text-xl mt-3'>Blueberry</p>
              </div>
              <div className='flex flex-row gap-5 mt-5'>
                <img className='w-[45px]' src={Apple} alt="" />
                <p className='text-xl mt-3'>Blueberry</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
