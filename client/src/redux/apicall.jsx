import axios from "axios";

// Register User
const register = async (userData) => {
  const res = await axios.post("http://localhost:4000/api/users", userData);

  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  console.log("res", res);
  return res.data;
};

const getAllUsers = async () => {
  const res = await fetch("/api/users");
  console.log("res...", res);
  return res.data;
};

const apicalls = { register, getAllUsers };

export default apicalls;
