import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Test = () => {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(res => {
        setColumns(Object.keys(res.data[0]))
        setRecords(res.data)
      })
  }, [])

  return (
    <div className="w-auto ml-[150px]">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />
      <button className="btn bg-red-500" onClick={() => navigate('/create')} >ADD +</button>
      <table className="table w-[1200px] mt-[20px] border-collapse border-solid border border-gray-300"
        id="">
        <thead className='w-[1200px]'>
          <tr className='bg-gray-500 border border-solid'>
            {columns.map((c, i) => (
              <th className='border-solid border border-gray-300 text-center' key={i}>{c}</th>
            ))}
            <th className='border-solid border border-gray-300 text-center text-white' width="100">Tính năng</th>
          </tr>
        </thead>

        <tbody className="border border-solid">
          {
            records.map((d, i) => (
              <tr className='border-collapse' key={i}>
                <td className='border-solid border border-gray-300 text-center'>{d.id}</td>
                <td className='border-solid border border-gray-300 text-center'>{d.name}</td>
                <td className='border-solid border border-gray-300 text-center'>{d.email}</td>
                <td className="table-td-center border-solid border border-gray-300 flex">
                  <button onClick={() => handleSubmit(d.id)} className=" group btn btn-primary btn-sm bg-[#dc3545] hover:bg-[#efa2a9]" type="button" title="Xóa"
                  > <i className="fa-regular fa-trash-can"></i>
                  </button>
                  <button onClick={() => navigate(`/updatea/${d.id}`)} className=" btn btn-primary btn-sm ml-2 bg-[#ffc107] hover:bg-[#fd7e14]" type="button" title="Sửa" id="show-emp"
                    data-toggle="modal" data-target="#ModalUP"><i className="fas fa-edit"></i>
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
  function handleSubmit(id) {
    const conf = window.confirm("Do you want to delete");
    if (conf) {
      axios.delete('http://localhost:3000/users/' + id)
        .then(() => {
          alert('record has delete');
          navigate('/Test')
        })
    }
  }
};

export default Test;

