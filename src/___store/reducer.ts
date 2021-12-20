import { Action } from "./actions"

const initialState = {
    nickname: "",
    socket: null
}

export const rootReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case "setNickname":
            return {
                ...state,
                nickname: action.payload
            }
        default:
            return state
    }

}