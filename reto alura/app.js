//Declaramos las variables donde entrara el texto y saldra
let texto = '';
let textoA = '';

//Funcion que recibira el texto y lo mandara a ser codificado
function guardarTexto() {
    texto = document.getElementById("texto").value;
    const textoACodificado = codificarTexto(texto);
    imprimePantalla(textoACodificado);
}

//funcion que recibe el texto ya codificado y lo imprime en el html
function imprimePantalla(textoACodificar) {
    textoA = document.getElementById("textoCodificado");
    textoA.innerHTML = textoACodificar;
}

//Funcion que codifica el texto recibido en guardartexto
function codificarTexto(texto) {
    const codificacion = { //se declara un mapeado el cual cambiara las letras por el otro texto
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };

    let textoACodificar = ''; //se define la variable que guardara el texto al final de ser decodificado

    for (let i = 0; i < texto.length; i++) { //se usa length para saber el tamaño de la cadena y asi repetir el bucle dependiendo el tamaño
        const letraOriginal = texto[i]; //Se guarda la variable en una nueva variable que ira comparandose  
        const letraCodificada = codificacion[letraOriginal] || letraOriginal; //Se compara la variable, si es igual a las variables en codificacion se cambiara por su respectivo reemplazo, de lo contrario se mantendra como estaba.
        textoACodificar += letraCodificada;//se va agregando en la variable dejando el cada caracter como va entrando manteniendo el orden.
}

    return textoACodificar;//regresa el texto luego de la finalizacion del bucle for, para poder imprimirse en el html
}

//desencriptar el texto

function desencriptar(){
    texto = document.getElementById("texto").value;
    const textoCodificado = desCodificarTexto(texto);
}
function desCodificarTexto(){
    const decodificacion= {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };

    let textoADesencriptar = '';

    for(let i = 0; i<texto.length;i++){
        const textoOriginal = texto[i];
        const textoDesencriptado = decodificacion[textoOriginal] || textoOriginal;
        textoADesencriptar +=textoDesencriptado;
    }
    return;
}
function desencriptar() {
    const textoEncriptado = document.getElementById("texto").value;

    const mapeoDesencriptado = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };

    let textoDesencriptado = textoEncriptado;

    for (const palabraEncriptada in mapeoDesencriptado) {
        if (mapeoDesencriptado.hasOwnProperty(palabraEncriptada)) {
            const letraCorrespondiente = mapeoDesencriptado[palabraEncriptada];
            const expresionRegular = new RegExp(palabraEncriptada, 'g');
            textoDesencriptado = textoDesencriptado.replace(expresionRegular, letraCorrespondiente);
        }
    }

    document.getElementById("textoCodificado").innerHTML = textoDesencriptado;
    return ;
}
function copiar() {
    const resultado = document.getElementById("textoCodificado").innerText;
    const textarea = document.createElement("textarea");
    textarea.value = resultado;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
}