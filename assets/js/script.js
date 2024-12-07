const ele = document.getElementById("ele1") //buscando el ID en el HTML y lo asigno a la variable ele
window.addEventListener("load",function(){ //agrego un evento de carga de la pagina a la ventana del navegador y ejecuto la función cuando se cargue la página
    ele.style.backgroundColor = 'green'
})

function pintar(){
    ele.style.backgroundColor = 'yellow' //declaro la función pintar, donde a la variable ele le doy el color amarillo
}
ele.addEventListener("click",pintar) //agrego un evento de click al HTML con la variable ele, que al hacer click use la funcion anterior pintar