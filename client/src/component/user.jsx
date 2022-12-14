import { getall, register, deleteuser } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import plan3 from "../assets/plan1.svg";
import "./userList.css";
import { Heading, Button, Box } from "rebass";
import styled from "@emotion/styled";

const userList = () => {
  const Button = styled.button`
    padding: 12px;
    background-color: black;
    font-size: 24px;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    &:hover {
      color: #040d4c;
      background-color: white;
    }
  `;

  const Button1 = styled.button`
    padding: 17px;
    background-color: blue;
    font-size: 15px;
    border-radius: 6px;
    color: white;
    font-weight: bold;
    border: 1px solid white;
    margin-left: 10em;
    margin-top: 2em;
    &:hover {
      color: #040d4c;
      background-color: white;
      border: 2px solid blue;
    }
  `;

  const Button2 = styled.button`
    padding: 17px;
    background-color: #f50910;
    font-size: 15px;
    border-radius: 6px;
    color: white;
    font-weight: bold;
    border: 1px solid white;
    margin-left: 1em;
    margin-top: 2em;
    &:hover {
      color: #040d4c;
      background-color: white;
      border: 2px solid red;
    }
  `;
  useEffect(() => {
    dispatch(getall());
  }, [getall]);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="main-inside">
        <Heading fontSize={[5, 6, 7]} color="black">
          User List
        </Heading>
        <div style={{ marginRight: 500, color: "#9E9D9D" }}>
          A List of user that have been register in the system. A New user can
          be added and the existing users can be updated or deleted...
        </div>

        <Button
          style={{ marginLeft: 550 }}
          onClick={() => navigate("/register")}
        >
          Add user
        </Button>
        <div>
          {user.length > 0 ? (
            <div>
              {user.map((users, index) => (
                <div key={index}>
                  <Box
                    p={5}
                    fontSize={3}
                    width={[1, 1, 0.76]}
                    color="black"
                    bg="#EBECF3"
                    m={4}
                    sx={{
                      border: "1px solid black",
                      borderRadius: "20px",
                    }}
                  >
                    <img src={plan3} alt="image" width={120} height={120} />
                    <h3>
                      Name: {users.firstname} {users.lastname}
                      <div>
                        Gender: {users.gender}
                        <Button1
                          className="btn"
                          onClick={() =>
                            navigate("/updateuser/" + users._id, {
                              state: { id: users._id },
                            })
                          }
                        >
                          update
                        </Button1>{" "}
                        <Button2
                          className="btn"
                          text="delete"
                          onClick={() => dispatch(deleteuser(users._id))}
                        >
                          Delete
                        </Button2>{" "}
                      </div>
                    </h3>
                  </Box>
                </div>
              ))}
            </div>
          ) : (
            <h2>No User available</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default userList;
