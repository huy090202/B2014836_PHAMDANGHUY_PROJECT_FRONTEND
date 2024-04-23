import axios from "axios";

const API_URL = "http://localhost:3001/api";

export const createTDMS = async (data) => {
    const res = await axios.post(`${API_URL}/TheoDoiMuonSach/createTDMS`, data);
    return res.data;
}

export const updateTDMS = async (maDG, maSach, ngayMuon, data) => {
    const res = await axios.put(`${API_URL}/TheoDoiMuonSach/updateTDMS?MaDocGia=${maDG}&MaSach=${maSach}&NgayMuon=${ngayMuon}`, data);
    return res.data;
}

export const getDetailTDMS = async (maDG, maSach, ngayMuon) => {
    const res = await axios.get(`${API_URL}/TheoDoiMuonSach/detailTDMS?MaDocGia=${maDG}&MaSach=${maSach}&NgayMuon=${ngayMuon}`);
    return res.data;
}

export const getAllTDMS = async (maDG, maSach, ngayMuon) => {
    const res = await axios.get(`${API_URL}/TheoDoiMuonSach/getAllTDMS?MaDocGia=${maDG}&MaSach=${maSach}&NgayMuon=${ngayMuon}`);
    return res.data;
}