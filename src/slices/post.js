import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "./api";
import { toast } from "react-toastify";

const initialState = {
  allBlogs: [],
  categoryBlog: [],
  allUserBlogs: [],
  status: "",
};

export const allBlogFetch = createAsyncThunk(
  "post/allBlogFetch",

  async () => {
    const response = await axios.get(`${url}/post`);
    console.log(response.data);
    return response.data;
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [allBlogFetch.pending]: (state, action) => {
      state.status = "Pending";
    },

    [allBlogFetch.fulfilled]: (state, action) => {
      state.allBlogs = action.payload;
    },
    [allBlogFetch.rejected]: (state, action) => {
      state.status = "Failed";
    },
  },
});

export default postSlice.reducer;
