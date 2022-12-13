import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import plan4 from "../assets/plan4.svg";
import "./register.css";
import { register } from "../redux/userSlice";
import { Button, Box } from "rebass";
import styled from "@emotion/styled";

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      firstname,
      lastname,
      age,
      gender,
      height,
    };
    dispatch(register(userData));
    navigate("/");
  };
  return (
    <div className="app">
      <div className="app-inside">
        <div className="auth-form-container">
          <img
            src={plan4}
            alt="top-image"
            style={{
              marginLeft: "4em",
              width: 100,
              height: 100,
            }}
          />
          <h2>Register</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="firstname">firstname : </label>
            <input
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              type="firstname"
              required={true}
              minLength={3}
              placeholder="ABC"
              id="firstname"
              name="firstname"
            ></input>
            <label htmlFor="lastname">lastname : </label>
            <input
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              type="lastname"
              required={true}
              placeholder="abc@gmail.com"
              id="lastname"
              name="lastname"
            ></input>

            <label htmlFor="age">age : </label>
            <input
              value={age}
              onChange={(e) => setAge(e.target.value)}
              // ref={passhash}
              type="age"
              required={true}
              placeholder="age"
              id="age"
              name="age"
            ></input>
            <label htmlFor="gender">gender : </label>
            <input
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              // ref={passhash}
              type="gender"
              required={true}
              placeholder="gender"
              id="gender"
              name="gender"
            ></input>
            <label htmlFor="height">height : </label>
            <input
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              // ref={passhash}
              type="height"
              required={true}
              placeholder="height"
              id="height"
              name="height"
            ></input>
            <Button type="submit">Create new user</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
