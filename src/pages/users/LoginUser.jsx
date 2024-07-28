import React, { useState } from 'react'
import {Link} from 'react-router-dom'

import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";


const LoginUser = () => {

    //Form Value
    const initFormValue = {
        email: "",
        password: "",
    };
    const [formValue, setFormValue] = useState(initFormValue);


    const handleChange = (event) => {
        const { value, name } = event.target;
        setFormValue({
            ...formValue,
            [name]: value,
        })
    };

    //Validate dữ liệu
    const isEmtyValue = (value) => {
        return !value || value.trim().length < 1;
    }; //Ko có giá trị => Báo lỗi

    //Email không hợp lệ
    const isEmailValid = (email) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    }

    const [formError, setFormError] = useState({});

    const validateForm = () => {
        const error = {};

        //Email
        if (isEmtyValue(formValue.email)) {
            error["email"] = "Vui lòng nhập email";
        } else {
            if (!isEmailValid(formValue.email)) {
                error["email"] = "Địa chỉ email không hợp lệ"; 
            }
        }

        //Password
        if (isEmtyValue(formValue.password)) {
            error["password"] = "Vui lòng nhập mật khẩu";
        }


        setFormError(error);
        return Object.keys(error).length === 0;
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            console.log("form value", formValue);
        } else {
            console.log("form invalid");
        }
    }

    //Hide password
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
    }

    return (
        <div className='re-page flex justify-center items-center w-auto h-[100vh]'>
            <div className="w-[600px] rounded-xl border border-solid border-gray-300 shadow-custom bg-white pt-5 mt-5 mb-5 rounded-md">
                <h1 className='text-center font-bold text-2xl mt-3'>Đăng nhập</h1>

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
                                type={(open === false) ? "password" : "text"}
                                name="password"
                                id="password"
                                placeholder='Mật khẩu'
                                value={formValue.password}
                                onChange={handleChange}
                            />
                            <div className='absolute ml-80 mt-3 cursor-pointer'>
                                {
                                    (open === false) ?
                                        <AiFillEye onClick={toggle} /> :
                                        <AiFillEyeInvisible onClick={toggle} />
                                }
                            </div>
                        </div>
                        {formError.password && (
                            <div className='text-red-500 text-xs ml-1 mt-1'>{formError.password}</div>
                        )}
                    </div>
                    <div className='flex flex-row items-center gap-[148px] mt-2 text-gray-700 text-sm'>
                        <div className='flex items-center gap-1'>
                            <input
                                className='pt-2'
                                type="checkbox"
                                name=""
                                id=""
                            />
                            <p>Lưu mật khẩu</p>
                        </div>
                        <Link to="/reset-pass" className='hover:text-green-700' >Quên mật khẩu?</Link>
                    </div>
                    <button type="submit" className='w-[350px] h-[30px] mt-3 font-semibold border border-solid border-gray-300 rounded-full bg-green-500 text-white hover:bg-green-600 hover:duration-300'>
                        Đăng nhập
                    </button>
                    <div className='flex flex-row gap-1 mt-2 text-sm text-gray-800'>
                        <p>Bạn chưa có tài khoản?</p>
                        <Link to="/create-user" className='font-semibold hover:text-green-700 hover:font-bold cursor-pointer'>Đăng ký</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginUser 
