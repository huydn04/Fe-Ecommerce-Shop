import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <div className='flex flex-row justify-center gap-1 border border-solid border-gray-300 w-[110px] h-[37px] rounded-full'>
                <button className='w-[28px] h-[28px] ml-[1px] mt-[3.5px] bg-gray-200 rounded-full hover:bg-gray-300'
                    onClick={() => setCount(count - 1)}
                    disabled={count === 0}>-</button>
                <p className='w-[35px] h-[25px] mt-[6px] pl-[1.5px] text-center'>{count}</p>
                <button className='w-[28px] h-[28px] mr-[1px] mt-[3.5px] bg-gray-200 rounded-full hover:bg-gray-300'
                    onClick={() => setCount(count + 1)}>+</button>
            </div>
        </div>
    )
}
