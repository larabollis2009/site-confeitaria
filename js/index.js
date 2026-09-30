// Declaração de variaveis

let indice = 0
const imagens = [
    "img/bolo de chocolate.png",
    "img/bolo de morango.png",
    "img/bolo de maracujá.png"
]

// função para trocar a imagem
function trocar() {
    const img = document.getElementById("img-bolo")

    if (img) {
        img.src = imagens[indice]
    }
}

// logica para trocar a imagem
setInterval(function()  {
    indice = (indice + 1) % imagens.length
    trocar()
}, 5000)
