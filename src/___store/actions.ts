import { createActionMaker, SingleAction } from "safe-redux-actions"

const makeAction = createActionMaker<typeof Actions>()

const Actions = {
    "setNickname": (payload: string) => makeAction("setNickname", payload)
}

export type Action = SingleAction<typeof Actions>