import Enter from "./components/Enter";
import Game from "./components/Game";

export const routes: Array<[string, React.FC]> = [
    ["/", Enter],
    ["/play", Game],
]