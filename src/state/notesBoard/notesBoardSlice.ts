import { createSlice } from "@reduxjs/toolkit";

interface NotesBoardState {
  value: number[][][];
}

const initialState: NotesBoardState = {
  value: [],
};

const notesBoardSlice = createSlice({
  name: "notesBoard",
  initialState,
  reducers: {
    setNotesBoard: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setNotesBoard } = notesBoardSlice.actions;
export default notesBoardSlice.reducer;
