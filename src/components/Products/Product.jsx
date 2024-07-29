import React from 'react'
import { useState } from 'react'
import { CaiThiaC } from '../../assets/img-product'
import { ProductList } from './ProductList'
import ProductDetail from './ProductDetail'


const Product = () => {
    const [changeImg, setChangeImg] = useState(null);


    return (
        <div className='w-screen mt-10'>
            <div className='flex flex-row justify-center items-center basis-1/2 gap-12'>
                <div className='flex flex-row '>
                    {/*List IMG */}
                    <div className='basis-1/4 flex flex-col justify-center items-center mt-[10px] gap-5'>
                        {
                            ProductList.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div >
                                            <img src={item.img} alt="listIMG"
                                                className={`w-[90px] border border-solid border-gray-300 rounded-md cursor-pointer hover:border hover:border-green-700 duration-300 ${changeImg === item? 'border border-green-700':''}`}
                                                onClick={() => setChangeImg(item)} />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    {/*Main IMG */}
                    <div className='w-[600px] basis-3/4'>
                        {
                            changeImg ?
                                <img src={changeImg.img} alt="img" />
                                : <img src={CaiThiaC} alt="img" className='' />
                        }
                    </div>
                </div>
                <div>
                    <ProductDetail/>
                </div>
            </div>
        </div>
    )
}

export default Product
