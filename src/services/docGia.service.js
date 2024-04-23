import axios from "axios";

const API_URL = "http://localhost:3001/api";

export const register = async (data) => {
    const res = await axios.post(`${API_URL}/DocGia/signUp`, data);
    return res.data;
}

export const logIn = async (data) => {
    const res = await axios.post(`${API_URL}/DocGia/signIn`, data);
    return res.data;
}

export const getDetail = async (data) => {
    const res = await axios.get(`${API_URL}/DocGia/detailDG/${data}`);
    return res.data;
}

export const updateDG = async (data) => {
    const res = await axios.put(`${API_URL}/DocGia/update/${data}`);
    return res.data;
}

export const getAllDG = async (data) => {
    const res = await axios.get(`${API_URL}/DocGia/allDG?MaDocGia=${data}`);
    return res.data;
}
