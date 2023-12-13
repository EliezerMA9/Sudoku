import { createSlice } from "@reduxjs/toolkit";

interface LostGameModalState {
  value: boolean;
}

const initialState: LostGameModalState = {
  value: false,
};

const lostGameModalSlice = createSlice({
  name: "lostGameModal",
  initialState,
  reducers: {
    toggleLostModal: (state) => {
      state.value = !state.value;
    },
    setLostModal: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { toggleLostModal } = lostGameModalSlice.actions;
export default lostGameModalSlice.reducer;
