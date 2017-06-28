var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO O: Retornar la lista de estudiantes
//  return estudiantes.push(agregarEstudiante(nombre,puntaje,puntoHSE));
return estudiantes ;


}
function agregarEstudiante(nombre,puntaje,puntoHSE) {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante

  var nombre=prompt("Nombre del estudiante");
  var puntaje=prompt("Puntaje Tecnico");
  var puntoHSE= prompt("Puntos de HSE");
  var estudiante={
  nombre:nombre,
  puntaje:parseInt(puntaje),
  puntoHSE:parseInt(puntoHSE)
  };

  estudiantes.push(estudiante);
  return estudiante;

    //var persona=[{nombre:this.nombre,puntaje:this.puntaje,puntoHSE:this.puntoHSE}]
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado



}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.puntaje + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " +estudiante.puntoHSE+ "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
  var mostrar_lista="";
  for(var i in estudiantes){
    mostrar_lista+= mostrar(estudiantes[i]);
  }
return mostrar_lista;

}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
      for(var i in estudiantes){
        if (nombre.toLowerCase()==estudiantes[i].nombre.toLowerCase()){
            return (estudiantes[i]);
        }

    }
}
function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
    return estudiantes.sort(function (a, b){
    return b.puntaje - a.puntaje;
  });
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    return estudiantes.sort(function (a, b){
    return b.puntoHSE - a.puntoHSE;
  });
}
