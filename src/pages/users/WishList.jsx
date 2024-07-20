import Sidebar from "../../components/users/SideBarUsers"
import { Table } from "react-daisyui";


const OrderHistory = () => {


    return (

        <div className="flex justify-center pt-10">


            {/* Sidebar */}
            <Sidebar />

            {/* end-sidebar */}

        <div className=" w-[816px] ml-4">

            <div className="pt-2 mb-4 w-full">
                <div className=" w-full text-3xl font-bold text-center">Danh Sách Ước</div>
            </div>
            {/* show product */}


            <div className="border-solid border-gray-400 border w-full">

                <Table>
                    
                    <Table.Head className="text-lg">
                        <span>SẢN PHẨM</span>
                        <span className="">GIÁ TIỀN</span>
                        <span/>
                        <span>TRẠNG THÁI</span>       
                        <span/>
                
                    </Table.Head>

                    <Table.Body>
                        <Table.Row>
                    <span><img className="w-26" src="src\assets\img\wishlist_img1.png" alt="" /></span>
                     
                    <span>
                        <div className="flex border text-[17px] ">
                            <p>230.000 VND</p>
                            <p className="line-through ml-2	 ">534.000VND</p>
                        </div>
                    </span>
                    <span>
                      <div className="w-24 flex ">
                        <label className="w-24 leading-[24px] h-7 bg-[#AFFFB2] mt-6 mb-6 text-[17px] text-center">Còn Hàng</label>
                      </div>
                    </span>
                    <span>
                        <div className="w-32 text-center pt-2 w-48 h-10 rounded-3xl text-white text-[17px] mt-6 mb-6 bg-[#00B207] cursor-pointer">
                            <a href="" className="w-full"> Thêm vào giỏ hàng</a>
                        </div>

                    </span>
                    <span >
                      <div className="flex items-center justify-center w-7 h-7 text-center border border-solid border-black rounded-full "><button>X</button></div>
                    </span>
                    </Table.Row>
                        </Table.Body>
                    </Table>

            </div>


            {/* share */}
            <div className="flex items-center pl-5 border-solid border-gray-400 border-l border-r border-b w-full h-16">
                <label className="text-xl">Share: </label> 
                <img src="src\assets\img\twiter_icon.png" alt="" />
            </div>


        
                </div>
            </div>

        
    );
};

export default OrderHistory;