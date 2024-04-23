import { defineStore } from 'pinia';
import { getAllSach, getDetailSach } from '@/services/sach.service';

export const useBookStore = defineStore('book', {
    state: () => ({
        book: null,
        searchValue: [],
    }),

    actions: {
        async getAll(data) {
            try {
                // Vào điều kiên get all sách
                const res = await getAllSach(data);
            } catch (error) {
                console.log(error);
            }
        },

        async search(data) {
            try {
                // Vào điều kiện search sách
                const res = await getAllSach(data);
                this.searchValue = res;
            } catch (error) {
                console.log(error);
            }
        },

        async getDetail(data) {
            try {
                const res = await getDetailSach(data);
                this.book = res;
            } catch (error) {
                console.log(error);
            }
        }
    }
})