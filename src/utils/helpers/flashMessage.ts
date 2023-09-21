import { toast } from "react-toastify";
import { Dictionary } from "../../types";

const toastSettings = {
  position: toast.POSITION.TOP_RIGHT,
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: false,
  closeButton: false,
};

const flashMessage = (details: Dictionary) => {
  const { type, message } = details;
  if (type === "success") {
    toast.success(message, toastSettings);
  } else if (type === "info") {
    toast.info(message, toastSettings);
  } else if (type === "error") {
    toast.error(message, toastSettings);
  } else {
    toast.warn(message, toastSettings);
  }
};

export default flashMessage;