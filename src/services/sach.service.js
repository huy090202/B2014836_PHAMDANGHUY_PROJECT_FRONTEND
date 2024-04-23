import axios from "axios";

const API_URL = "http://localhost:3001/api";

export const createSach = async (data) => {
    const res = await axios.post(`${API_URL}/Sach/add`, data);
    return res.data;
}

export const getAllSach = async (data) => {
    const res = await axios.get(`${API_URL}/Sach/all?MaSach=${data}`);
    return res.data;
}

export const searchSach = async (data) => {
    const res = await axios.get(`${API_URL}/Sach/all?MaSach=${data}`);
    return res.data;
}

export const updateSach = async (data) => {
    const res = await axios.put(`${API_URL}/Sach/update/${data.MaSach}`, data);
    return res.data;
}

export const getDetailSach = async (data) => {
    const res = await axios.get(`${API_URL}/Sach/detail/${data}`);
    return res.data;
}