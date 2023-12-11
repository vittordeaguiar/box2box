import { useToast } from 'vue-toastify';

class ToastService {
    constructor() {
        this.toast = useToast();
    }

    success(message, options) {
        this.toast.success(message, options || 'Sucesso!');
    }

    error(message, options) {
        this.toast.error(message, options || 'Erro');
    }

    info(message, options) {
        this.toast.info(message, options || 'Alerta');
    }
}

export default new ToastService();
