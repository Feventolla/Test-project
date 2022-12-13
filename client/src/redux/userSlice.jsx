import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useLocation } from "react-router-dom";
import apicalls from "./apicall";

const user = localStorage.getItem("user");
// console.log("user", user);
export const register = createAsyncThunk("user", async (userData) => {
  try {
    return await axios.post("http://localhost:4000/api/users", userData);
  } catch (err) {
    console.log(err.response.data.message);
  }
});

export const getall = createAsyncThunk("user/getall", async () => {
  try {
    return await axios
      .get("http://localhost:4000/api/users")
      .then((res) => res.data);
    console.log("data", data);
  } catch (err) {
    console.log(err.response.data.message);
  }
});

export const updateuser = createAsyncThunk("user/update", async (userData) => {
  const id = localStorage.getItem("id");
  // console.log("iddd", id);
  try {
    return await axios.put(`http://localhost:4000/api/users/${id}`, userData);
  } catch (err) {
    console.log(err.response.data.message);
  }
});

export const deleteuser = createAsyncThunk("user/delete", async (id) => {
  // const id = localStorage.getItem("id");
  console.log("iddd", id);
  try {
    return await axios.delete(`http://localhost:4000/api/users/${id}`);
  } catch (err) {
    console.log(err.response.data.message);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    user: [],
  },
  extraReducers: {
    [getall.pending]: (state) => {
      state.isLoading = true;
    },
    [getall.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      // console.log("actionn", action);
    },
    [getall.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [register.pending]: (state) => {
      state.isLoading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    [register.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
      state.user = null;
    },
    [updateuser.pending]: (state) => {
      state.isLoading = true;
    },
    [updateuser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      console.log("update action", action);
    },
    [updateuser.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
      state.user = null;
    },
    [deleteuser.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteuser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = state.user.filter((user) => user.id !== action.payload.id);
      console.log("delete action", action);
    },
    [deleteuser.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
      state.user = null;
    },
  },
});
export default userSlice.reducer;
