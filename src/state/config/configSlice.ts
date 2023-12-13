import { createSlice } from "@reduxjs/toolkit";

interface ConfigState {
  maxTries: number;
}

const initialState: ConfigState = {
  maxTries: 3,
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setMaxTries: (state, action) => {
      state.maxTries = action.payload;
    },
  },
});

export const { setMaxTries } = configSlice.actions;
export default configSlice.reducer;
