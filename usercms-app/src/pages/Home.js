import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Home = () => {

    const [users,setUsers] = useState([]);

    useEffect(() => {
      loadUsers();  
    },[]);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users");
        console.log(result.data);
        setUsers(result.data);
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
                            <td>TO DO something</td>
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