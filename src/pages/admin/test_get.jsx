import useProduct from '../../hooks/HookRouter/useProduct';
import { useNavigate } from 'react-router-dom';
const Testget = () => {
  const [products, isLoading] = useProduct();
const navigate = useNavigate()
  if (isLoading) return <p>Loading...</p>;
console.log(products)
  return (
    <div>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />
       <div className="col-sm-2">
                <a className="btn btn-add btn-sm bg-green-400 hover:bg-green-600" href="/Addproduct" title="Thêm">
                    <i className="fa-solid fa-plus"></i>  Tạo mới người dùng</a>
            </div>
      <table className="table w-[1200px] mt-[20px] border-collapse border-solid border border-gray-300">
        <thead className='w-[1200px]'>
          <tr className='bg-gray-500 border border-solid'>
            <th className='border-solid border border-gray-300 text-center'>id</th>
            <th className='border-solid border border-gray-300 text-center'>name</th>
            <th className='border-solid border border-gray-300 text-center'>price</th>
            <th className='border-solid border border-gray-300 text-center'>price_sale</th>
            <th className='border-solid border border-gray-300 text-center'>description</th>
            <th className='border-solid border border-gray-300 text-center'>rating</th>
            <th className='border-solid border border-gray-300 text-center'>favourite</th>
            <th className='border-solid border border-gray-300 text-center'>createdAt</th>
            <th className='border-solid border border-gray-300 text-center text-white' width="100">Tính năng</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr className='border-collapse' key={product._id}>
              <td className='border-solid border border-gray-300 text-center'>{product._id}</td>
              <td className='border-solid border border-gray-300 text-center'>{product.name}</td>
              <td className='border-solid border border-gray-300 text-center'>{product.price}</td>
              <td className='border-solid border border-gray-300 text-center'>{product.price_sale}</td>
              <td className='border-solid border border-gray-300 text-center'>{product.description}</td>
              <td className='border-solid border border-gray-300 text-center'>{product.rating}</td>
              <td className='border-solid border border-gray-300 text-center'>{product.favourite}</td>
              <td className='border-solid border border-gray-300 text-center'>{product.createdAt}</td>
              <td className="table-td-center border-solid border border-gray-300 ">
                <div className='flex'>
                  <button  className=" group btn btn-primary btn-sm bg-[#dc3545] hover:bg-[#efa2a9]" type="button" title="Xóa"
                  > <i className="fa-regular fa-trash-can"></i>
                  </button>
                  <button onClick={() => navigate(`/edit/${product._id}`)} className=" btn btn-primary btn-sm ml-2 bg-[#ffc107] hover:bg-[#fd7e14]" type="button"
                    ><i className="fas fa-edit"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Testget;
