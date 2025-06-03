async function obtenerUsuario() {
    try {
        const respuesta = await fetch("../backend/routes/API.php?seccion=usuarios");
        console.log(respuesta);
        const usuario = await respuesta.json();
        console.log(usuario);
        const contenedorUsuario = document.getElementById("contenedor-usuario");
        contenedorUsuario.innerHTML = mostrarUsuario(usuario);
    }    catch (error) {
        console.error("error al obtener el usuario:",error);
        document.getElementById("contenedor-usuario").innerHTML = "<p>error al cargar el usuario.</p>";
    }
}

function mostrarUsuario(usuarios) {
    let contenido = "";

    usuarios.forEach(usuario => {
        contenido += `<tr>`
        contenido += `<td>${usuario.id_usuario}</td>`;
        contenido += `<td>${usuario.nombre}</td>`;
        contenido += `<td>${usuario.email}</td>`;
        contenido += `<td>${usuario.telefono}</td>`;
        contenido += `</tr>`;
    })
 return contenido;
}

obtenerUsuario();