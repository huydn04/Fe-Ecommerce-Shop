import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
const Updatea = () => {
    const { id } = useParams();
    const [data, setData] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:3000/users/' + id)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [id])
    function handleSubmit(event) {
        event.preventDefault()
        axios.put('http://localhost:3000/users/' + id, data)
            .then(() => {
                alert("data update sucessfully !");
                navigate('/Test')
            })
    }
    return (
        <div className="mt-[50px] flex w-[1000px] justify-center items-center">
            <div className="w-50  border border-solid bg-gray-400 p-5">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">ID:</label>
                        <input type="text" disabled name='name' value={data.id} className='form-control' />
                    </div>
                    <div>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input value={data.name} onChange={e => setData({ ...data, name: e.target.value })} type="text" name="name" className="form-control" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input value={data.email} onChange={e => setData({ ...data, email: e.target.value })} type="email" name="email" className="form-control" />
                        </div>
                    </div><br />
                    <button className="btn btn-info">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Updatea