import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "state/store";

const Timer = () => {
  const { seconds, minutes } = useSelector((state: RootState) => state.timer);

  const formatTimer = () => {
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div className="timer flex flex-row mx-2">
      <p>{formatTimer()}</p>
    </div>
  );
};

export default Timer;
