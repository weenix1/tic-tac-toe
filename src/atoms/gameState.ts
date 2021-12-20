import { GameMessages } from "constants/gameMessages";
import { atom } from "recoil";

export const gameState = atom<keyof typeof GameMessages>({
    key: "gameState",
    default: "loggedOut"
})