import { defineStore } from "pinia";
import type { RootState } from "@/models/states.model"
export const useStore = defineStore("main", {
  state: () =>
  ({
    styleMode: 'light black',
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
      this.uid = uid.trim()
    },
    setUsername(username: string) {
      this.username = username.trim()
    },
    setAdmin() {
      this.admin = true
    },
  },
})
