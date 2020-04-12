/*
    Sesion 10
    Tema: JavaScript
*/

var mensaje = "Hola, esta vez soy una variable"; // Tipo string - cadena
var nombreVariable = 'Devmaster'; // Tipo string
 
// camelCase en JavaScript

console.log(nombreVariable);
console.log(mensaje);

// Número
var diasTrabajo = 5; // enteros
var horaTrabajo = 8;
var porcentajeIgv = 0.18; // decimales

console.log(diasTrabajo);
console.log(porcentajeIgv);

// Booleanos (true - false)
var valorVerdad = true;
var valorFalso = false;

console.log(valorVerdad);
console.log(valorFalso);

// Undefined
var alumnos;
console.log(alumnos);

// Null
var variableNull = null;
console.log(variableNull);

// Arreglos
var alumnos = ['Sergio','Katherine','Jean'];
console.log(alumnos);
console.log(alumnos[0]); // Sergio
console.log(alumnos[2]); // Jean
console.log(alumnos.length); // Obtengo el tamaño del arreglo (array)

var animales = [];
animales.push('perro');
animales.push('gato');
animales.push('conejo');
console.log(animales);

// Objetos
var datos = {
    nombres: "Jesús Alexander",
    apellidos: "Gonzales Manrique",
    edad: 28,
    hijo: true
};
console.log(datos.nombres); // Jesús Alexander
console.log(datos.edad); // 28

datos.domicilio = "Calle Juan Barreto 422";
console.log(datos);

var miAuto = new Object;
miAuto.marca = 'Ford';
miAuto.modelo = "Mustang";
miAuto.anioFabricacion = 1969;
console.log(miAuto);

var docentes = [
    { nombres: "Gian Franco", curso: "Base de Datos"},
    { nombres: "Hervey", curso: "Algoritmos"},
    { nombres: "Jesús", curso: "Desarrollo Web Frontend"}
];
console.log(docentes[1]); // { nombres: "Hervey", curso: "Algoritmos" }
console.log(docentes[1].curso); // Algoritmos

