async function obtenerLibros() {
    try {
        const respuesta = await fetch("../backend/routes/API.php?seccion=libros");
        console.log(respuesta);
        const libros = await respuesta.json();
        console.log(libros);
        const contenedorLibros = document.getElementById("contenedor-libros");
        contenedorLibros.innerHTML = mostrarLibros(libros);
    }    catch (error) {
        console.error("error al obtener los libros:",error);
        document.getElementById("contenedor-libros").innerHTML = "<p>error al cargar los libros.</p>";
    }
}

function mostrarLibros(libros) {
    let contenido = "";

    libros.forEach(libros => {
        contenido += `<tr>`
        contenido += `<td>${libros.id_libro}</td>`;
        contenido += `<td>${libros.titulo}</td>`;
        contenido += `<td>${libros.autor}</td>`;
        contenido += `<td>${libros.año_publicacion}</td>`;
        contenido += `<td>${libros.disponible}</td>`;
        contenido += `<td> <a href="../routes/API.php?seccion=libros&accion=eliminar&id_libro=${libros.id_libro}">Eliminar</a></td>`;
        contenido += `</tr>`;
    }); 
 return contenido;
}

obtenerLibros();