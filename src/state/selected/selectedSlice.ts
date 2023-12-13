import { createSlice } from "@reduxjs/toolkit";

interface SelectedState {
  value: string;
}

const initialState: SelectedState = {
  value: "",
};

const selectedSlice = createSlice({
  name: "selected",
  initialState,
  reducers: {
    setSelected: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSelected } = selectedSlice.actions;
export default selectedSlice.reducer;
