import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../App.css";

const EditUser = () => {
    const [name, setName] = useState("");
    const [nim, setNim] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [grade, setGrade] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        getUserById();
    },[]);

    const saveUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users', {
                name,
                nim,
                email,
                gender,
                grade
            });
            navigate("/");
        } catch (error){
            console.log(error);
        }
    };

    const getUserById = async () => {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        setName(response.data.name);
        setNim(response.data.nim);
        setEmail(response.data.email);
        setGender(response.data.gender);
        setGrade(response.data.grade);
    }

    return (
        <div className="grid place-items-center h-screen bg-gradient-to-r from-blue-500 to-red-500">
        <div className="w-80 grid place-items-center p-10 border border-black rounded-sm bg-white">
                <form onSubmit={saveUser}>
                    <label className="font-semibold">Name</label>
                    <div className="">
                        <input type="text" className="input border border-black rounded-sm" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"/>
                    </div>
            <div className="">
                    <label className="font-semibold">NIM</label>
                    <div className="">
                        <input type="text" className="input border border-black rounded-sm" value={nim} onChange={(e) => setNim(e.target.value)} placeholder="NIM"/>
                    </div>
            </div>
            <div className="">
                    <label className="font-semibold">Email</label>
                    <div className="">
                        <input type="text" className="input border border-black rounded-sm" value={email} onChange={(e) => setEmail(e.target.value)}placeholder="Email"/>
                    </div>
            </div>
            <div className="">
                    <div className="flex mt-2">
                    <label className="font-semibold">Gender</label>
                    <div className="mx-2">
                        <select id="gender" className="gender border border-black rounded-sm ml-2" value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="" className="hidden"></option>
                        <option value="M">M</option>
                        <option value="F">F</option>
                        </select>
                        </div>
                    </div>
            </div>
            <div className="flex mt-2"> 
                    <label className="font-semibold">Grade</label>
                    <div className="">
                    <select id="grade" className="grade border border-black rounded-sm ml-5" value={grade} onChange={(e) => setGrade(e.target.value)}>
                    <option value="" className="hidden"></option>
                    <option value="A">A</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B">B</option>
                    <option value="B-">B-</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                </select>
                    </div>
                    </div>
                    <button type="submit" className="bg-green-600 font-bold p-2 mx-12 mt-9 rounded-sm">Update</button>
                </form>
            </div>
        </div>
    )
}

export default EditUser;