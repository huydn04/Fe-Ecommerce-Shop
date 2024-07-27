import React from 'react'
import { useState } from 'react'
import { DesList } from './DesList'

const Description = () => { 
    
    const [Tab, setTab] = useState(0);

    const handleClick = (index) => {
        setTab(index);
    }

    return (
        <div className="flex flex-col items-center w-screen">
            <div className=' flex flex-col justify-center mb-10'>
                {/* Tittle*/}
                <div className='flex flex-row justify-center w-screen h-12 gap-10 mt-10 border-b border-solid border-gray-300'>
                    {
                        DesList.map((item, index) => {
                            return(
                                <div key={index} >
                                    <div
                                    onClick={() => handleClick(index)}>
                                    <p className={`w-[220px] h-[37px] text-center font-semibold text-gray-500 mt-3 hover:border-b-2 border-solid border-green-700 hover:text-black duration-100 cursor-pointer ${ Tab === index? 'border-b-2' : '1'} `}>{item.title}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {/* Content*/}
                <div className='ml-[250px] mr-[250px] w-auto text-center flex-auto justify-center items-center mt-5 text-gray-700'>
                    <p className=''>{DesList[Tab].content}</p>
                </div>
                <div className=''>
                    { DesList.content }
                </div>
            </div>
        </div>
    )
}

export default Description
