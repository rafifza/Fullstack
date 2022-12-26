import "./App.css"
import UserList from "./compontents/UserList.js";
import AddUser from "./compontents/AddUser.js"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import EditUser from "./compontents/EditUser.js";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserList/>}/>
      <Route path="/add" element={<AddUser/>}/>
      <Route path="edit/:id" element={<EditUser/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
