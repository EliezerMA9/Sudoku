import React from "react";
import Cell from "../Cell";

const SmallGrid = ({ S_identifier }: { S_identifier: string }) => {
  return (
    <div className="small-grid flex border-black" id={"grid-" + S_identifier}>
      {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((k) => {
        return <Cell number={S_identifier} c_identifier={S_identifier + "-" + k} key={`${"cell-" + k}`}></Cell>;
      })}
    </div>
  );
};

export default SmallGrid;
