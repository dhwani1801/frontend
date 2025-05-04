import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = (message: string, type: 'success' | 'error') => {
  if (type === 'success') {
    toast.success(message);
  } else {
    toast.error(message);
  }
};

export const ToastNotification = () => (
  <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
);
