//alert("hola");
var imagen = document.getElementsByClassName("box-work");
var longitud = imagen.length;
var cerrar = document.getElementsByClassName("close");
console.log(imagen);
console.log(longitud);
cerrar.addEventListener("click", cerrarImagen);
for (var i = 0; i < longitud; i++){
	imagen[i].addEventListener("click", mostrarImagen);
	imagen[i].id="img"+i;
	
}
function mostrarImagen(){
	var modal = document.getElementById("modal");
	
	modal.style.display = "block";
	
	
}
function cerrarImagen(){
	var modal = document.getElementById("modal");
	modal.sytle.display = "none";
}