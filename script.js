const textArea = document.querySelector(".text-area");
const campoMensaje = document.querySelector(".mensaje");
const button = document.querySelector(".btn-copiar");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    campoMensaje.value = textoEncriptado;
    textArea.value = "";
    campoMensaje.style.backgroundImage = "none";
}

function btnDesencriptar(){
    const textDesencriptado = desencriptar(textArea.value);
    campoMensaje.value = textDesencriptado;
    textArea.value = "";
}

function btnCopiar(){
    campoMensaje.focus();
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