import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import logo from "../assets/react.svg";
import "./register.css";
import { register, updateuser } from "../redux/userSlice";

const Register = (props) => {
  const [users, setUser] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { user } = useSelector((state) => state.user);

  // console.log("first", location.state.id);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        let res = await fetch(`/api/users/${location.state.id}`);
        localStorage.setItem("id", location.state.id);
        const data = await res.json();
        console.log("id data", data);
        setUser(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const userData = users;
    dispatch(updateuser(users));
    navigate("/");
  };
  return (
    <div>
      <div className="app"></div>
      <div className="app-inside">
        <div className="auth-form-container">
          <img
            src={logo}
            alt="top-image"
            style={{
              marginLeft: "4em",
              width: 50,
              height: 50,
            }}
          />
          <h2>Register</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="firstname">firstname : </label>
            <input
              value={users.firstname}
              onChange={(e) => setUser({ ...users, firstname: e.target.value })}
              type="firstname"
              required={true}
              minLength={3}
              placeholder="ABC"
              id="firstname"
              name="firstname"
            ></input>
            <label htmlFor="lastname">lastname : </label>
            <input
              value={users.lastname}
              onChange={(e) => setUser({ ...users, lastname: e.target.value })}
              type="lastname"
              required={true}
              placeholder="abc@gmail.com"
              id="lastname"
              name="lastname"
            ></input>

            <label htmlFor="age">age : </label>
            <input
              value={users.age}
              onChange={(e) => setUser({ ...users, age: e.target.value })}
              // ref={passhash}
              type="age"
              required={true}
              placeholder="age"
              id="age"
              name="age"
            ></input>
            <label htmlFor="gender">gender : </label>
            <input
              value={users.gender}
              onChange={(e) => setUser({ ...users, gender: e.target.value })}
              // ref={passhash}
              type="gender"
              required={true}
              placeholder="gender"
              id="gender"
              name="gender"
            ></input>
            <label htmlFor="height">height : </label>
            <input
              value={users.height}
              onChange={(e) => setUser({ ...users, height: e.target.value })}
              // ref={passhash}
              type="height"
              required={true}
              placeholder="height"
              id="height"
              name="height"
            ></input>
            <button type="submit">update user</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;