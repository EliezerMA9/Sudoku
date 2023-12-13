import { createSlice } from "@reduxjs/toolkit";

interface KeyboardControlsState {
  value: boolean;
}

const initialState: KeyboardControlsState = {
  value: true,
};

export const keyboardControlsSlice = createSlice({
  name: "keyboardControls",
  initialState,
  reducers: {
    toggleKeyboardControls: (state) => {
      state.value = !state.value;
    },
    setKeyboardControls: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { toggleKeyboardControls, setKeyboardControls } = keyboardControlsSlice.actions;
export default keyboardControlsSlice.reducer;
