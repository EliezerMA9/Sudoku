import { toast } from "react-toastify";

export const showToast = (message: string) => {
  toast(message, {
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: 400,
    hideProgressBar: true,
    type: toast.TYPE.ERROR,
  });
};
