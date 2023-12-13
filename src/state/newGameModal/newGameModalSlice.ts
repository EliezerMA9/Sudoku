import { createSlice } from "@reduxjs/toolkit";

interface NewGameModalState {
  value: boolean;
}

const initialState: NewGameModalState = {
  value: false,
};

const newGameModalSlice = createSlice({
  name: "newGameModal",
  initialState,
  reducers: {
    toggleNewGameModal: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleNewGameModal } = newGameModalSlice.actions;
export default newGameModalSlice.reducer;
