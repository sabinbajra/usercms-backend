import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddUser = () => {

let navigate = useNavigate();
const [user,setUsers] = useState({
    name: "",
    email: "",
    username: ""
});

const {name,email,username} = user;
const onInputChange = ((event) => {
    setUsers({...user,[event.target.name]: event.target.value});
})

const onSubmit =async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:8080/user",user);
    navigate('/');
}

  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">

            <h2 className="text-center m-4">Register User</h2>
            
            <form onSubmit={(event) => onSubmit(event)}>

                <div className="mb-3">
                    <label htmlFor='name' className='form-label'>Name: </label>
                    <input type='text' 
                    className='form-control' 
                    placeholder='Enter name ...' 
                    name='name' value={name} 
                    onChange={(event) => onInputChange(event)}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor='username' className='form-label'>User Name: </label>
                    <input type='text' 
                    className='form-control' 
                    placeholder='Enter username ...' 
                    name='username' value={username} 
                    onChange={(event) => onInputChange(event)}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor='email' className='form-label'>Email: </label>
                    <input type='text' 
                    className='form-control' 
                    placeholder='Enter email ...' 
                    name='email' value={email} 
                    onChange={(event) => onInputChange(event)}></input>
                </div>
                <button type='submit' className='btn btn-outline-primary m-2'>Submit</button> 
                <button type='submit' className='btn btn-danger m-2'>Cancel</button>
            
            </form>
            
            </div>
            
        </div>
    </div>
  )
}

export default AddUser