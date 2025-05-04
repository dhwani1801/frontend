import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL as string || 'http://localhost:5000/api/auth'; 

export const register = (data: any, role: 'ADMIN' | 'CUSTOMER') =>
  axios.post(`${API_URL}/register/${role.toLowerCase()}`, data);

export const verifyEmail = (email: string, code: string) =>
  axios.post(`${API_URL}/verify-email`, { email, code });

export const loginAdmin = (email: string, password: string) =>
  axios.post(`${API_URL}/login/admin`, { email, password });
