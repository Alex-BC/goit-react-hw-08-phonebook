import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getContacts = createAsyncThunk(
  "contacts/get",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/contacts");

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/add",
  async (info, thunkAPI) => {
    const state = thunkAPI.getState();
    const items = state.contacts.items;

    if (items.find((item) => item.name === info.name)) {
      alert(`${info.name} is already in the list`);
      return thunkAPI.rejectWithValue();
    }

    try {
      const { data } = await axios.post("/contacts", info);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contact/delete",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      thunkAPI.rejectWithValue();
    }
  }
);
