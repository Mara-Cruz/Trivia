//Código Pagina de Bienvenida
//obtenemos los elementos que necesitamos
const btnJugar = document.getElementById("btnJugar");
const inputForm = document.getElementById("newName");
const formulario = document.querySelector("form")

//creamos un eventlistener al btnJugar
btnJugar.addEventListener("click", () => {
    // definimos nombre como el valor ingresado en el input
    const nombre = inputForm.value;

    // si se deja el nombre vacío muestra un alert
    if (nombre === "") {
        alert("Por favor, escribe tu nombre para continuar.");
        // Si no se ha ingresado un nombre válido, ocultamos el formulario de bienvenida
        document.getElementById("nombre").style.display = "none";
        formulario.style.display = "block";
    }
    
    // Si no se deja el nombre vacío:    
    // Se modifica el contenido del formulario con innerHTML, inyectando el nombre.
    formulario.innerHTML = `
        <div>
        <h2 class ="subtitle" id="nombre">¡Bienvenid@: ★${nombre}!</h2>
        <h2 class ="subtitle">Selecciona una categoría para continuar<h2>
        </div>
        <form>
        <button class="btn"><a href=./culturaGeneral.html>Cultura General</a></button>
        <button class="btn"><a href="./entretenimiento.html">Entretenimiento</a></button>
        </form>
        `;  
});