import { useState, useEffect } from 'react'
import { Button, Table } from 'react-daisyui'
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { FaRegTrashAlt } from "react-icons/fa";
import Modal from './Modal';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const TableUpdate = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false)
    const [products, setProdudcts] = useState([]);
    const [columns, setColumns] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:4000/products')
            .then(res => {
                setColumns(Object.keys(res.data[0]))
                setProdudcts(res.data)
            })
    }, [])
    function handleSubmit(id) {
        const conf = window.confirm("Do you want to delete");
        if (conf) {
            axios.delete('http://localhost:4000/products/' + id)
                .then(() => {
                    alert('record has delete');
                    navigate('/update#')
                })
        }
    }
   
    return (
        <div className=''>
            <div>
                <div className='flex justify-end gap-5'>
                    {/* <Button className='border border-solid border-green-500 text-green-500 bg-white hover:bg-green-500 hover:text-white'>
                    + Danh mục
                    </Button> */}
                    <Button
                        className='w-[115px] h-[30px] text-center pt-[2px] rounded-lg font-semibold border border-solid border-cyan-500 text-cyan-500 bg-white hover:bg-cyan-500 hover:text-white'
                        onClick={() => setShow(true)}>
                        + Sản phẩm
                    </Button>

                </div>
                <div className='bg-white mt-5 rounded-xl'>
                    <Table className="rounded-box">
                        <Table.Head className='border-b border-solid border-gray-300 text-sm'>
                            {columns.map((c, i) => (
                                <span className=' border-gray-300 text-center' key={i}>{c}</span>
                            ))}

                        </Table.Head>

                        {
                            products.map((u, i) => {
                                return (
                                    <>
                                        <Table.Body className=''>
                                            <Table.Row key={i}>
                                                <div className='ml-2'>{u.id}</div>
                                                <div className='ml-2 '>{u.name}</div>

                                                {/* <div className='w-[60px] ml-2' src={u.img} alt="" /> */}
                                                <div className='ml-2'>{u.img}</div>
                                                <div className='ml-2'>{u.price}</div>
                                                <div className='ml-2'>{u.status}</div>
                                                <div className='ml-2'>{u.category}</div>
                                                <div className='ml-2 w-[100px]'>{u.description}</div>
                                                {/* <Button color="ghost" className='text-sm ml-2'>
                                                    Chi tiết
                                                </Button> */}
                                                <div className='flex gap-5'>
                                                    <button onClick={()=>navigate(`/ModalEdit/${u.id}`)}
                                                        className='bg-cyan-500 w-[30px] h-[30px] pl-[8.5px] text-white rounded-lg hover:bg-cyan-600'><HiOutlinePencilSquare className='' />
                                        
                                                    </button>
                                                    <button onClick={() => handleSubmit(u.id)} className='bg-rose-500 w-[30px] h-[30px] pl-[8.5px] text-white rounded-lg hover:bg-rose-600'><FaRegTrashAlt /></button>
                                                </div>
                                            </Table.Row>
                                        </Table.Body>

                                    </>
                                )
                            })
                        }
                    </Table>
                </div>
            </div>
            <Modal isVisible={show} onClose={() => setShow(false)} />
           
        </div>
    )
}

export default TableUpdate
