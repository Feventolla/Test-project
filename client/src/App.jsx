import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import UserList from "./component/user";
import { Route, Routes } from "react-router-dom";
import Register from "./component/Register";
import UpdateUser from "./component/updateUser";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<UserList />} />
        <Route path="/updateuser/:id" element={<UpdateUser />} />
      </Routes>
    </div>
  );
}

export default App;
