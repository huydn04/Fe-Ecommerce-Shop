import React, { useState } from 'react'
import { Button, Table } from 'react-daisyui'
import { RelativeList } from './RelativeList'
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { FaRegTrashAlt } from "react-icons/fa";
import Modal from './Modal';

const TableUpdate = () => {
const [show,setShow]= useState()
    return (
        <div className=''>
            <div>
                <div className='flex justify-end gap-5'>
                    <Button
                        className='w-[115px] h-[30px] text-center pt-[2px] rounded-lg font-semibold border border-solid border-cyan-500 text-cyan-500 bg-white hover:bg-cyan-500 hover:text-white'
                        onClick={() => setShow(true)}    >
                        + Sản phẩm
                    </Button>
                    {/* <Button className='border border-solid border-green-500 text-green-500 bg-white hover:bg-green-500 hover:text-white'>
                    + Danh mục
                    </Button> */}
                 

                </div>
                <div className='bg-white mt-5 rounded-xl'>
                    <Table className="rounded-box">
                        <Table.Head className='border-b border-solid border-gray-300 text-sm'>
                            <span className='ml-2'>ID</span>
                            <span className='ml-2'>Hình ảnh</span>
                            <span className='ml-2'>Tên sản phẩm</span>
                            <span className='ml-2'>Danh mục</span>
                            <span className='ml-2'>Giá tiền</span>
                            <span className='ml-2'>Tình trạng</span>
                            <span className='ml-2' />
                            <span className='ml-2' />
                        </Table.Head>

                        {
                            RelativeList.map((item, index) => {
                                return (
                                    <>
                                        <Table.Body className=''>
                                            <Table.Row>
                                                <div className='ml-2'>{item.id}</div>
                                                <img className='w-[60px] ml-2' src={item.img} alt="" />
                                                <div className='ml-2'>{item.name}</div>
                                                <div className='ml-2'>{item.category}</div>
                                                <div className='ml-2'>{item.price_old}</div>
                                                <div className='ml-2'>{item.status}</div>
                                                <Button color="ghost" className='text-sm ml-2'>
                                                    Chi tiết
                                                </Button>
                                                <div className='flex gap-5'>
                                                    <button className='bg-cyan-500 w-[30px] h-[30px] pl-[8.5px] text-white rounded-lg hover:bg-cyan-600'><HiOutlinePencilSquare className='' /></button>
                                                    <button className='bg-rose-500 w-[30px] h-[30px] pl-[8.5px] text-white rounded-lg hover:bg-rose-600'><FaRegTrashAlt /></button>
                                                </div>
                                            </Table.Row>
                                        </Table.Body>

                                    </>
                                )
                            })
                        }
                    </Table>
                </div>
            </div>

                  <Modal isVisible={show} onClose={() => setShow(false)} />
        </div>
    )
}

export default TableUpdate
