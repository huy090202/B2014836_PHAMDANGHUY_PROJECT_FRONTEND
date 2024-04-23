import { defineStore } from 'pinia';
import { logIn, getDetail } from '@/services/docGia.service';

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

        async setInfoUser(data) {
            try {
                const res = await getDetail(data);

                if (res) {
                    this.user = res;
                    this.accessToken = res.access_token;
                } else {
                    console.error("Get detail failed");
                }
            } catch (e) {
                console.error("Get detail failed: ", e);
            }
        },

        setLocal(data, accessToken) {
            this.user = data;
            this.isLoggedIn = true;
            this.accessToken = accessToken;
        },

        logOut() {
            this.user = null;
            this.isLoggedIn = false;
            this.accessToken = null;
        }
    },
})