import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apicalls from "./apicall";

const user = localStorage.getItem("user");

const register = createAsyncThunk("user", async () => {
  try {
    const res = await apicalls.register(user);
    return res;
  } catch (err) {
    console.log(err.response.data.message);
  }
});

const getall = createAsyncThunk("users", async () => {
  try {
    return await apicalls.getAllUsers();
  } catch (err) {
    console.log(err.response.data.message);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: { user: user ? user : null },
  reducers: {},
});
export default userSlice.reducer;
