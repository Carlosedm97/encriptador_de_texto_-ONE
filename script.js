const entradaTexto = document.querySelector(".input");
const salidaTexto = document.querySelector(".output");
const button = document.querySelector(".btn-copiar");

function btnEncriptar(){
    const textoEncriptado = encriptar(entradaTexto.value);
    salidaTexto.value = textoEncriptado;
    entradaTexto.value = "";
    salidaTexto.style.backgroundImage = "none";
}

function btnDesencriptar(){
    const textDesencriptado = desencriptar(entradaTexto.value);
    salidaTexto.value = textDesencriptado;
    entradaTexto.value = "";
}

function btnCopiar(){
    salidaTexto.focus();
    document.execCommand('selectAll');
    document.execCommand('copy');
}

function encriptar(textoEncriptado){
    let matrizCod = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoEncriptado = textoEncriptado.toLowerCase();

    for(let i = 0; i < matrizCod.length; i++){
        if(textoEncriptado.includes(matrizCod[i][0])){
            textoEncriptado = textoEncriptado.replaceAll(matrizCod[i][0], matrizCod[i][1]);
        }

    }
    return textoEncriptado;
}

function desencriptar(textoDesencriptado){
    let matrizCod = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoDesencriptado = textoDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCod.length; i++){
        if(textoDesencriptado.includes(matrizCod[i][1])){
            textoDesencriptado = textoDesencriptado.replaceAll(matrizCod[i][1], matrizCod[i][0]);
        }

    }
    return textoDesencriptado;
}