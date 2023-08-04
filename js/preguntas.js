//Pagina Cuestionario
//Obtenemos el formulario con el ID 'trivia'
const trivia = document.getElementById('trivia');

//Creamos una función para validar respuestas
function validarRespuestas() {
  console.log('entro a validar respuestas');
  //Creamos un array donde obtenemos las opciones de respuesta seleccionadas por pregunta
  const respuestaSeleccionada = [
    document.querySelector('input[name="pregunta1"]:checked'),
    document.querySelector('input[name="pregunta2"]:checked'),
    document.querySelector('input[name="pregunta3"]:checked'),
    document.querySelector('input[name="pregunta4"]:checked'),
    document.querySelector('input[name="pregunta5"]:checked')
  ];

  //Inicializamos los aciertos y errores
  let aciertos = 0;
  let errores = 0;

  //Definimos el value de la respuesta correcta
  const respuestaCorrecta = 'acierto';

  //Usamos for para recorrer cada pregunta
  for (let i = 0; i < 5; i++) {
    // Obtenemos la respuesta seleccionada para cada pregunta
    let respuestaDada = respuestaSeleccionada[i];
    
    // Comparamos si la respuesta seleccionada es igual a la respuesta correcta
    if (respuestaDada.value === respuestaCorrecta) {
      // Si es igual, incrementamos los aciertos
      aciertos++;
    } else {
      // Si no es igual, incrementamos los errores
      errores++;
    }
  }
  // Devolvemos un objeto con la suma de aciertos y errores
  return { aciertos, errores };  
}

// Agregamos un event listener para 
const botonVolverAJugar = document.querySelector('.btn');
botonVolverAJugar.addEventListener('click', () => { 
  // definimos los resultados como la función de validarRta
  const resultados = validarRespuestas();

  //Despues del envio del formulario cambiamos el contenido de .trivia usando innerhtml
  trivia.innerHTML = `
    <div class="trivia">
    <img class="logo" src="./assets/img/logo.png" alt="Logo">
    <h1 class="title">★ Resultados ★</h1>
    <h2 class ="subtitle">Aciertos: ${resultados.aciertos} <br> Errores:${resultados.errores} </h2>
    </div>
    <button class="btn"><a href=./index.html>Volver a jugar</a></button>       
    `;  
})








//Mejoras pendientes:
//1.Mostrar cada acierto en verde y cada error en rojo, botones y no radio buttons?
//2.Contestar pregunta por pregunta, cambiar preguntas.html?
//5.version mobile? responsiveness
//7.cuenta regresiva ?

