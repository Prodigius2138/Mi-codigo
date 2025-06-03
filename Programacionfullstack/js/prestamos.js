async function obtenerprestamos() {
    try {
        const respuesta = await fetch("../backend/routes/API.php?seccion=prestamos");
        console.log(respuesta);
        const prestamos = await respuesta.json();
        console.log(prestamos);
        const contenedorPrestamos = document.getElementById("contenedor-prestamos");
        contenedorPrestamos.innerHTML = mostrarprestamos(prestamos);
    }    catch (error) {
        console.error("error al obtener el usuario:",error);
        document.getElementById("contenedor-prestamos").innerHTML = "<p>error al cargar el usuario.</p>";
    }
}

function mostrarprestamos(prestamos) {
    let contenido = "";

    prestamos.forEach(prestamos => {
        contenido += `<tr>`
        contenido += `<td>${prestamos.id_prestamos}</td>`;
        contenido += `<td>${prestamos.id_libro}</td>`;
        contenido += `<td>${prestamos.id_usuario}</td>`;
        contenido += `<td>${prestamos.fecha_prestamos}</td>`;
        contenido += `<td>${prestamos.fecha_devolucion}</td>`;
        contenido += `</tr>`;
    })
 return contenido;
}

obtenerprestamos();