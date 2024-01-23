//Calificaciones:

//Cindy Rejón Hernández (4/5) "Competente"
//Jesús Emiliano Madrigal Gonzále (4/5) "Competente"
//Pedro Antonio Roldán Linares (4/5) "Competente"


// Obteniendo el formulario y asignando una función al evento submit
var formulario = document.querySelector(".formulario");
formulario.onsubmit = function(e) {
  e.preventDefault();

  // Elementos del formulario
  var nombreElemento = formulario.elements[0];
  var edadElemento = formulario.elements[1];
  var nacionalidadElemento = formulario.elements[2];

  var nombre = nombreElemento.value;
  var edad = edadElemento.value;
  var indiceNacionalidad = nacionalidadElemento.selectedIndex;
  var nacionalidad = nacionalidadElemento.options[indiceNacionalidad].value;

  console.log(nombre, edad);
  console.log(nacionalidad);

  // Validación y agregado de invitados al cumplir con las condiciones
  if (nombre.length === 0) {
    nombreElemento.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    edadElemento.classList.add("error");
  }

  if (
    nombre.length > 0 &&
    (edad >= 18 && edad <= 120)
  ) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
};

// Función agrega invitado
function agregarInvitado(nombre, edad, nacionalidad) {
  
  var nacionalidadMap = {
    ar: "Argentina",
    mx: "Mexicana",
    vnzl: "Venezolana",
    per: "Peruana"
  };

  // Contenedor de lista de invitados
  var lista = document.getElementById("lista-de-invitados");

  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");
  lista.appendChild(elementoLista);

  function crearElemento(descripcion, valor) {
    var spanNombre = document.createElement("span");
    var inputNombre = document.createElement("input");
    var espacio = document.createElement("br");
    spanNombre.textContent = descripcion + ": ";
    inputNombre.value = valor;
    elementoLista.appendChild(spanNombre);
    elementoLista.appendChild(inputNombre);
    elementoLista.appendChild(espacio);
  }

  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidadMap[nacionalidad]);

  // Botón para eliminar invitado 
  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";
  var corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  // Función botón elimina el invitado actual
  botonBorrar.onclick = function() {
    elementoLista.remove();
  };
}