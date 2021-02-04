import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk(
  "user/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      alert("Please use other credentials");
      return thunkAPI.rejectWithValue();
    }
  }
);

const login = createAsyncThunk("user/login", async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post("/users/login", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue();
  }
});

const logout = createAsyncThunk("user/logout", async () => {
  try {
    await axios.post("/users/logout");
    token.unset();
  } catch (error) {
    console.log(error);
  }
});

const fetchCurrentUser = createAsyncThunk(
  "user/fetchCurrent",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const currentToken = state.auth.token;

    if (currentToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(currentToken);

    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const operations = {
  register,
  login,
  logout,
  fetchCurrentUser,
};

export default operations;
