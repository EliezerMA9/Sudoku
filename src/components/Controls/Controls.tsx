import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { toggleNote } from "../../state/note/noteSlice";
import getHint from "../../utils/getHint";
import { setBoard } from "../../state/board/boardSlice";
import { toggleLostModal } from "../../state/lostGameModal/lostGameModalSlice";
import Timer from "components/Timer/Timer";

const Controls = () => {
  const note = useSelector((state: RootState) => state.note.value);
  const currentBoard = useSelector((state: RootState) => state.board.value);
  const solvedBoard = useSelector((state: RootState) => state.solvedBoard.value);
  const tries = useSelector((state: RootState) => state.tries.value);
  const maxTries = useSelector((state: RootState) => state.config.maxTries);

  const theme = useSelector((state: RootState) => state.theme.value);

  const dispatch = useDispatch();

  const handleClick = () => {
    console.log(theme);
  };

  const handleHint = () => {
    getHint(currentBoard, solvedBoard, (value: any) => dispatch(setBoard(value)));
  };

  return (
    <div className="w-full max-w-[600px] h-10 flex justify-center items-center rounded my-2 bg-white">
      <p>
        {tries} / {maxTries}
      </p>
      <Timer></Timer>
      <button className="border border-black rounded " onClick={handleClick}>
        test
      </button>
      <button className="border border-black rounded " onClick={() => dispatch(toggleNote())}>
        {note ? "note on" : "note off"}
      </button>
      <button className="border border-black rounded " onClick={handleHint}>
        get hint
      </button>
    </div>
  );
};

export default Controls;
