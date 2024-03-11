const clickBall = "bola";
const clickBox = "box";
const todasAsDivs = document.querySelectorAll('div')

function funcaoDaDiv(div) {
    div.addEventListener("click", () => {
        if (div.classList.value == '') {
            div.classList.add(clickBall)
        }
    })
    div.addEventListener("contextmenu", (evento) => {
        evento.preventDefault()
        if (div.classList.value == '') {
            div.classList.add(clickBox)
        }
    })
}

todasAsDivs.forEach(funcaoDaDiv);