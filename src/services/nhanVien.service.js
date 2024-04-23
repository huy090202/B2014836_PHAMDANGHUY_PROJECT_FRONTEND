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

export const getDetail = async (data) => {
    const res = await axios.get(`${API_URL}/NhanVien/detailNV/${data}`);
    return res.data;
}

export const updateNV = async (data) => {
    const res = await axios.put(`${API_URL}/NhanVien/update/${data.MSNV}`, data);
    return res.data;
}

export const deleteByMaSo = async (data) => {
    const res = await axios.delete(`${API_URL}/NhanVien/delete/${data}`);
    return res.data;
}

export const getAllNV = async (data) => {
    const res = await axios.get(`${API_URL}/NhanVien/allNV?MSNV=${data}`);
    return res.data;
}