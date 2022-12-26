import React, { useState, useEffect } from "react";
import axios from "axios";
import '../App.css'
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    console.log(response.data);
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="">
      <div className="w-full h-screen bg-gradient-to-r from-blue-500 to-red-500">
        <table className ="font-mono border-collapse table-auto items-center mx-auto">
          <thead>
            <tr>
              <th className ="bg-white border border-black ">No</th>
              <th className ="bg-white border border-black ">Name</th>
              <th className ="bg-white border border-black ">NIM</th>
              <th className ="bg-white border border-black ">Email</th>
              <th className ="bg-white border border-black px-2">Gender</th>
              <th className ="bg-white border border-black px-2">Grade</th>
              <th className ="bg-white border border-black ">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr className="bg-white	border border-black text-center px-2" key={user.id}>
                <td className="border border-black text-center px-2">{index + 1}</td>
                <td className="border border-black text-center px-2">{user.name}</td>
                <td className="border border-black text-center px-2">{user.nim}</td>
                <td className="border border-black text-center px-2">{user.email}</td>
                <td className="border border-black text-center px-2">{user.gender}</td>
                <td className="border border-black text-center px-2">{user.grade}</td>
                <td>
                  <Link to={`edit/${user.id}`} className="btn mx-3 bg-blue-500 p-1 rounded-sm">Update</Link>
                  <button onClick={()=> deleteUser(user.id)} className="btn mx-3 bg-rose-800 p-1 rounded-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className=""></div>
      <Link to={`add`} className="fixed bottom-10 right-10 p-1 bg-white border border-black rounded"><img src="../../assets/add.png"></img></Link>
    </div>
  );
};

export default UserList;
