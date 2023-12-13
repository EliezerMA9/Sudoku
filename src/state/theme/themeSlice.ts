import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  value: string;
}

const initialState: ThemeState = {
  value: "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state) => {
      if (state.value === "light") {
        state.value = "dark";
      } else {
        state.value = "light";
      }
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
