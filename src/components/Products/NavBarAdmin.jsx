import React from 'react'
import { Navbar, Select} from "react-daisyui";
import { useState } from "react";

import { BsCalendarDate } from "react-icons/bs";

const NavBarAdmin = () => {
    const [value, setValue] = useState("default");

    return (
        <div className=''>
            <Navbar className="flex justify-between items-center">
                <div className="">
                    <div className="">
                        <p className="font-bold text-3xl">Cập nhật sản phẩm</p>
                        <div className="text-gray-500">
                            <p>Quản lý danh mục và sản phẩm</p>
                        </div>
                    </div>
                </div>

                <div className="flex-none ">
                    <div className="flex w-full  p-4 items-center justify-center gap-2 ">
                        <BsCalendarDate className="text-2xl" />
                        <Select /*className="w-[200px]"*/
                            value={value}
                            bordered="false"
                            onChange={(event) => setValue(event.target.value)}
                            className=" bg-gray-200 focus:bg-white"
                        >
                            <option value={"default"} disabled>
                                Lọc theo năm
                            </option>
                            <option value={"Date1"}>15/08/2004</option>
                            <option value={"Date2"}>15/08/2004</option>
                            <option value={"Date3"}>15/08/2004</option>
                            <option value={"Date4"}>15/08/2004</option>
                            <option value={"Date5"}>15/08/2004</option>
                        </Select>
                    </div>
                </div>
            </Navbar>
        </div>
    )
}

export default NavBarAdmin