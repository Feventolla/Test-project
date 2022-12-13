import { getall, register, deleteuser } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const userList = () => {
  useEffect(() => {
    dispatch(getall());
  }, [getall]);
  const { user } = useSelector((state) => state.user);
  // console.log("users....", user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="app">
      <div className="app-inside">
        <h2>USER LIST</h2>
        <button onClick={() => navigate("/register")}>Add user</button>
        <div>
          {user.length > 0 ? (
            <div>
              {user.map((users, index) => (
                <div key={index}>
                  <h3>
                    {users.firstname}
                    <button
                      className="btn"
                      onClick={() =>
                        navigate("/updateuser/" + users._id, {
                          state: { id: users._id },
                        })
                      }
                    >
                      update
                    </button>{" "}
                    <button
                      className="btn"
                      text="delete"
                      onClick={() => dispatch(deleteuser(users._id))}
                    >
                      Delete
                    </button>{" "}
                  </h3>
                </div>
              ))}
            </div>
          ) : (
            <h2>no task available</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default userList;
