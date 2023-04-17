import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
const Home = () => {
    const id = useParams();

    const [users,setUsers] = useState([]);

    useEffect(() => {
      loadUsers();  
    },[]);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users");
        console.log(result.data);
        setUsers(result.data);
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/users/${id}`);
        loadUsers();
    }


  return (
    <div className='container'>
        <div className="py-4">
        <table className=" table table-bordered ">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">UserName</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map( (user,index) => {
                        return (
                            <tr key={(user.id)}>
                            <th scope="row">{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <button className='btn btn-primary mx-2'>VIEW</button>
                                <Link className='btn btn-outline-primary mx-2' to={`/edituser/${user.id}`}>EDIT</Link>
                                <button className='btn btn-danger mx-2' onClick={()=>deleteUser(user.id)}>DELETE</button>
                            </td>
                            </tr>
                        )

                    } )
                }
               
                
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default Home