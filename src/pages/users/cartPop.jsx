
import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Menu, Table } from "react-daisyui";


const cartPop = () => {
    const [openPopup, setOpenPopup] = useState(false);

    const showIndex = () => {
      const index = document.getElementById('index');
      const change = index.className = "w-64 h-64 border border-solid border-red-400 fixed top-10"

      // console.log(change);
    }
    const hideIndex = () => {
      const index = document.getElementById('index');
      const change = index.className = "w-64 h-64 border border-solid border-red-400 fixed top-10 hidden"

      // console.log(change);
    }




  return (
    <div className="flex flex-row-reverse	 "> 
      <div className="w-14 h-14 mt-20 ml-"><button onClick={() => setOpenPopup(true)} className="w-14 h-14"><FaCartPlus className="w-14 h-14" /></button></div>

      {/* popup page */}
      {
        openPopup &&
               <div id="index" className="w-[460px] h-full grid grid-span-3 justify-items-stretch border border-solid border-red-400 fixed bg-white">

               <div className=" flex flex-col	pt-10  place-self-start">
                
                  <div className="h-8 flex ml-[30px]  text-3xl font-[500]  ">
                    <label>Giỏ Hàng</label> <p className="ml-2">(2)</p>
       
                    <button onClick={() => setOpenPopup(false)} className="ml-[200px] w-8 h-10 text-center pt-1 "><MdClose className="w-8 h-10" /> </button>
                  </div>

                <div className="">
                  <Table>
                      <Table.Head>
                        <span/>
                        <span/>
                        <span/>
                      </Table.Head>
                      <Table.Body>
                          <Table.Row>
                            <span>
                              <img className="w-28 h-28" src="src\assets\img\wishlist_img1.png" alt="" />
                            </span>
                            <span>
                              <div className="w-[120px] text-xl mr-[70px]">
                                <label className="ml-1">Ớt Chuông</label>
                                <div className="flex w-full justify-around">
                                <p>1kg</p> <p>x</p> <p>80.000</p>
                                </div>
                              </div>
                            </span>
                            <span><button><MdClose className="w-6 h-6 border border-solid rounded-full	" /></button></span>
                          </Table.Row>
                          <Table.Row>
                            <span>
                              <img className="w-28 h-28" src="src\assets\img\wishlist_img2.png" alt="" />
                            </span>
                            <span>
                              <div className="w-[120px] text-xl mr-[70px]">
                                <label className="ml-1">Xoài</label>
                                <div className="flex w-full justify-around">
                                <p>1kg</p> <p>x</p> <p>160.000</p>
                                </div>
                              </div>
                            </span>
                            <span><button><MdClose className="w-6 h-6 border border-solid rounded-full	" /></button></span>
                          </Table.Row>
                          
                      </Table.Body>
                      
                  </Table>
                </div>

                </div>
       
                
                <div className="w-full h-36 self-end text-xl	mb-10">
                  <div className="flex justify-between ">
                    <div className="flex ml-8"><p>2</p><label className="ml-2">Sản Phẩm</label></div>

                      <div className="flex"> <label className="mr-2">240.000</label><p className="mr-4">VND</p></div>
                      
                  </div>
                  <div className="flex flex-col mt-4 justify-evenly items-center ">
                    <a className="w-5/6 h-10 rounded-3xl	text-white text-center bg-[#00B207] flex justify-center items-center mb-2" href="">Thanh Toán</a>
                    <a className="w-5/6 h-10 rounded-3xl	text-[#00B207] text-center bg-[#CFEED0] flex justify-center items-center" href="">Kiểm tra giỏ hàng</a>
                  </div>
                </div>

             </div>
      }


    </div>
  )
}

export default cartPop;
