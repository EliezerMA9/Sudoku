import { useEffect, useState } from "react";
import "./App.css";
import BigGrid from "./components/BigGrid";
import NavBar from "./components/NavBar";
import SelectNumber from "./components/SelectNumber";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./state/store";
import renderGrid from "./utils/renderGrid";
import "react-toastify/dist/ReactToastify.css";
import Modal from "./components/Modal";
import { setSelected } from "./state/selected/selectedSlice";
import { setTries, setTriesByOperation } from "./state/tries/triesSlice";
import handleFocusChange from "./utils/handleFocusChange";
import handleKeyboard from "./utils/handleKeyboard";
import { setBoard } from "./state/board/boardSlice";
import isBoardComplete from "./utils/isBoardComplete";
import NewGameModal from "./components/NewGameModal";
import LostGameModal from "./components/LostGameModal/LostGameModal";
import { toggleLostModal } from "./state/lostGameModal/lostGameModalSlice";
import { setSolvedBoard } from "./state/solvedBoard/solvedBoardSlice";
import { saveToStorage, saveTimer } from "./utils/saveToStorage";
import { setMaxTries } from "./state/config/configSlice";
import { toggleNote } from "./state/note/noteSlice";
import { setInitialBoard } from "./state/initialBoard/initialBoardSlice";
import { setNotesBoard } from "./state/notesBoard/notesBoardSlice";
import renderNotes from "./utils/renderNotes";
import setNewGame from "./utils/setNewGame";
import Controls from "./components/Controls/Controls";
import { incrementTimer, setTimer } from "state/timer/timerSlice";
import { setPauseTimer, togglePauseTimer } from "state/pauseTimer/pauseTimerSlice";
import themes from "./types/themes";

function App() {
  const board = useSelector((state: RootState) => state.board.value);
  const solvedBoard = useSelector((state: RootState) => state.solvedBoard.value);
  const selected = useSelector((state: RootState) => state.selected.value);
  const tries = useSelector((state: RootState) => state.tries.value);
  const maxTries = useSelector((state: RootState) => state.config.maxTries);
  const keyboardControls = useSelector((state: RootState) => state.keyboardControls.value);
  const note = useSelector((state: RootState) => state.note.value);
  const initialBoard = useSelector((state: RootState) => state.initialBoard.value);
  const notesBoard = useSelector((state: RootState) => state.notesBoard.value);
  const timer = useSelector((state: RootState) => state.timer);
  const pauseTimer = useSelector((state: RootState) => state.pauseTimer.value);
  const theme = useSelector((state: RootState) => state.theme.value);

  const { dark, light } = themes;

  const dispatch = useDispatch();

  const [wonModalVisible, setWonModalVisible] = useState(false);

  const handleKeyDown = (e: KeyboardEvent) => {
    handleKeyboard(
      selected,
      board,
      solvedBoard,
      notesBoard,
      e,
      tries,
      maxTries,
      note,
      (value: any) => dispatch(setSelected(value)),
      (value: any) => dispatch(setBoard(value)),
      (value: any) => dispatch(setTriesByOperation(value)),
      (value: any) => dispatch(toggleLostModal(value)),
      (value: any) => dispatch(setNotesBoard(value)),
      (value: any) => dispatch(toggleNote(value))
    );
  };

  useEffect(() => {
    //Load all data from localStorage when the page is loaded
    if (localStorage.getItem("board")) {
      dispatch(setBoard(JSON.parse(localStorage.getItem("board")!)));
    }
    if (localStorage.getItem("solvedBoard")) {
      dispatch(setSolvedBoard(JSON.parse(localStorage.getItem("solvedBoard")!)));
    }
    if (localStorage.getItem("tries")) {
      dispatch(setTries(JSON.parse(localStorage.getItem("tries")!)));
    }
    if (localStorage.getItem("maxTries")) {
      dispatch(setMaxTries(JSON.parse(localStorage.getItem("maxTries")!)));
    }
    if (localStorage.getItem("initialBoard")) {
      dispatch(setInitialBoard(JSON.parse(localStorage.getItem("initialBoard")!)));
    }
    if (localStorage.getItem("notesBoard")) {
      dispatch(setNotesBoard(JSON.parse(localStorage.getItem("notesBoard")!)));
    }
    if (localStorage.getItem("timer")) {
      dispatch(setTimer(JSON.parse(localStorage.getItem("timer")!)));
    }

    if (!localStorage.getItem("board")) {
      setNewGame(
        "hard",
        (value: any) => dispatch(setBoard(value)),
        (value: any) => dispatch(setSolvedBoard(value)),
        (value: any) => dispatch(setInitialBoard(value)),
        (value: any) => dispatch(setNotesBoard(value))
      );
    }
  }, []);

  useEffect(() => {
    if (board !== "") {
      renderGrid(board, initialBoard);
    }

    if (isBoardComplete(board)) {
      setWonModalVisible(true);
      dispatch(setPauseTimer(true));
    }
  }, [board]);

  useEffect(() => {
    if (notesBoard.length === 0) {
      renderNotes("", "", notesBoard, { clean: true });
    } else {
      renderNotes("", "", notesBoard, { clean: false });
    }
  }, [notesBoard]);

  useEffect(() => {
    handleFocusChange(selected);

    if (tries >= maxTries) {
      dispatch(toggleLostModal());
    }

    if (keyboardControls) {
      window.addEventListener("keydown", handleKeyDown);
    }

    const handleBeforeUnload = () => {
      saveToStorage(board, solvedBoard, tries, maxTries, initialBoard, notesBoard);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selected, tries, note, keyboardControls, notesBoard, board, initialBoard]);

  useEffect(() => {
    const interval = setTimeout(() => {
      if (!pauseTimer) {
        dispatch(incrementTimer());
        saveTimer(timer);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer.seconds]);

  return (
    <>
      <NewGameModal></NewGameModal>
      <LostGameModal></LostGameModal>
      <Modal onClose={() => setWonModalVisible(false)} visible={wonModalVisible}>
        <p>you won</p>
      </Modal>
      <div className={`root-container ${theme === "dark" ? dark : light}`}>
        <NavBar></NavBar>
        <div className={`h-full flex flex-col items-center`}>
          <Controls></Controls>
          <BigGrid></BigGrid>
          <SelectNumber setLoseModalVisible={() => dispatch(toggleLostModal())}></SelectNumber>
        </div>
      </div>
    </>
  );
}

export default App;
