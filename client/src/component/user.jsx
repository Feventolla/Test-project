import { getall, register } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { useEffect } from "react";

const userList = () => {
  const user = useSelector((state) => state.user);
  const dispach = useDispatch();
  useEffect(() => {
    dispach(getall);
  }, []);
  return <div>user</div>;
};

export default userList;
