import { defineStore } from 'pinia';
import { logIn } from '@/services/nhanVien.service';

export const adminStore = defineStore('admin', {
    state: () => ({
        admin: null,
        isLoggedIn: false,
        accessToken: null
    }),
    actions: {
        async logInAdminStore(data) {
            try {
                const res = await logIn(data);
                if (res) {
                    this.admin = res;
                    this.isLoggedIn = true;
                    this.accessToken = res.access_token;
                } else {
                    console.error("Log in failed");
                }
            } catch (e) {
                console.error("Log in failed: ", e);
            }
        },

        logOut() {
            this.admin = null;
            this.isLoggedIn = false;
            this.accessToken = null;
        }
    },
})