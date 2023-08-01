import { toast } from "react-toastify";
import "App.scss";

export function toastHandler(
  message: string,
  successful: boolean,
  toastId: string | number,
  autoClose?: number
) {
  toast(message, {
    position: "top-right",
    autoClose: autoClose ?? 5000,
    toastId: toastId,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progressClassName: successful ? "toast-success" : "toast-error",
    className: successful ? "toast-container-success" : "toast-container-error",
  });
}
