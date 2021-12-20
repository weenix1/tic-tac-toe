import { GameMessages } from "constants/gameMessages";

export type SocketEvent = Exclude<keyof typeof GameMessages, "loggedOut">;