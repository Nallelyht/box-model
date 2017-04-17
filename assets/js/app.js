//alert("hola");
var imagen = document.getElementsByClassName("box-work");
var longitud = imagen.length;
var cerrar = document.getElementsByClassName("close")[0];
var modal = document.getElementById("modal");
var imagenModal = document.getElementById("img");
//console.log(imagen);
//console.log(longitud);

for (var i = 0; i < longitud; i++){
	imagen[i].addEventListener("click", mostrarImagen);
	imagen[i].id="img"+i;
	
}
function mostrarImagen(){
	modal.style.display = "block";
	imagenModal.src =this.src;
	
	
}
function cerrarImagen(){
	var modal = document.getElementById("modal");
	modal.sytle.display = "none";
}