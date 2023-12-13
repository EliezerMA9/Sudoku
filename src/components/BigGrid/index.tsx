import React from "react";
import SmallGrid from "../SmallGrid";
import "./style.css";
import { RootState } from "state/store";
import { useSelector } from "react-redux";
import themes from "types/themes";

const BigGrid = () => {
  const theme = useSelector((state: RootState) => state.theme.value);
  const { dark, light } = themes;

  return (
    <div className={`w-full max-w-[600px] p-1 rounded ${theme !== "dark" ? "" : light}`}>
      <div className={` border-[3px] border-black rounded`}>
        {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((k) => {
          return <SmallGrid S_identifier={k} key={`${"BigGrid-" + k}`}></SmallGrid>;
        })}
      </div>
    </div>
  );
};

export default BigGrid;
