import axios from 'axios';

// Configurar o Axios globalmente com withCredentials: true
axios.defaults.withCredentials = true;

// Agora todas as solicitações Axios enviarão cookies automaticamente
axios.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export default axios;
