import { createSlice } from "@reduxjs/toolkit";

interface SolvedBoardState {
  value: any;
}

const initialState: SolvedBoardState = {
  value: "",
};

const solvedBoardSlice = createSlice({
  name: "solvedBoard",
  initialState,
  reducers: {
    setSolvedBoard: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSolvedBoard } = solvedBoardSlice.actions;
export default solvedBoardSlice.reducer;
