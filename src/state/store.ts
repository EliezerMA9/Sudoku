import { configureStore } from "@reduxjs/toolkit";
import selectedReducer from "./selected/selectedSlice";
import boardReducer from "./board/boardSlice";
import solvedBoardReducer from "./solvedBoard/solvedBoardSlice";
import themeReducer from "./theme/themeSlice";
import triesReducer from "./tries/triesSlice";
import configReducer from "./config/configSlice";
import newGameModalReducer from "./newGameModal/newGameModalSlice";
import lostGameModalReducer from "./lostGameModal/lostGameModalSlice";
import keyboardControlsReducer from "./keyboardControls/keyboardControlsSlice";
import noteReducer from "./note/noteSlice";
import initialBoardReducer from "./initialBoard/initialBoardSlice";
import notesBoardReducer from "./notesBoard/notesBoardSlice";
import timerReducer from "./timer/timerSlice";
import pauseTimerReducer from "./pauseTimer/pauseTimerSlice";

export const store = configureStore({
  reducer: {
    selected: selectedReducer,
    board: boardReducer,
    solvedBoard: solvedBoardReducer,
    theme: themeReducer,
    tries: triesReducer,
    config: configReducer,
    newGameModal: newGameModalReducer,
    lostGameModal: lostGameModalReducer,
    keyboardControls: keyboardControlsReducer,
    note: noteReducer,
    initialBoard: initialBoardReducer,
    notesBoard: notesBoardReducer,
    timer: timerReducer,
    pauseTimer: pauseTimerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
