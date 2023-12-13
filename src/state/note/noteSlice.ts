import { createSlice } from "@reduxjs/toolkit";

interface NoteState {
  value: boolean;
}

const initialState: NoteState = {
  value: false,
};

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    toggleNote: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleNote } = noteSlice.actions;
export default noteSlice.reducer;
