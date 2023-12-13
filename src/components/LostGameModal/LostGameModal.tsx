import React from "react";
import Modal from "../Modal";
import { useDispatch, useSelector } from "react-redux";
import { toggleNewGameModal } from "../../state/newGameModal/newGameModalSlice";
import { setTriesByOperation } from "../../state/tries/triesSlice";
import { toggleLostModal } from "../../state/lostGameModal/lostGameModalSlice";

const LostGameModal = () => {
  const visible = useSelector((state: any) => state.lostGameModal.value);
  const dispatch = useDispatch();

  if (!visible) return null;

  const handleNewGameClick = () => {
    dispatch(toggleNewGameModal());
    dispatch(toggleLostModal());
  };

  const handleTry = () => {
    dispatch(setTriesByOperation("decrement"));
    dispatch(toggleLostModal());
  };

  return (
    <Modal visible={visible} onClose={() => dispatch(toggleLostModal())} config={{ canClose: false }}>
      <button className="border border-black rounded" onClick={handleTry}>
        Another try
      </button>
      <button className="border border-black rounded" onClick={handleNewGameClick}>
        New Game
      </button>
    </Modal>
  );
};

export default LostGameModal;
