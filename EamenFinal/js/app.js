
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
    var puntos = 0;


    if (document.querySelector('input[name="q1"]:checked') && document.querySelector('input[name="q1"]:checked').value === 'a') {
        puntos++;
    }

    if (document.querySelector('input[name="q2"]:checked') && document.querySelector('input[name="q2"]:checked').value === 'b') {
        puntos++;
    }

    if (document.querySelector('input[name="q3"]:checked') && document.querySelector('input[name="q3"]:checked').value === 'b') {
        puntos++;
    }


    resultadoText = puntaje: ${puntos}/3;

    if (puntos === 3) {
        resultadoText += "¡Excelente trabajo!";
    } else if (puntos === 0) {
        resultadoText += "Sigue practicando";
    }
    
    document.getElementById('resultado').innerHTML = resultadoText;
});
