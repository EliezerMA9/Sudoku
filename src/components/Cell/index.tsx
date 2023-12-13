import React from "react";
import { useDispatch } from "react-redux";
import { setSelected } from "../../state/selected/selectedSlice";

const Cell = ({ c_identifier, number }: { c_identifier: string; number?: string }) => {
  const dispatch = useDispatch();

  const handleClick = (e: React.MouseEvent) => {
    dispatch(setSelected(e.currentTarget.getAttribute("id")?.split("-")[2] + "-" + e.currentTarget.getAttribute("id")?.split("-")[3]));
  };

  return (
    <div
      className={`${c_identifier} cell aspect-square w-full flex justify-center items-center transition-bg border border-black bg-transparent hover:bg-slate-300 z-20 select-none`}
      id={`cell-container-${c_identifier}`}
      onClick={handleClick}
    >
      <div
        id={c_identifier}
        className={`${c_identifier} cell-button w-full h-full flex justify-center items-center text-black text-3xl editable`}
      ></div>
      <div className="grid grid-cols-3 text-center absolute w-10 h-10 content-center z-10">
        {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((k) => {
          return <span className="note-cell leading-none text-xs" key={`${"note-" + k}`} id={`note-${c_identifier}-${k}`}></span>;
        })}
      </div>
    </div>
  );
};

export default Cell;
