
// var btnEnviar = document.getElementById("enviar"),
//     formulario = document.getElementById("quiz");

// btnEnviar.addEventListener("click", function(){

//     formulario.tot.value = "";
//     var total = 0;

//     total += parseFloat(formulario.Q1.value);

//     total += parseFloat(formulario.Q2.value);

//     total += parseFloat(formulario.Q3.value);


//     formulario.tot.value = total;
    
    

// });

document.getElementById('enviar').addEventListener('click', function() {
    let puntos = 0;

    // Verificar las respuestas
    if (document.querySelector('input[name="q1"]:checked') && document.querySelector('input[name="q1"]:checked').value === 'a') {
        puntos++;
    }

    if (document.querySelector('input[name="q2"]:checked') && document.querySelector('input[name="q2"]:checked').value === 'b') {
        puntos++;
    }

    if (document.querySelector('input[name="q3"]:checked') && document.querySelector('input[name="q3"]:checked').value === 'b') {
        puntos++;
    }

    // Mostrar el resultado
    let resultadoText = Tu puntaje es: ${puntos}/3;

    if (puntos === 3) {
        resultadoText += "<br>¡Excelente trabajo!";
    } else if (puntos === 0) {
        resultadoText += "<br>Sigue practicando";
    }
    document.getElementById('resultado').innerHTML = resultadoText;
});
