import React, { useState } from 'react'

import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";


const HidePassword = () => {
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
    }

    return (
        <div>
            <div className='relative flex items-center gap-2'>
                <input
                    className='w-[350px] h-[35px] pl-4 mt-3 border border-solid border-gray-300 rounded-md hover:border-green-700 '
                    type={(open === false)? "password" : "text"}
                    id="password"
                    name="password"
                    placeholder='Mật khẩu'
                />
                <div className='absolute ml-80 mt-3 cursor-pointer'>
                    {
                        (open === false) ?
                            <AiFillEye onClick={toggle} /> :
                            <AiFillEyeInvisible onClick={toggle} />
                    }
                </div>
            </div>
        </div>
    )
}

export default HidePassword
