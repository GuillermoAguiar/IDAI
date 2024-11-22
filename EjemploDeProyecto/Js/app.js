var btnMenuOpen = document.getElementById("btnMenuOpen"),
    btnMenuClosed = document.getElementById("btnMenuClosed"),
    menuResponsive = document.getElementById("menuBar");

btnMenuOpen.addEventListener("click", function(){
    menuResponsive.classList.add("active");
});

btnMenuClosed.addEventListener("click", function(){
    menuResponsive.classList.remove("active");
});

var enlaces = document.getElementById("enlaces");

enlaces.addEventListener("click", function(){
    menuResponsive.style.transformStyle = "0.5s"
    menuResponsive.classList.remove("active");
});



//Slider Productos
var contenedor = document.querySelector('.slider'),
    btnIzquierdo = document.getElementById("btn-izquierda"),
    btnDerecho = document.getElementById("btn-derecha");

//Evento para el boton derecho
btnDerecho.addEventListener("click", function(){
    contenedor.scrollLeft += contenedor.offsetWidth;
});


//Evento para el boton izquierdo
btnIzquierdo.addEventListener("click", function(){
    contenedor.scrollLeft -= contenedor.offsetWidth;
});


//SECCION CONTACTO
var formulario = document.getElementById("formulario");

function validar(e){
    var inputNombre = document.getElementById("nombre");
    var inputEmail = document.getElementById("email");
    var inputComments = document.getElementById("comentarios");

    // Esta es para la condición ó ||
    if(inputNombre.value == 0 
        || inputEmail.value == 0 
        || inputComments.value == 0){
        
        //Nueva sentencia, previene que se mueva a la posición original
        e.preventDefault();
        alert("Te faltan todos los campos");
    }
    else{
        e.preventDefault();
        alert("Datos enviados");

        inputNombre.value = "";
        inputEmail.value = "";
        inputComments.value = "";
    }
}

formulario.addEventListener("submit", validar);