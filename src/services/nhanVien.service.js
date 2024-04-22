import axios from "axios";

const API_URL = "http://localhost:3001/api";

export const register = async (data) => {
    const res = await axios.post(`${API_URL}/NhanVien/signUp`, data);
    return res.data;
}

export const logIn = async (data) => {
    const res = await axios.post(`${API_URL}/NhanVien/signIn`, data);
    return res.data;
}