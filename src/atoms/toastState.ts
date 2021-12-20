import { atom } from "recoil";

export const toastState = atom<Toast>({
    key: "toastState",
    default: {
        message: "",
        display: false
    }
})