// import { emphasize } from '@mui/material';
import React, { useState } from 'react'
import { IoIosMail } from "react-icons/io";
import { FaKey } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { LuMapPin } from "react-icons/lu";
import { HiChevronDown } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import { PiBasket } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";


import { Logo } from "../../assets/img-product"
import { Banner } from "../../assets/img-product"


const initFormValue = {
    email: "",
    password: "",
    confirmPassword: "",
};

const isEmtyValue = (value) => {
    return !value || value.trim().length < 1;
};

const isEmailValid = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

const CreateUser = () => {

    const [formValue, setFormValue] = useState(initFormValue);
    const [formError, setFormError] = useState({});

    const validateForm = () => {
        const error = {};

        if (isEmtyValue(formValue.email)) {
            error["email"] = "Vui lòng nhập email";
        } else {
            if (!isEmailValid(formValue.email)) {
                error["email"] = "Địa chỉ email không hợp lệ";
            }
        }

        if (isEmtyValue(formValue.password)) {
            error["password"] = "Vui lòng nhập mật khẩu";
        }

        if (isEmtyValue(formValue.confirmPassword)) {
            error["confirmPassword"] = "Vui lòng xác nhận lại mật khẩu";
        } else if (formValue.confirmPassword !== formValue.password) {
            error["confirmPassword"] = "Mật khẩu không khớp";
        }

        setFormError(error);
        return Object.keys(error).length === 0;
    }

    const handleChange = (event) => {
        const { value, name } = event.target;
        setFormValue({
            ...formValue,
            [name]: value,
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validateForm()) {
            console.log("form value", formValue);
        } else {
            console.log("form invalid");
        }
    }

    console.log(formError);

    //Hide password

    //Giao diện

    return (
        <div className="re-page flex flex-col items-center w-screen h-[100vh]">

            {/*Top Header*/}
            <div className='flex flex-row justify-center w-screen h-[33px] gap-96 pt-1 bg-stone-800 text-xs'>
                <div className='flex flex-row gap-1.5'>
                    <LuMapPin className='mt-1.5 text-gray-400' />
                    <p className='mt-1 text-gray-400'>FPT TEAM Supermarket: TP Biên Hòa - Đồng Nai</p>
                </div>
                <div className='flex flex-row gap-4 text-gray-400'>
                    <div className='flex flex-row gap-1 mt-1'>
                        <ul><li><a href="">VIE</a></li></ul>
                        <HiChevronDown className='w-[12px] h-[12px] mt-0.5' />
                    </div>
                    <div className='w-[65px] h-[18px] flex flex-row gap-1 mt-1 border-r-2 border-solid border-gray-300'>
                        <ul><li><a href="">VND</a></li></ul>
                        <HiChevronDown className='w-[12px] h-[12px] mt-0.5' />
                    </div>
                    <div className='flex flex-row gap-2 mt-1 text-gray-400'>
                        <ul><li><a href="">Đăng nhập</a></li></ul>
                        <p>/</p>
                        <ul><li><a href="">Đăng ký</a></li></ul>
                    </div>
                </div>
            </div>

            {/*Logo bar*/}
            <div className='w-screen h-[70px] flex justify-center items-center gap-44 border-b border-solid border-gray-300'>
                <img className='w-[150px] h-[110px] mt-3' src={Logo} />
                <div className='flex flex-row'>
                    <input
                        className='relative w-[350px] h-[30px] pl-10 border border-solid border-gray-300 rounded-l-md'
                        type="search"
                        placeholder='Nhập từ khóa'
                    />
                    <IoIosSearch className='absolute w-[20px] h-[20px] mt-1.5 ml-3 text-gray-700' />
                    <button className='w-[95px] h-[30px] text-white font-semibold rounded-r-md bg-green-500'>
                        Tìm kiếm
                    </button>
                </div>
                <div className='flex flex-row gap-3'>
                    <button className='w-[43px] border-r-2 border-solid border-gray-300'>
                        <FaRegHeart className='w-[23px] h-[23px]' />
                    </button>
                    <PiBasket className='w-[30px] h-[30px] mt-1' />
                    <div className='flex flex-col text-sm'>
                        <p>Giỏ hàng</p>
                        <p className='font-semibold'>0 vnđ</p>
                    </div>
                </div>
            </div>

            {/*Menu bar */}
            <div className='flex flex-row justify-center w-screen h-[35px] gap-96 pt-1 border-b border-solid border-gray-300'>
                <div className='flex flex-row justify-center items-center gap-9 text-sm'>
                    <div className='flex flex-row gap-1'>
                        <ul><li><a href="">Trang chủ</a></li></ul>
                        <HiChevronDown className='mt-1.5 w-[12px] h-[12px]'/>
                    </div>
                    <div className='flex flex-row gap-1'>
                        <ul><li><a href="">Cửa hàng</a></li></ul>
                        <HiChevronDown className='mt-1.5 w-[12px] h-[12px]'/>
                    </div>
                    <div className='flex flex-row gap-1'>
                        <ul><li><a href="">Pages</a></li></ul>
                        <HiChevronDown className='mt-1.5 w-[12px] h-[12px]'/>
                    </div>
                    <div className='flex flex-row gap-1'>
                        <ul><li><a href="">Tin tức</a></li></ul>
                        <HiChevronDown className='mt-1.5 w-[12px] h-[12px]'/>
                    </div>
                    <ul><li><a href="">Giới thiệu</a></li></ul>
                    <ul><li><a href="">Liên hệ hotline</a></li></ul>
                </div>
                <div className='flex flex-row justify-center items-start gap-2'>
                    <FiPhoneCall className='mt-1.5'/>
                    <p className='text-sm mt-0.5 font-semibold'>(219) 555-0114</p>
                </div>
            </div>

            {/*Banner */}
            <div>
                <div>
                    <IoHomeOutline className='relative'/>
                </div>
            </div>

            {/*Giao diện*/}
            <div className='w-[600px] border border-solid border-gray-300 shadow-custom bg-white pt-5 mt-10 mb-5'>
                <h1 className='text-center font-bold text-2xl mt-3'>Tạo tài khoản</h1>
                <form onSubmit={handleSubmit} className='flex flex-col items-center mb-5'>
                    <div className=''>
                        <input
                            className='w-[350px] h-[35px] pl-4 mt-3 border border-solid border-gray-300 rounded-md hover:border-green-700 '
                            type="text"
                            id="e-mail"
                            name="email"
                            placeholder='Nhập email'
                            value={formValue.email}
                            onChange={handleChange}
                        />
                        {formError.email && (
                            <div className='text-red-500 text-xs ml-1 mt-1'>{formError.email}</div>
                        )}
                    </div>
                    <div>
                        <div className='relative flex items-center gap-2'>
                            <input
                                className='w-[350px] h-[35px] pl-4 mt-3 border border-solid border-gray-300 rounded-md hover:border-green-700 '
                                type="password"
                                name="password"
                                id="password"
                                placeholder='Mật khẩu'
                                value={formValue.password}
                                onChange={handleChange}
                            />
                            <FaEye className='w-[15px] h-[15px] absolute ml-80 mt-3' />
                        </div>
                        {formError.password && (
                            <div className='text-red-500 text-xs ml-1 mt-1'>{formError.password}</div>
                        )}
                    </div>
                    <div>
                        <div className='relative flex items-center gap-2'>
                            <input
                                className='w-[350px] h-[35px] pl-4 mt-3 border border-solid border-gray-300 rounded-md hover:border-green-700 '
                                type="password"
                                name="confirmPassword"
                                id="confirm-Password"
                                placeholder='Xác nhận mật khẩu'
                                value={formValue.confirmPassword}
                                onChange={handleChange}
                            />
                            <FaEye className='w-[15px] h-[15px] absolute ml-80 mt-3' />
                        </div>
                        {formError.confirmPassword && (
                            <div className='text-red-500 text-xs ml-1 mt-1'>{formError.confirmPassword}</div>
                        )}
                    </div>
                    <input
                        className='mt-3 mr-[338px]'
                        type="checkbox"
                        name=""
                        id=""
                    />
                    <button type="submit" className='w-[350px] h-[30px] mt-3 font-semibold border border-solid border-gray-300 rounded-full bg-green-500 text-white hover:bg-green-600 hover:duration-300'>
                        Đăng ký
                    </button>
                    <div className='flex flex-row gap-1 mt-2 text-sm text-gray-800'>
                        <p>Bạn đã có tài khoản?</p>
                        <p className='font-semibold hover:text-green-700 hover:font-bold cursor-pointer'>Đăng nhập</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateUser  