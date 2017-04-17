//alert("hola");
var imagen = document.getElementsByClassName("box-work");
var longitud = imagen.length;
console.log(imagen);
console.log(longitud);

for (var i = 0; i < longitud; i++){
	imagen[i].addEventListener("click", mostrarImagen);
}
function mostrarImagen() {
	alert ("hola");
}