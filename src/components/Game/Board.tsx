import { useState } from "react";
import { io } from "socket.io-client";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { toastState } from "atoms/toastState";

const socketClient = io(process.env.REACT_APP_BACKEND_URL!, {
  transports: ["websocket"],
});

type Symbol = "O" | "X" | null;

export default function Board() {
  const [game1, setGame] = useState(null);

  const [matrix, setMatrix] = useState<[Symbol, Symbol, Symbol][]>([
    //00    01    02
    [null, null, null],
    //10    11    12
    [null, null, null],
    //20    21    22
    [null, null, null],
  ]);

  const setToast = useSetRecoilState(toastState);

  const symbol: Symbol = "X";

  const handleMatrixUpdate = (x: number, y: number) => {
    //socket.emit("updateMatrix", {x,y, gameId})
    setMatrix((matrix) => {
      matrix[y][x] = symbol;
      return [...matrix];
    });
  };

  useEffect(() => {
    socketClient.on("waitingForOpponent", () => {
      setToast({
        message: "Waiting for another player...",
        display: true,
      });
    });

    socketClient.on("waitingForMove", () => {
      setToast({
        message: "Waiting for your opponent...",
        display: true,
      });
    });

    socketClient.on("yourTurn", () => {
      setToast((t) => ({
        ...t,
        display: false,
      }));
    });

    socketClient.on("matrixUpdated", (matrix) => {
      setMatrix(matrix);
    });

    socketClient.on("newGame", ({ symbol, gameId }) => {
      setMatrix([
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ]);
      //setSymbol(symbol)
      //setGameId(gameId)
    });

    socketClient.on("gameOver", ({ won }: { won: Symbol }) => {
      const message = won ? (won === symbol ? "You won" : "You lost") : "Draw";

      setToast({
        message,
        display: true,
      });
    });
  }, [setToast]);

  return (
    <div id="board">
      {matrix.map((row, y) => (
        <div className="board-row" key={`row_${y}`}>
          {row.map((symbol, x) => (
            <div
              className="board-cell"
              key={`cell_${x}`}
              onClick={() => handleMatrixUpdate(x, y)}
            >
              {symbol}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
