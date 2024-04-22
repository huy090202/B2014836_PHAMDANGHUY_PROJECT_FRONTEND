import { defineStore } from 'pinia';
import { logIn } from '@/services/docGia.service';

export const userStore = defineStore('user', {
    state: () => ({
        user: null,
        isLoggedIn: false,
        accessToken: null
    }),
    actions: {
        async logInUserStore(data) {
            try {
                const res = await logIn(data);
                if (res) {
                    this.user = res;
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
            this.user = null;
            this.isLoggedIn = false;
            this.accessToken = null;
        }
    },
})