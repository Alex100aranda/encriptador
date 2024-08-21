const textArea = document.querySelector(".text__area");
const mensaje = document.querySelector(".mensaje");



//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
        mensaje.value = textoEncriptado
        textArea.value = "";
        mensaje.style.backgroundImage ="none"
}


function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringEncriptada = stringEncriptada.toLowerCase()

        for(let i = 0; i < matrizCodigo.length; i++){
            if(stringEncriptada.includes(matrizCodigo[i][0])){
                stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
            }

        }
        
        return stringEncriptada

}



function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
        mensaje.value = textoEncriptado
        textArea.value = "";

}


function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringDesencriptada = stringDesencriptada.toLowerCase()

        for(let i = 0; i < matrizCodigo.length; i++){
            if(stringDesencriptada.includes(matrizCodigo[i][1])){
                stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
            }

        }
        
        return stringDesencriptada

}



function copiarTexto() {
    // Obtiene el textarea por su clase
    var textarea = document.querySelector('.mensaje');
    
    // Selecciona el contenido del textarea
    textarea.select();
    textarea.setSelectionRange(0, 99999); // Para dispositivos móviles
    
    // Copia el texto seleccionado al portapapeles
    document.execCommand('copy');
    
    // Opcional: muestra una notificación (puedes usar un alert o un mensaje en la UI)
    alert('Texto copiado');
}

