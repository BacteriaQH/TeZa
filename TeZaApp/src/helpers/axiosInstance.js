import axios from 'axios';
import SERVER_URL from './../constant/sever';
import AsyncStorage from '@react-native-async-storage/async-storage';


let headers = {};
const axiosInstance = axios.create({
    baseURL: SERVER_URL,
    headers,
});

// axiosInstance.interceptors.request.use(
//     async (config) => {
//         const token = await AsyncStorage.getItem('token');
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     },
// );



export default axiosInstance;