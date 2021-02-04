import { createSlice } from "@reduxjs/toolkit";
import operations from "./authOperations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingUser: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [operations.register.pending](state) {
      state.isLoading = true;
    },
    [operations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [operations.register.rejected](state) {
      state.isLoading = false;
    },
    [operations.login.pending](state) {
      state.isLoading = true;
    },
    [operations.login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [operations.login.rejected](state) {
      state.isLoading = false;
    },
    [operations.logout.fulfilled](state, _) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [operations.fetchCurrentUser.pending](state) {
      state.isFetchingUser = true;
    },
    [operations.fetchCurrentUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
      state.isFetchingUser = false;
    },
    [operations.fetchCurrentUser.rejected](state) {
      state.isFetchingUser = false;
    },
  },
});

export default authSlice.reducer;
