
// seleciando elemento ➡️ $("div");
// seleccionando ID ➡️ $("#titulo");
// seleccionando Clase ➡️ $(".elemento");

$(document).ready(function(){
    $("#titulo").html('Hemos cambiado el texto'); // Enviamos el valor del contenido (SET)
    console.log($("#titulo").html()); // obteniendo el valor del contenido (GET)
    console.log($("#titulo"));

    $("#parrafo").before("<h2>Descripción</h2>");
    $("#parrafo").after("<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptatem iste nobis cumque? Soluta consectetur eius, quos illo culpa non accusantium iusto enim eos. Debitis eius ex hic quaerat sint.</p>");

    $("#parrafo").prepend("<span>Es dinamico, </span>");
    $("#parrafo").append("<span>, fin.</span>");

    $("div").css("background-color","skyblue");
    $("div").css({
        "height": "200px",
        "border-radius": "32px",
        "padding": "20px"
    });
});

// $(function(){
//     alert('Segunda Forma');
// });