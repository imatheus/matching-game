import './src/styles/settings/colors.css'
import './src/styles/settings/generic/reset.css'
import './src/styles/settings/elements/base.css'
import BoardGame from "./src/objects/BoardGame";

const $root = document.querySelector("#root");
const $htmlBoardGame = BoardGame(6);

$root.insertAdjacentHTML("beforeend", $htmlBoardGame)

//❌ NÃO USAR INNERHTML: questões de segurança