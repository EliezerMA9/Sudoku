import React from "react";
import { RootState } from "../../state/store";
import { useSelector, useDispatch } from "react-redux";
import setCellInGrid from "../../utils/setCellInGrid";
import { setBoard } from "../../state/board/boardSlice";
import { setTriesByOperation } from "../../state/tries/triesSlice";
import { setNotesBoard } from "../../state/notesBoard/notesBoardSlice";

const SelectNumber = ({ setLoseModalVisible }: { setLoseModalVisible: Function }) => {
  const selected = useSelector((state: RootState) => state.selected.value);
  const board = useSelector((state: RootState) => state.board.value);
  const solvedBoard = useSelector((state: RootState) => state.solvedBoard.value);
  const tries = useSelector((state: RootState) => state.tries.value);
  const maxTries = useSelector((state: RootState) => state.config.maxTries);
  const note = useSelector((state: RootState) => state.note.value);
  const notesBoard = useSelector((state: RootState) => state.notesBoard.value);

  const dispatch = useDispatch();

  const handleClick = (e: React.MouseEvent) => {
    setCellInGrid(
      e.currentTarget.innerHTML,
      selected,
      board,
      solvedBoard,
      notesBoard,
      tries,
      maxTries,
      note,
      (value: any) => dispatch(setBoard(value)),
      (value: any) => dispatch(setTriesByOperation(value)),
      setLoseModalVisible,
      (value: any) => dispatch(setNotesBoard(value))
    );
  };

  return (
    <div className="mt-1 flex h-fit w-full max-w-[600px]">
      {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((v) => {
        return (
          <button key={`select-${v}`} className="border-2 bg-white border-black flex-1 h-10 rounded" onClick={handleClick}>
            {v}
          </button>
        );
      })}
    </div>
  );
};

export default SelectNumber;
