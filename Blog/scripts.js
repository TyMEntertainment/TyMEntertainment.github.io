/*Zona de variables*/

boton_menu = document.getElementById("icon-menu");
menu = document.getElementById("menu");
header = document.getElementById("header");
fondo = document.getElementById("fondo");


/*Variables con funcion*/

document.getElementById("icon-menu").addEventListener("click", mostrar_menu);
document.getElementById("fondo").addEventListener("click", ocultar_menu);

/*Funciones*/

function mostrar_menu() {

    menu.style.width = "300px";
    fondo.style.display = "block";

}

function ocultar_menu() {

    menu.style.width = "0px";
    fondo.style.display = "none";

}