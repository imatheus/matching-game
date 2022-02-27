import CardGame from "./src/components/CardGame";
import './src/styles/settings/colors.css'
import './src/styles/settings/generic/reset.css'


import './src/styles/settings/elements/base.css'

const $root = document.querySelector("#root");
const $htmlCardGame = CardGame();

$root.insertAdjacentHTML("beforeend", $htmlCardGame)

//NÃO USAR INNERHTML: questões de segurança