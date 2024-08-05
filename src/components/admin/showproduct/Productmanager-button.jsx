import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const Popup = () => {
    return(
        <div className='h-[50px] rounded-md flex justify-around absolute ml-8 bottom-0 '>
                <button className='w-[100px]  bg-[#d0cccd] text-xl flex justify-center rounded-md items-center hover:bg-[#fbb827] mr-2'><FaRegEdit className='mr-3' />Sửa</button>
                <button className='w-[100px]  bg-[#d0cccd] text-xl flex justify-center rounded-md items-center hover:bg-[#f74a5d]'><RiDeleteBin6Line className='mr-3'/> Xoá</button>
        </div>
    )
}

export default Popup
