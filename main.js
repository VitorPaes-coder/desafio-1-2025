"use strict"

const botaoTrocarImagem = document.getElementById('trocar-imagem')
let imagemAtual = 1
const totalImagens = 4

function trocarImagem() {
    imagemAtual = (imagemAtual % totalImagens) + 1

    const urlImagem = `url('./img/img${imagemAtual}.jpg')`

    document.documentElement.style.setProperty('--imagem-fundo', urlImagem)
}

botaoTrocarImagem.addEventListener('click', trocarImagem)
