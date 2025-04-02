/* script.js */
const excuses = [
    "Meu papagaio deletou meus arquivos! 🦜💾",
    "Eu estava preso no trânsito... dentro de casa! 🚗🏠",
    "Meu café caiu no teclado e digitou errado! ☕💻",
    "Fui atualizar o computador e nunca mais voltou! 🔄💀",
    "Minha geladeira começou a falar e precisei investigar! 🧊🎤"
];

function getRandomExcuse() {
    let randomIndex = Math.floor(Math.random() * excuses.length);
    return excuses[randomIndex];
}

function updateExcuse() {
    let excuseElement = document.getElementById("excuse");
    excuseElement.innerText = getRandomExcuse();
}

document.getElementById("excuseButton").addEventListener("click", updateExcuse);
