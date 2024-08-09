import { IoIosCloseCircleOutline } from "react-icons/io";
import { Select } from "react-daisyui";
import { Photo } from "../../assets/img-product";

const ModalUpdate = ({ isVisible, onClose }) => {
    if (!isVisible) return null;
    return (
        <div>
            <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10 ">
                <div className="w-1/2 h-2/3 rounded-md bg-white relative ">
                    <div className="mb-4 font-medium bx-font-family text-2xl mt-2 text-center">Cập Nhật Sản Phẩm</div>
                    <div className="flex flex-row-reverse right-1 top-1 absolute">
                        <button onClick={() => onClose()}><IoIosCloseCircleOutline className="w-8 h-8" /></button>
                    </div>
                    <form action="">
                        <div className="flex ml-2 w-full h-1/2">
                            <div className="w-full h-full">
                                <p>Tên sản phẩm</p>
                                <input type="text"
                                    className="pl-2 mt-1 w-2/5 h-3/4 border border-solid border-gray-300 rounded-lg"
                                />
                            </div>

                            <div className="absolute top-24 right-10">
                                <label className="flex flex-col justify-center items-center" htmlFor="img">
                                    Ảnh sản phẩm
                                    <img className="w-1/2 h-1/2" src={Photo} alt="" />
                                    </label>
                                <input type="file"
                                    className="hidden"
                                    id="img"
                                />
                            </div>
                        </div>
                        <div className="ml-2">
                            <p>Mô tả</p>
                            <textarea type="text"
                                className="pl-2 mt-1 w-2/5 h-24 border border-solid border-gray-300 rounded-lg"
                            />
                        </div>
                        <div className="ml-2">
                            <p>Giá</p>
                            <input type="number"
                                className="pl-2 mt-1 w-1/4 h-3/4 border border-solid border-gray-300 rounded-lg"
                            />
                        </div>
                        <div className="ml-2">
                            <p className=' text-sm pt-5 font-semibold'>Danh mục</p>
                            <Select
                                className='mt-1 border border-solid border-gray-300 rounded-lg'
                            >
                                <option value={'default'} disabled>
                                    Chọn danh mục
                                </option>
                                <option >Danh mục 1</option>
                                <option >Danh mục 2</option>
                                <option >Danh mục 3</option>
                                <option >Danh mục 4</option>
                                <option >Danh mục 5</option>
                            </Select>
                        </div>
                        <div className="ml-2">
                            <p className=' text-sm pt-6 font-semibold'>Tình trạng</p>
                            <Select
                                className='mt-1 mb-5 border border-solid border-gray-300 rounded-lg'
                            >
                                <option value={''} disabled>
                                    Tình trạng
                                </option>
                                <option >Còn hàng</option>
                                <option >Hết hàng</option>
                            </Select>
                        </div>

                        <div className='flex justify-end mt-3'>
                                    <button className='btn font-semibold bg-cyan-400 mb-5 mr-3 text-white w-1/6 h-1/2 rounded-lg hover:bg-cyan-500'>Cập nhật sản phẩm</button>
                                </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default ModalUpdate
