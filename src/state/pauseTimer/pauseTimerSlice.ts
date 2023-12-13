import { createSlice } from "@reduxjs/toolkit";

interface PauseTimerState {
  value: boolean;
}

const initialState: PauseTimerState = {
  value: false,
};

const pauseTimerSlice = createSlice({
  name: "pauseTimer",
  initialState,
  reducers: {
    togglePauseTimer: (state) => {
      state.value = !state;
    },
    setPauseTimer: (state, action) => {
      if (action.payload) {
        state.value = true;
      } else {
        state.value = false;
      }
    },
  },
});

export const { togglePauseTimer, setPauseTimer } = pauseTimerSlice.actions;
export default pauseTimerSlice.reducer;
