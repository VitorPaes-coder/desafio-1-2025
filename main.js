"use strict"

const botaoTrocarImg = document.getElementById('trocar-fundo')
let numero = 0
let  urlImg = ""

function trocarImg(){
    if(numero === 5){
        numero = 0
    }
    numero++
    urlImg = `url(./img/img${numero}.jpg)`
    document.documentElement.style.setProperty('--fundo', urlImg)
    console.log(urlImg);
    
}

botaoTrocarImg.addEventListener('click', trocarImg)