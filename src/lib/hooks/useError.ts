import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const useError = (title: string) => {
  toast.error(title, {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light"
  });
};
