import { Button } from "react-bootstrap"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { nameState } from "../../atoms/nameState"
import { toastState } from "../../atoms/toastState"
import { gameState } from "../../atoms/gameState"

import Board from "./Board"


export default function Game() {
    const name = useRecoilValue(nameState)

    const setToast = useSetRecoilState(toastState)

    const game = useRecoilValue(gameState)

    const handleDisplayToast = () => {
        setToast({
            message: "Waiting for your opponent...",
            display: true
        })
    }




    return <div id="game">
        Hello {name}

        <Board />

        <Button onClick={handleDisplayToast}> Display toast!</Button>

    </div >
}