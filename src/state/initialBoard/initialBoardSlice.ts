import { createSlice } from "@reduxjs/toolkit";

interface InitialBoardState {
  value: any;
}

const initialState: InitialBoardState = {
  value: "",
};

export const initialBoardSlice = createSlice({
  name: "initialBoard",
  initialState,
  reducers: {
    setInitialBoard: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setInitialBoard } = initialBoardSlice.actions;
export default initialBoardSlice.reducer;
