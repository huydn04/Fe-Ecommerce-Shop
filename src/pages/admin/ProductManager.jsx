import React from 'react'
import { Table } from 'react-daisyui'
import SidebarAdminPages from '../../components/admin/sidebar/SidebarAdmin'
import { IoIosNotifications } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaSortAmountDown } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import { Logo, SanPham1 } from '../../assets/Home'
const ProductManager = () => {
  return (
    <div className='h-dvh bg-[#F5F5F5] flex'>

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
                    <button><IoIosNotifications className='w-[30px] h-[30px]'/></button>
                </div>
            </div>
            {/* 2nd box  table   */}
            <div className='ml-8 mr-8 mt-8 bg-white h-[700px] border border-solid border-gray-200'>
                {/* search & filter/sort */}
                <div className='flex mt-6 ml-6 justify-between'>
                    <div className='flex'>
                    <input className='border-gray-400 border border-solid rounded w-[280px] h-[40px] bg-[#F5F5F5] pl-2' placeholder='Tìm kiếm' type="text" id='search' />
                    
                    <button className='ml-2 flex justify-center items-center w-[40px] rounded-full bg-[#0083ff]' htmlFor="search"><CiSearch className='text-white w-[24px] h-[24px] ' /></button>
                   
                    </div>
                    
                    <div className='mr-8 flex'>

                        <button className='border-gray-200 border border-solid w-[80px] rounded-xl flex justify-center items-center bg-[#F5F5F5] mr-4'>Filter<FiFilter className='ml-1 w-[20px] h-[20px]' /></button>

                        <button className='border-gray-200 border border-solid w-[80px] rounded-xl flex justify-center items-center bg-[#F5F5F5] mr-4'>Sort <FaSortAmountDown className='ml-2 w-[20px] h-[20px]' /></button>

                    </div>
                </div>
                {/* Product */}
                <div className='border border-solid border-red-400 mt-6'>
                    <Table>
                        <Table.Head>
                            <span>Sản Phẩm</span>
                            <span/>

                        </Table.Head>
                        <Table.Body>
                            <Table.Row>
                              <span><img className='w-[80px] h-[70px]' src="https://nutritionadvance.com/wp-content/uploads/2017/12/red-and-green-apples.jpg" alt="" /></span>  
                              <span>Title</span>
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
