import { toast } from 'react-toastify';

const mensagemError = (mensagem) => toast.error(`${mensagem}`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: 'colored'
});

const mensagemSuccess = (mensagem) => toast.success(`${mensagem}`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: 'colored'
});

const toasts = { mensagemError, mensagemSuccess };

export default toasts;