/*
    proyecto: scripts para desencriptar o encriptar 
    autor: Manuel Rodriguez
    Descripción: tenemos las 6 funciones que hacen lo necesario para el funcionamiento de 
        la página de encriptar o desencriptar.
    
    fBoton: es la principal, es la que se manda a llamar desde los botones y después llama 
        a los otros métodos, el que verificara si hay mayúsculas o caracteres especiales y los
        métodos para encriptar o desencriptar, después manda a llamar verCopiar, 
        después llamara a las funciones encriptar o desencriptar dependiendo 
        si recibe un true o false respectivamente.

    fCopiar: Es la función encargada de copiar el texto trabajado al portapapeles.

    verCopiar
        es la función
        que se encarga de cambiar lo que se muestra en el cuadro de texto donde aparece el 
        texto ya trabajado.

    fEncriptar: Es la función encargada de encriptar el texto.

    fDesencriptar: Es la función encargada de desencriptar el texto.

    verificarMinus: Es la función que se encarga de verificar que el texto ingresado solo
        tenga letras minúsculas o un espacio, para ello transformara el texto original en 
        mayúsculas y después compara uno a uno los caracteres del texto original con los
        caracteres del texto en mayúsculas, en caso de que encuentre que son iguales es 
        un indicativo que hay una mayúscula en el texto original o que hay un carácter 
        especial en el texto, y se mandara un error, para exentar los espacios en blanco
        se hace una pregunta y si se encuentra uno se omite la comparación de caracteres.

*/

function fBoton(operacion){
    
    verCopiar();
    let texto = document.getElementById("mensajeTexto").value;
    console.log(operacion);

    if (verificarMinus(texto)){
            if (operacion){
                texto=encriptar(texto);
            }
            else {
                texto=desencriptar(texto);
        }
    }else{
        texto="ERROR: el texto ingresado solo debe tener letras minusculas";
    }
    document.getElementById("textoSalida").innerHTML = texto;
} 


function fCopiar (){
    
    let contenido=document.getElementById("textoSalida");
    contenido.select();
    navigator.clipboard.writeText(contenido.value);
    alert("copiado");
}

function verCopiar(){
    
    document.getElementById('ddpues').style.visibility='visible';
}

function encriptar(texto){
    /*  para evitar errores al momento de reemplazar las letras (por ejemplo si reemplazamos
        la letra "a" por "ai", y después reemplazamos la letra "i" por "imes" se daría el error
        de reemplazar la "i" de "ai").
        Lo primero que haremos es reemplazar las letras a cambiar por números para no tener
        errores y ya después esas letras se cambiar por las cadenas correspondientes.
    */

    texto=texto.replaceAll("a","[1]");
    texto=texto.replaceAll("e","[2]");
    texto=texto.replaceAll("i","[3]");
    texto=texto.replaceAll("o","[4]");
    texto=texto.replaceAll("u","[5]");

    texto=texto.replaceAll("[1]","ai");
    texto=texto.replaceAll("[2]","enter");
    texto=texto.replaceAll("[3]","imes");
    texto=texto.replaceAll("[4]","ober");
    texto=texto.replaceAll("[5]","ufat");
    console.log("texto cifrado: " + texto);//log de ayuda para el control del script
    return texto;

}

function desencriptar(texto){
    
    texto=texto.replaceAll("ai","a");
    texto=texto.replaceAll("enter","e");
    texto=texto.replaceAll("imes","i");
    texto=texto.replaceAll("ober","o");
    texto=texto.replaceAll("ufat","u");
    console.log("texto descifrado: " + texto);//log de ayuda para el control del script
    return texto;
}

function verificarMinus(texto){

    let textoMayusc = texto.toUpperCase();
    let cumple = false;

    for (let i=0; i<=(texto.length-1); i++ ){
        if(texto.charAt(i)==" "){
            i=i+1;
        }else{
            if(texto.charAt(i)!=textoMayusc.charAt(i)){
                cumple=true;
                
            }else{
                cumple=false;
                i=texto.length+1;
                //en caso de que caracteres sean iguales termina el ciclo
            }
        }
    }
    return cumple;
}



