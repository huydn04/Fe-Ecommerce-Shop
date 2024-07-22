import Sidebar from "../../components/users/SideBarUsers"
import { Table } from "react-daisyui";

const OrderHistory = () => {

    return (

        <div className="flex justify-center pt-10">


        {/* Sidebar */}
          <Sidebar/>
        {/* start OrderHistory */}
        
            
       
        <div className="ml-4 w-[816px] " >

                <div className=" w-full border-solid border border-gray-400 h-[900px] flex flex-col justify-between">
          
                <div className="">
            <div className="overflow-x-auto">
              <Table>
                <Table.Head className="text-lg">
                  <span>Lịch sử đặt hàng</span>
                  <span />
                  <span />
                  <span />       
                  <span />
                </Table.Head>
                <Table.Head className="bg-gray-200">
                  {/* <span /> */}
                  <span>Mã Đơn</span>
                  <span>Thời Gian</span>
                  <span>Tất Cả</span>
                  <span>Trạng Thái</span>
                  <span />
                </Table.Head>

                <Table.Body>
                  <Table.Row>
                    <span>#113</span>
                    <span>15/08/2024</span>
                    <span>
                      <div className="flex gap-1">
                        <p className="font-semibold">$100.000</p>
                        <p>(5 Sản Phẩm)</p>
                      </div>
                    </span>
                    <span>Xử lý</span>
                    <span className="text-primary font-semibold">
                      Xem chi tiết
                    </span>
                  </Table.Row>

                  <Table.Row>
                    <span>#113</span>
                    <span>15/08/2024</span>
                    <span>
                      <div className="flex gap-1">
                        <p className="font-semibold">$100.000</p>
                        <p>(5 Sản Phẩm)</p>
                      </div>
                    </span>
                    <span>Trên Đường Đi</span>
                    <span className="text-primary font-semibold">
                      Xem chi tiết
                    </span>
                  </Table.Row>

                  <Table.Row>
                    <span>#113</span>
                    <span>15/08/2024</span>
                    <span>
                      <div className="flex gap-1">
                        <p className="font-semibold">$100.000</p>
                        <p>(5 Sản Phẩm)</p>
                      </div>
                    </span>
                    <span>Hoàn thành</span>
                    <span className="text-primary font-semibold">
                      Xem chi tiết
                    </span>
                  </Table.Row>

                  <Table.Row>
                    <span>#113</span>
                    <span>15/08/2024</span>
                    <span>
                      <div className="flex gap-1">
                        <p className="font-semibold">$100.000</p>
                        <p>(5 Sản Phẩm)</p>
                      </div>
                    </span>
                    <span>Hoàn thành</span>
                    <span className="text-primary font-semibold">
                      Xem chi tiết
                    </span>
                  </Table.Row>

                  <Table.Row>
                    <span>#113</span>
                    <span>15/08/2024</span>
                    <span>
                      <div className="flex gap-1">
                        <p className="font-semibold">$100.000</p>
                        <p>(5 Sản Phẩm)</p>
                      </div>
                    </span>
                    <span>Hoàn thành</span>
                    <span className="text-primary font-semibold">
                      Xem chi tiết
                    </span>
                  </Table.Row>

                  <Table.Row>
                    <span>#113</span>
                    <span>15/08/2024</span>
                    <span>
                      <div className="flex gap-1">
                        <p className="font-semibold">$100.000</p>
                        <p>(5 Sản Phẩm)</p>
                      </div>
                    </span>
                    <span>Hoàn thành</span>
                    <span className="text-primary font-semibold">
                      Xem chi tiết
                    </span>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </div>
                

                {/* button change page */}
                <div className="w-full h-10 flex flex-row justify-center items-center mb-10" >
                    <a href="" className="w-10 h-10  rounded-full mr-2 bg-gray-200 flex justify-center items-center"><img src="src\assets\img\order_move1.png" alt="" /></a>
                    <a href="" className="w-10 h-10  text-white rounded-full bg-[#00B207] flex justify-center items-center">1</a>
                    <a href="" className="w-10 h-10  rounded-full flex justify-center items-center">2</a>
                    <a href="" className="w-10 h-10  rounded-full flex justify-center items-center">3</a>
                    <a href="" className="w-10 h-10  rounded-full ml-2 bg-gray-200 flex justify-center items-center"><img src="src\assets\img\order_move2.png" alt="" /></a>
                </div>  

            </div>  
        </div>
        
        </div>
    );
};

export default OrderHistory;