import React from "react";

import { useSelector, useDispatch } from "react-redux";
import Modal from "../Modal";
import { toggleNewGameModal } from "../../state/newGameModal/newGameModalSlice";
import setNewGame from "../../utils/setNewGame";
import { setBoard } from "../../state/board/boardSlice";
import { setSolvedBoard } from "../../state/solvedBoard/solvedBoardSlice";
import { reset } from "../../state/tries/triesSlice";
import { setInitialBoard } from "../../state/initialBoard/initialBoardSlice";
import { setNotesBoard } from "../../state/notesBoard/notesBoardSlice";
import { resetTimer } from "state/timer/timerSlice";
import { setPauseTimer } from "state/pauseTimer/pauseTimerSlice";

const NewGameModal = () => {
  const visible = useSelector((state: any) => state.newGameModal.value);
  const dispatch = useDispatch();

  if (!visible) return null;

  const handleClick = (difficulty: string) => {
    setNewGame(
      difficulty,
      (value: any) => dispatch(setBoard(value)),
      (value: any) => dispatch(setSolvedBoard(value)),
      (value: any) => dispatch(setInitialBoard(value)),
      (value: any) => dispatch(setNotesBoard(value))
    );
    dispatch(setNotesBoard([]));
    dispatch(resetTimer());
    dispatch(reset());
    dispatch(setPauseTimer(false));
    dispatch(toggleNewGameModal());
  };

  return (
    <>
      <Modal
        visible={visible}
        onClose={() => {
          dispatch(toggleNewGameModal());
        }}
      >
        <button className="border border-black rounded" onClick={() => console.log("")}>
          getclue
        </button>
        <button id="easy" className="border border-black rounded" onClick={() => handleClick("easy")}>
          Easy
        </button>
        <button id="medium" className="border border-black rounded" onClick={() => handleClick("medium")}>
          Medium
        </button>
        <button id="hard" className="border border-black rounded" onClick={() => handleClick("hard")}>
          Hard
        </button>
      </Modal>
    </>
  );
};

export default NewGameModal;
