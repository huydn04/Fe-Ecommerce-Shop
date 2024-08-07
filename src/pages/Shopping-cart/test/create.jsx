import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
function Create() {
    const [inputData, setinputData]= useState({name:'',email:''})
    const navigate = useNavigate();
    function handleSubmit(event){
        event.preventDefault()

        axios.post('http://localhost:3000/users',inputData)
        .then(()=>{
            alert("Data Added Sucessfully!");
            navigate('/Test')
        }).catch(err=>console.log(err));
    }
    return (
        <div className="mt-[50px] flex w-[1000px] justify-center items-center">
            <div className="w-50  border border-solid bg-gray-400 p-5">
              <form onSubmit={handleSubmit}>
              <div>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input onChange={e=>setinputData({...inputData,name: e.target.value})} type="text" name="name" className="form-control" />
                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input onChange={e=>setinputData({...inputData,email: e.target.value})} type="email" name="email" className="form-control" />
                    </div>
                </div><br />
                <button className="btn btn-info">Submit</button>
              </form>
            </div>
        </div>
    )
}

export default Create