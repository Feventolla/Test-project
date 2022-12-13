import axios from "axios";

// Register User
const register = async (userData) => {
  const res = await axios.post("/api/users", userData);

  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }

  return res.data;
};

const getAllUsers = async () => {
  const res = await axios.get("/api/users");
  return res.data;
};

const apicalls = { register, getAllUsers };

export default apicalls;
