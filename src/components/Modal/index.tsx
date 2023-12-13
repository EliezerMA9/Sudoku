import { ReactNode, useEffect } from "react";
import "./style.css";
import { setKeyboardControls, toggleKeyboardControls } from "../../state/keyboardControls/keyboardControlsSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import modalConfig from "../../types/modalConfig";

const Modal = ({ visible, onClose, children, config }: { visible: boolean; onClose: () => void; config?: modalConfig; children: ReactNode }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (visible) {
      dispatch(setKeyboardControls(false));
    } else {
      dispatch(setKeyboardControls(true));
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="modal-overlay z-50" onClick={config?.canClose === true || config?.canClose === undefined ? onClose : undefined}>
      <div className="modal-content z-50" onClick={(e) => e.stopPropagation()}>
        <span className={`modal-close ${config?.canClose === false ? "hidden" : undefined}`} onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
