import React from 'react'

const ModalDelete = ({ isVisible, onClose }) => {
    if (!isVisible) return null;
    return (
        <div>
            <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10 ">
                <div className="w-1/6 h-1/4 rounded-md bg-white relative ">
                    <div className='flex justify-center items-center'>
                        Xác nhận xoá sản Phẩm

                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <button>Xác Nhận</button>
                        <button onClick={() => onClose()}>Huỷ Bỏ</button>
                    </div>
                  
                </div>
            </div>
        </div>
    )
}

export default ModalDelete
