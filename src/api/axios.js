import axios from 'axios';

const url = import.meta.env.VITE_BASE_URL
export const Api = axios.create({
	withCredentials: true,
	baseURL: url,
});