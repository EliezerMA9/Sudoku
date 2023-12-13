import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Modal";
import { RootState } from "../../state/store";
import { setMaxTries } from "../../state/config/configSlice";
import NewGameModal from "../NewGameModal";
import { toggleNewGameModal } from "../../state/newGameModal/newGameModalSlice";
import { setTheme } from "state/theme/themeSlice";

const NavBar = () => {
  const maxTries = useSelector((state: RootState) => state.config.maxTries);
  const dispatch = useDispatch();

  const [visibleCFModal, setVisibleCFModal] = useState(false);

  const handleClickConfig = (e: React.MouseEvent) => {
    setVisibleCFModal(true);
  };

  const handleClickNewGame = () => {
    dispatch(toggleNewGameModal());
  };

  const handleChangeMaxTries = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setMaxTries(Number(e.currentTarget.value)));
  };

  return (
    <div className="bg-[#282828] w-full h-full">
      <NewGameModal />
      <div className="controls text-white">
        <button onClick={handleClickNewGame}>New Game</button>
        <button onClick={handleClickConfig}>config</button>
        <button onClick={() => console.log("learn")}>learn</button>
      </div>
      <Modal onClose={() => setVisibleCFModal(false)} visible={visibleCFModal}>
        <input type="number" name="maxTries" id="maxTries" value={maxTries} onChange={handleChangeMaxTries} />
        <button onClick={() => dispatch(setTheme())}>dark/light</button>
      </Modal>
    </div>
  );
};

export default NavBar;
