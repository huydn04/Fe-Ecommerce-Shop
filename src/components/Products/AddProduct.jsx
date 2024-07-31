import React, { useState } from 'react'

import { Button, Modal, Select } from 'react-daisyui'

const AddProduct = () => {
    const { Dialog, handleShow } = Modal.useDialog();
    const [value, setValue] = useState('default');

    return (
        <>
            <div className=''>
                <div className='flex justify-end gap-5'>
                    {/* <Button className='border border-solid border-green-500 text-green-500 bg-white hover:bg-green-500 hover:text-white'>
                    + Danh mục
                </Button> */}
                    <Button className='border border-solid border-cyan-500 text-cyan-500 bg-white hover:bg-cyan-500 hover:text-white'
                        onClick={handleShow}>
                        + Sản phẩm
                    </Button>
                </div>

                {
                    <form>
                        <div className=''>
                            <Dialog className=''>
                                <p className="font-bold text-center text-xl pt-3">THÊM SẢN PHẨM</p>
                                <Modal.Body>
                                    <form >
                                        <div className="flex flex-col w-full component-preview p-4 justify-start gap-2 font-sans">
                                            <div className="form-control w-full max-w-xs">
                                                <label className="label">
                                                    <span className="label-text font-semibold">Tên sản phẩm</span>
                                                </label>
                                                <input
                                                    className='w-[250px] h-[38px] pl-3 border border-solid border-gray-300 rounded-lg'
                                                    type="text"
                                                />
                                            </div>
                                            <div className="form-control w-full max-w-xs">
                                                <label className="label">
                                                    <span className="label-text font-semibold">Mô tả</span>
                                                </label>
                                                <input
                                                    className='w-[400px] h-[38px] pl-3 border border-solid border-gray-300 rounded-lg'
                                                    type="text"
                                                />
                                            </div>
                                            <div className="form-control w-full max-w-xs">
                                                <label className="label">
                                                    <span className="label-text font-semibold">Giá tiền</span>
                                                </label>
                                                <input
                                                    className='w-[150px] h-[38px] pl-3 border border-solid border-gray-300 rounded-lg'
                                                    type="text"
                                                />
                                            </div>
                                            <div className="form-control w-full max-w-xs">
                                                <label className="label">
                                                    <span className="label-text font-semibold">Hình ảnh</span>
                                                </label>
                                                <input
                                                    className='w-[400px] h-[35px]'
                                                    type="file"
                                                />
                                            </div>
                                            <div className="form-control w-full max-w-xs">
                                                <label className="label">
                                                    <span className="label-text font-semibold">Danh mục</span>
                                                </label>
                                                <Select
                                                    className='border border-solid border-gray-300 rounded-lg'
                                                    value={value} onChange={event => setValue(event.target.value)}>
                                                    <option value={'default'} disabled>
                                                        Chọn danh mục
                                                    </option>
                                                    <option value={'Category1'}>Danh mục 1</option>
                                                    <option value={'Category2'}>Danh mục 2</option>
                                                    <option value={'Category3'}>Danh mục 3</option>
                                                    <option value={'Category4'}>Danh mục 4</option>
                                                    <option value={'Category5'}>Danh mục 5</option>
                                                </Select>
                                            </div>
                                            <div className="form-control w-full max-w-xs">
                                                <label className="label">
                                                    <span className="label-text font-semibold">Danh mục</span>
                                                </label>
                                                <Select
                                                    className='border border-solid border-gray-300 rounded-lg'
                                                    value={value} onChange={event => setValue(event.target.value)}>
                                                    <option value={'default'} disabled>
                                                        Tình trạng
                                                    </option>
                                                    <option value={'Status1'}>Còn hàng</option>
                                                    <option value={'Status2'}>Hết hàng</option>
                                                </Select>
                                            </div>
                                        </div>
                                    </form>
                                </Modal.Body>
                                <Modal.Actions>
                                    <form method="dialog" className='gap-5'>
                                        <Button className='border border-solid border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white'>Tạo</Button>
                                        <Button>Close</Button>
                                    </form>
                                </Modal.Actions>
                            </Dialog>
                        </div>
                    </form>
                }
            </div>
        </>
    )
}

export default AddProduct
