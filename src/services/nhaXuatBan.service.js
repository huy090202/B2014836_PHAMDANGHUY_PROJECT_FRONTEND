import axios from "axios";

const API_URL = "http://localhost:3001/api";

export const createNXB = async (data) => {
    const res = await axios.post(`${API_URL}/NhaXuatBan/create`, data);
    return res.data;
}

export const updateNXB = async (data) => {
    const res = await axios.put(`${API_URL}/NhaXuatBan/update/${data.MaNXB}`, data);
    return res.data;
}

export const getDetailNXB = async (data) => {
    const res = await axios.get(`${API_URL}/NhaXuatBan/detail/${data}`);
    return res.data;
}

export const getAllNXB = async (data) => {
    const res = await axios.get(`${API_URL}/NhaXuatBan/allNXB?MaNXB=${data}`);
    return res.data;
}