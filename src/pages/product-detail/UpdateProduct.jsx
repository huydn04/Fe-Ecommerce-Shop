import React from 'react'

import SidebarAdminPages from '../../components/admin/sidebar/SidebarAdmin'
import NavBarAdmin from '../../components/Products/NavBarAdmin'
import TableUpdate from '../../components/Products/TableUpdate'



const UpdateProduct = () => {

    return (
        <>
            <div className='h-full'>
                <div className='flex justify-center h-full'>
                    <div>
                        <SidebarAdminPages />
                    </div>
                    <div className="w-full px-5 py-3 ml-64 h-full bg-gray-100 ">
                        <NavBarAdmin />
                        <TableUpdate />
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateProduct
