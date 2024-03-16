import { defineStore } from "pinia";
import type { RootState } from "@/models/states.model"
export const useStore = defineStore("main", {
  state: () =>
  ({
    styleMode: 'dark purple',
    isIn: false,
    authIsReady: false,
    uid: '',
    username: '',
    admin: false,
  } as RootState),
  actions: {
    setStyleMode(mode: string, text: string) {
      this.styleMode = mode+' '+text;
    },
    setAuthIsReady() {
      this.authIsReady = true;
    },
    setIsIn() {
      this.isIn = true;
    },
    setIsOut() {
      this.isIn = false;
    },
    setUid(uid: string) {
      this.uid = uid
    },
    setUsername(username: string) {
      this.username = username
    },
    setAdmin() {
      this.admin = true
    },
  },
})
