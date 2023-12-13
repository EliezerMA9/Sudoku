import { createSlice } from "@reduxjs/toolkit";

interface TimerState {
  seconds: number;
  minutes: number;
  hours: number;
}

const initialState: TimerState = {
  seconds: 0,
  minutes: 0,
  hours: 0,
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    incrementTimer: (state) => {
      state.seconds += 1;

      if (state.seconds === 60) {
        state.seconds = 0;
        state.minutes += 1;
        if (state.minutes === 60) {
          state.minutes = 0;
          state.hours += 1;
        }
      }
    },
    resetTimer: (state) => {
      state.seconds = 0;
      state.minutes = 0;
      state.hours = 0;
    },
    setTimer: (state, action) => {
      state.seconds = action.payload.seconds;
      state.minutes = action.payload.minutes;
      state.hours = action.payload.hours;
    },
  },
});

export const { incrementTimer, resetTimer, setTimer } = timerSlice.actions;
export default timerSlice.reducer;
