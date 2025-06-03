async function obtenerDestino() {
    try {
        const respuesta = await fetch("http://localhost/Mi-codigo/Agencia%20Viajes/BBDD/Routes/api.php?seccion=destinos");
        console.log(respuesta);
        const destino = await respuesta.json();
        console.log(destino);
        const contenedordestino = document.getElementById("contenedor-destino");
        contenedordestino.innerHTML = mostrardestino(destino);
    }    catch (error) {
        console.error("error al obtener los destino:",error);
        document.getElementById("contenedor-destino").innerHTML = "<p>error al cargar los destino.</p>";
    }
}

function mostrardestino(destino) {
    let contenido = "";

    destino.forEach(destino => {
        contenido += `<div class="card-container">`
        contenido += `<img src="${destino.imagen_destino}" alt="Imagen 1">`;
        contenido += `<div class="card-content">`;
        contenido += `<h3 class="card-title">${destino.nombre_destino}</h3>`;
        contenido += ` <p class="card-text">${destino.descripcion_destino}</p>`;
        contenido += `<a href="#" class="card-button">Ver más</a>`;
        contenido += `</div>`;
        contenido += `</div>`;
    }); 
 return contenido;
}

obtenerDestino();