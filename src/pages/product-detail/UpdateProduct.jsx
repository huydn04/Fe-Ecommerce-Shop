import React from 'react'
import NavBarAdmin from '../../components/Products/NavBarAdmin'
import TableUpdate from '../../components/Products/TableUpdate'
import { Outlet } from 'react-router-dom'



const UpdateProduct = () => {

    return (
        <>
            <div className=''>
                <div className=''>
                    <div className="w-full px-5 py-3 h-full bg-gray-100 ">
                        <NavBarAdmin />
                        <TableUpdate />
                    </div>
                    <div className='ml-64 w-full'>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateProduct
