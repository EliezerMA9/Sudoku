import { createSlice } from "@reduxjs/toolkit";

interface TriesState {
  value: number;
}

const initialState: TriesState = {
  value: 0,
};

const triesSlice = createSlice({
  name: "tries",
  initialState,
  reducers: {
    increment: (state) => {
      if (state.value !== 3) {
        state.value = state.value + 1;
      }
    },
    decrement: (state) => {
      if (state.value !== 0) {
        state.value = state.value - 1;
      }
    },
    reset: (state) => {
      state.value = 0;
    },
    setTries: (state, action) => {
      state.value = action.payload;
    },
    setTriesByOperation: (state, action) => {
      if (action.payload === "increment") {
        state.value = state.value + 1;
      } else if (action.payload === "decrement") {
        if (state.value !== 0) {
          state.value = state.value - 1;
        }
      }
    },
  },
});

export const { increment, decrement, reset, setTries, setTriesByOperation } = triesSlice.actions;
export default triesSlice.reducer;
