import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import plan1 from "../assets/plan1.svg";
import "./register.css";
import { register, updateuser } from "../redux/userSlice";
import styled from "@emotion/styled";

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

  const Button = styled.button`
    padding: 10px;
    background-color: #6a6aec;
    font-size: 20px;
    border-radius: 4px;
    color: white;
    border: 1px solid white;
    font-weight: bold;
    &:hover {
      color: #040d4c;
      background-color: white;
    }
  `;

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
    <div className="app">
      <div className="app-inside">
        <div className="auth-form-container">
          <img
            src={plan1}
            alt="top-image"
            style={{
              marginLeft: "2em",
              width: 100,
              height: 100,
            }}
          />
          <h2>UPDATE</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="firstname">Firstname : </label>
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
            <label htmlFor="lastname">Lastname : </label>
            <input
              value={users.lastname}
              onChange={(e) => setUser({ ...users, lastname: e.target.value })}
              type="lastname"
              required={true}
              placeholder="abc@gmail.com"
              id="lastname"
              name="lastname"
            ></input>

            <label htmlFor="age">Age : </label>
            <input
              value={users.age}
              onChange={(e) => setUser({ ...users, age: e.target.value })}
              // ref={passhash}
              type="number"
              required={true}
              placeholder="age"
              id="age"
              name="age"
            ></input>
            <label htmlFor="gender">Gender : </label>
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
            <label htmlFor="height">Height : </label>
            <input
              value={users.height}
              onChange={(e) => setUser({ ...users, height: e.target.value })}
              // ref={passhash}
              type="number"
              required={true}
              placeholder="height"
              id="height"
              name="height"
            ></input>
            <Button type="submit">Update user</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
