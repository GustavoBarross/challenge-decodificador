const campoDigitar = document.querySelector(".conteudo_campo_digitar");
const campoResposta = document.querySelector(".conteudo_resposta");

function btnEncriptar() {
    const textoEncriptado = encriptar(campoDigitar.value);
    campoResposta.value = textoEncriptado;
    campoDigitar.value = ""; 

    removerImagemDeFundo();
    mostrarBotaoCopiar();
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(campoDigitar.value);
    campoResposta.value = textoDesencriptado;
    campoDigitar.value = ""; 

    removerImagemDeFundo();
    mostrarBotaoCopiar();
}

function btnCopiar(){

    campoResposta.select();
    document.execCommand("copy");
    campoResposta.value = "";

    mostrarPopup();

}

function mostrarBotaoCopiar() {
    const botaoCopiar = document.getElementById("btnCopiar");
    botaoCopiar.style.visibility = 'visible'; 
}

function ocultarItens() {
    const botaoCopiar = document.getElementById("conteudoResposta");
    botaoCopiar.style.visibility = "inv"
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}

function mostrarPopup() {
    const popup = document.getElementById("popup");

    popup.classList.add("show");

    setTimeout(() => {
        popup.classList.remove("show");
    }, 3000);
}

function removerImagemDeFundo() {
    const campoResposta = document.querySelector(".conteudo_resposta");
    campoResposta.style.backgroundImage = "none";
}