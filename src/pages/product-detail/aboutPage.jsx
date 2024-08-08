// import React from 'react'
import { Agri, Apple, bigContent, Blueberry, Content3, Content4, img1Content3, img2Content3, img3Content3, Maize, Strawberry } from '../../assets/about-img'
import { Content } from '../../assets/about-img'
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";

import Header from '../../components/home/Header'
import Footer from '../../components/home/Footer'

const AboutPage = () => {
  return (
    <div className='w-full container'>
      <Header />
      {/* Content 1 */}
      <div className=''>
        <img src={bigContent} alt="" />
      </div>
      {/* Content 2 */}
      <div className=' pt-14 pb-14'>
        <div className='flex flex-row gap-11 ml-40'>
          <div className=''>
            <img className='w-[280px] h-[380px]' src={Content} alt="" />
          </div>
          <div className='w-[370px]'>
            <h1 className='text-[35px] leading-[43px] font-bold'>Best Organic Agriculture Firms</h1>
            <p className='mt-5'>Give lady of they such they sure it. Me contained explained my education.
              Vulgar as hearts by garret. Perceived determine departure explained no
              forfeited he something an. Contrasted dissimilar get joy you instrument out
              reasonably. Again keeps at no meant stuff.</p>
            <div className='flex flex-row gap-2 mt-5'>
              <IoIosCheckmarkCircle className='mt-1 text-green-500' />
              <p>Best Quality Standards</p>
            </div>
            <div className='flex flex-row gap-2 mt-1'>
              <IoIosCheckmarkCircle className='mt-1 text-green-500' />
              <p>Natural Healthy Products</p>
            </div>
            <button className='bg-amber-400 font-bold w-[180px] h-[40px] rounded-lg mt-5'>Discover More</button>
          </div>
          <div className='shadow-custom rounded-lg w-[280px] h-[380px] flex flex-col justify-center pl-14 gap-7 ml-28'>
            <div className='flex flex-row gap-5'>
              <img className='w-[50px]' src={Blueberry} alt="" />
              <p className='mt-2 text-xl'>Blueberry</p>
            </div>
            <div className='flex flex-row gap-5'>
              <img className='w-[50px]' src={Strawberry} alt="" />
              <p className='mt-4 text-xl'>Strawberry</p>
            </div>
            <div className='flex flex-row gap-5'>
              <img className='w-[50px]' src={Maize} alt="" />
              <p className='mt-4 text-xl'>Maize</p>
            </div>
            <div className='flex flex-row gap-5'>
              <img className='w-[50px]' src={Apple} alt="" />
              <p className='mt-4 text-xl'>Apple</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content 2 */}
      <div className=' flex flex-row'>
        <div className='bg-green-600 flex flex-col gap-10 basis-1/2 pl-48 pt-32 pb-32 pr-28'>
          <div className=' w-[450px]'>
            <div className='flex flex-row gap-3'>
              <FaCheck className='mt-3 text-white' />
              <p className='font-bold text-2xl text-white'>Always Fresh</p>
            </div>
            <p className='mt-3 text-white font-semibold text-sm leading-7'>Continued at up to zealously necessary breakfast. Surrounded sir
              motionless she end literature. Gay direction neglected but supported
              yet her reprehenderit quaerat deleniti eaque similique id.</p>
          </div>
          <div className=' w-[450px]'>
            <div className='flex flex-row gap-3'>
              <FaCheck className='mt-3 text-white' />
              <p className='font-bold text-2xl text-white'>All Organic</p>
            </div>
            <p className='mt-3 text-white font-semibold text-sm leading-7'>Continued at up to zealously necessary breakfast. Surrounded sir
              motionless she end literature. Gay direction neglected but supported.</p>
          </div>
          <div className=' w-[450px]'>
            <div className='flex flex-row gap-3'>
              <FaCheck className='mt-3 text-white' />
              <p className='font-bold text-2xl text-white'>Eco Friendly</p>
            </div>
            <p className='mt-3 text-white font-semibold text-sm leading-7'>Montinued at up to zealously necessary breakfas is motionless she end
              literature. Gay direction neglected but supported yet her.</p>
          </div>
        </div>
        <div className='basis-1/2 pl-28 pt-28'>
          <div className=''>
            <p className='text-green-700 text-xl'>Why Choose Us</p>
            <h1 className='text-[40px] font-bold mt-1 w-[400px]'>Growing crops and raising livestock.</h1>
            <div className='flex flex-row gap-10 pr-20'>
              <div>
                <div className='border-b-2 border-solid border-gray-700 pb-7 w-[220px]'>
                  <p className='text-[75px] font-bold text-amber-300 mt-5'>38K</p>
                  <p className='-mt-3 ml-1 font-semibold'>Trusted Customers</p>
                </div>
                <div>
                  <p className='text-[75px] font-bold text-amber-300 mt-1'>28M</p>
                  <p className='-mt-3 ml-1 font-semibold'>Growth Tonns of Harvest</p>
                </div>
              </div>
              <div className='mt-36'>
                <img className='w-[600px] h-[200px]' src={Content4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AboutPage
