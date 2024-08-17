//variables
var cajaDerecha = document.getElementById('caja-texto2');
var cajaIzquierda = document.getElementById('ingresee');
var desbloquearBoton = document.getElementById('copiar');
var infoDerecha = document.querySelector('.sector__derecho__error');
var infoDerecha2 = document.querySelector('.sector__derecho__indicacion');

//funcion que saca la imagen, los parrafos inferiores y muestra el boton copiar
function quitarVariosYBotonCopiar(){
  infoDerecha.style.visibility = 'hidden';
  infoDerecha2.style.visibility = 'hidden';
  cajaDerecha.style.backgroundImage = 'none';
  desbloquearBoton.style.visibility = 'visible';  
  cajaDerecha.style.display = 'inline';
}
//funcion que limpia la caja de texto derecha, y la vuelve a cero
function resetCajaDerecha() {
  cajaDerecha.value = ''; // 
  cajaDerecha.style.backgroundImage = 'url("https://i.postimg.cc/8zN0ZHRy/Mu-eco.png")';
  cajaDerecha.style.backgroundRepeat = 'no-repeat'; 
  cajaDerecha.style.backgroundPosition = 'center';
  infoDerecha.style.visibility = 'visible';
  infoDerecha2.style.visibility = 'visible';
  desbloquearBoton.style.visibility = 'hidden';
}

function limpiarCaja(){
    cajaIzquierda.value = '';
}
//funcion que devuelve si hay mayusculas o acentos en el texto ingresado
function mayusYAcentos(text) {
  return /[A-Z]|[áéíóúÁÉÍÓÚÑ]/.test(text);
}

/*funcion del boton encriptar en el que analiza si la caja esta vacia, si tiene mayusculas o acentos y da las diferentes alertas
para cada caso ademas limpia la caja de texto izquierda*/
function botonEncriptar(){
if(cajaIzquierda.value == ''){
  resetCajaDerecha();  
  swal.fire({
    title: 'Error',
    text: 'No hay texto para encriptar',
    icon: 'error',
    confirmButtonText: 'Aceptar'})
resetCajaDerecha();    
}
else if (mayusYAcentos(cajaIzquierda.value) == false){
var encriptarr = cajaIzquierda.value.replace(/e/g, 'enter').replace(/a/g, 'xjz').replace(/i/g, 'imes').replace(/o/g, 'ober').replace(/u/g, 'ufat');
var encriptarr2 = encriptarr.replace(/xjz/g, 'ai');
document.getElementById("caja-texto2").value = encriptarr2;
swal.fire({
  title: 'Logrado',
  text: 'Su Texto se ha encriptado',
  icon: 'success',
  confirmButtonText: 'Aceptar'})
quitarVariosYBotonCopiar()
limpiarCaja();
}
else{
   swal.fire({
    title: 'Error',
    text: 'Recorda que no podes ingresar palabras que contengan mayusculas, ni acentos',
    icon: 'warning',
    confirmButtonText: 'Aceptar'})
  limpiarCaja();
  resetCajaDerecha();
 }
}

/*funcion del boton desencriptar en el que analiza si la caja esta vacia, si tiene mayusculas o acentos y da las diferentes alertas
para cada caso, ademas limpia la caja de texto izquierda*/
function botonDesencriptar(){
if(cajaIzquierda.value == ''){
  resetCajaDerecha();
  swal.fire({
    title: 'Error',
    text: 'No hay texto para desencriptar',
    icon: 'error',
    confirmButtonText: 'Aceptar'
  })  
}
else if(mayusYAcentos(cajaIzquierda.value) == false){
var desencriptar = cajaIzquierda.value.replace(/enter/g, 'e').replace(/ai/g, 'xjz').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ufat/g, 'u');
var desencriptar2 = desencriptar.replace(/xjz/g, 'a');
document.getElementById("caja-texto2").value = desencriptar2;
swal.fire({
  title: 'Logrado',
  text: 'Su Texto se ha desencriptado',
  icon: 'success',
  confirmButtonText: 'Aceptar'})
quitarVariosYBotonCopiar()
limpiarCaja();
}
else{
    swal.fire({
    title: 'Error',
    text: 'Recorda que no podes ingresar palabras que contengan mayusculas, ni acentos',
    icon: 'warning',
    confirmButtonText: 'Aceptar'})
  limpiarCaja();
  resetCajaDerecha();
 }
}

/*funcion del boton copiar, que tambien resetea la caja de texto derecha*/
function botonCopiar(){
  let copiaTexto = cajaDerecha.value;
  try {
  navigator.clipboard.writeText(copiaTexto);
    console.log('Texto copiado al portapapeles');
    swal.fire({
      title: 'Operacion completada',
      text: 'Copia realizada',
      icon: 'success',
      confirmButtonText: 'Aceptar'})
    
  } catch (err) {
    console.error('Falló la operación: ', err);
  }
  resetCajaDerecha();
}

/*valores para hacer la encriptacion
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/
