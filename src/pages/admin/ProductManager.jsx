import React, { useState } from 'react'
import { Table } from 'react-daisyui'
import SidebarAdminPages from '../../components/admin/sidebar/SidebarAdmin'
import { IoIosNotifications } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaSortAmountDown } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import { IoEllipsisVertical } from "react-icons/io5";
import { SlArrowLeft } from "react-icons/sl";
import { SlOptions } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import Popup from '../../components/admin/showproduct/Productmanager-button';
import { PRODUCTS } from '../../../products'


const ProductManager = () => {

    const [handlePop, setOpenPopup] = useState(false)

    const [visibleIndex, setVisibleIndex] = useState(null)

    const handleClickIndex = (index) =>{
        if(visibleIndex === index) {
            setVisibleIndex(null)
            setOpenPopup(false)
        }else{
            setVisibleIndex(index)
            setOpenPopup(true)
        }
    }



  return (


    

    <div className='h-full bg-[#F5F5F5] flex'>

        <div className='w-[310px] '>
        <SidebarAdminPages/>
        </div>
        {/* border border-solid border-red-400 */}

        <div className='flex flex-col mt-8 w-full '>

            {/* 1st box */}
            <div className=' flex ml-10 justify-between '>
                <p className='font-semibold	text-3xl'>Quản Lí Sản Phẩm</p>

                <div className='flex mr-6 '>
                    <button 
                    className='w-[180px] h-[40px] flex justify-center items-center bg-[#0083ff] text-lg	 rounded-xl text-white mr-4'>
                        <FaPlus className='mr-1' />  Sản Phẩm Mới
                    </button>
                    <button><IoIosNotifications className='w-[30px] h-[30px] mr-2'/></button>
                </div>
            </div>
            {/* 2nd box  table   */}
            <div className='ml-8 mr-8 mt-8 bg-white h-[1300px] border border-solid border-gray-200'>
                {/* search & filter/sort */}
                <div className='flex mt-6 ml-6 justify-between'>
                    <div className='flex'>
                    <input className='border-gray-400 border border-solid rounded w-[280px] h-[40px] bg-[#F5F5F5] pl-2' placeholder='Tìm kiếm' type="text" id='search' />
                    
                    <button className='ml-2 flex justify-center items-center w-[40px] rounded-full bg-[#0083ff]' htmlFor="search"><CiSearch className='text-white w-[24px] h-[24px] ' /></button>
                   
                    </div>
                    
                    <div className='mr-8 flex'>

                        <button className='border-gray-200 border border-solid w-[80px] rounded-xl flex justify-center items-center bg-[#F5F5F5] mr-4'>Filter<FiFilter className='ml-1 w-[20px] h-[20px]' /></button>

                        <button className='border-gray-200 border border-solid w-[80px] rounded-xl flex justify-center items-center bg-[#F5F5F5] mr-'>Sort <FaSortAmountDown className='ml-2 w-[20px] h-[20px]' /></button>

                    </div>
                </div>
                {/* Product */}
                <div className='mt-6'>
                    <Table className='text-xl'>
                        <Table.Head className=' text-xl'>
                            <span className='ml-16'>Sản Phẩm</span>
                            
                            <span>Danh Mục</span>
                            <span className='ml-6'>Giá</span>
                            <span className='ml-6'>Tình Trạng</span>
                            <span>Thêm</span>
                            <span>Hành Động</span>
                            
                        </Table.Head>
                        <Table.Body>
                            {/* This is product */}

                            {/* <span><p className='w-[150px] h-[35px] font-semibold rounded-lg text-[#36c94a] bg-[#f3fbf7] flex items-center justify-center'>Còn Hàng</p></span> */}
                                {
                                    PRODUCTS.map((value, index) => (
                                        <Table.Row key={value.id}>
                                        <span className='flex items-center ml-4 relative'>               
                                        <img className='w-[100px] h-[80px] ' src={value.productImage}  alt="" />      
                                        <p className='ml-28 absolute font-normal'>{value.productName} </p>                        
                                        </span>  
                                    
                                        
                                        <span className=''>Trái cây</span>
                                        <span>{value.price}</span>
                                        <span><p className='w-[150px] h-[35px] font-semibold rounded-lg text-[#ff3a5b] bg-[#f3fbf7] flex items-center justify-center'>Hết Hàng</p></span>
                                        <span><button className='text-[#36c94a] '>Xem Chi Tiết</button></span>
                                        <span className='flex'>

                                        <div className='relative  '>
                                        <button onClick={() => handleClickIndex(index)}><IoEllipsisVertical/></button>
                                        {
                                            visibleIndex === index && (
                                            <div>
                                            {
                                                handlePop && <Popup/>
                                            }
                                            </div>
                                            )
                                            
                                        }

                                        </div> 
                                      </span>
                                      </Table.Row>
                                    ))
                                }

                                {/* Footer */}
                                <Table.Row>
                                <span/>
                                <span/>
                                <span/>
                                <span className='relative '>
                                
                                <div className='w-[600px] mt-24 flex justify-center items-center absolute' >
                                    <button className='w-[95px] h-[45px] rounded-md bg-[#e6e3e3] flex items-center justify-center mr-4'><SlArrowLeft className='mr-2'/>Trước</button>
                                    <button className='bg-[#0079fe] w-[45px] h-[45px] rounded-md text-white mr-2'>1</button>
                                    <button className='bg-[#e6e3e3] w-[45px] h-[45px] rounded-md mr-2'>2</button>
                                    <button className='bg-[#e6e3e3] w-[45px] h-[45px] rounded-md mr-2'>3</button>
                                    <button className='bg-[#e6e3e3] w-[45px] h-[45px] rounded-md mr-2'>4</button>
                                  
                                    <button className='flex items-center justify-center bg-[#e6e3e3] w-[45px] h-[45px] rounded-md mr-2' ><SlOptions /></button>
                                    <button className='bg-[#e6e3e3] w-[45px] h-[45px] rounded-md mr-2'>5</button>
                                    <button className='bg-[#e6e3e3] w-[45px] h-[45px] rounded-md mr-2'>6</button>
                                    <button className='w-[95px] h-[45px] rounded-md bg-[#e6e3e3] flex items-center justify-center ml-4'>Sau <SlArrowRight className='ml-2' /> </button>
                                </div>
                                </span>
                             
                                </Table.Row>
                    
                            
                        </Table.Body>
                    </Table>
                </div>
            </div>

            <div>

            </div>
        </div>
    </div>
  )
}

export default ProductManager
