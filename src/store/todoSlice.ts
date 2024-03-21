import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    location: {
      lat: 51.505,
      lng: -0.09,
    },
  },
};

export const sliceData = createSlice({
  name: "sliceData",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = sliceData.actions;
export default sliceData.reducer;
