// URL base del endpoint PHP
const BASE_URL = "http://localhost/Mi-codigo/Tienda/Backend/modelo/api_productos.php?seccion=productos.php";

let productosActuales = []; // Array global para filtrar sin recorrer el DOM

// === Obtener todos los productos (GET) ===
function listarProductos() {
  fetch(`${BASE_URL}?seccion=productos`)
    .then(res => res.json())
    .then(data => {
      productosActuales = data; // Guardamos para búsquedas
      mostrarTablaProductos(data);
    })
    .catch(err => console.error("Error al obtener productos:", err));
}

// === Mostrar productos en tabla HTML ===
function mostrarTablaProductos(productos) {
  const container = document.getElementById('productosContainer');

  if (!Array.isArray(productos) || productos.length === 0) {
    container.innerHTML = '<p>No hay productos para mostrar.</p>';
    return;
  }

  let html = '<table border="1" cellpadding="5"><thead><tr>';
  html += '<th>ID</th><th>Nombre</th><th>Descripción</th><th>Precio</th><th>Acciones</th></tr></thead><tbody>';

  productos.forEach(p => {
    html += `
      <tr>
        <td>${p.id}</td>
        <td>${p.nombre}</td>
        <td>${p.descripcion}</td>
        <td>${p.precio}</td>
        <td>
          <button onclick="eliminarProducto(${p.id})">Eliminar</button>
          <button onclick="editarProducto(${p.id}, '${p.nombre}', '${p.descripcion}', ${p.precio})">Editar</button>
        </td>
      </tr>
    `;
  });

  html += '</tbody></table>';
  container.innerHTML = html;
}

// === Obtener un producto por ID (GET) ===
function mostrarProducto(id) {
  fetch(`${BASE_URL}?id=${id}`)
    .then(res => res.json())
    .then(data => console.log("Producto:", data))
    .catch(err => console.error("Error al obtener producto:", err));
}

// === Agregar un producto (POST) ===
function agregarProducto(nombre, descripcion, precio) {
  fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, descripcion, precio })
  })
    .then(res => res.json())
    .then(data => {
      console.log("Producto agregado:", data);
      listarProductos(); // Refresca la tabla
    })
    .catch(err => console.error("Error al agregar producto:", err));
}

// === Modificar un producto (PUT) ===
function modificarProducto(id, nombre, descripcion, precio) {
  fetch(BASE_URL, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, nombre, descripcion, precio })
  })
    .then(res => res.json())
    .then(data => {
      console.log("Producto modificado:", data);
      listarProductos(); // Refresca la tabla
    })
    .catch(err => console.error("Error al modificar producto:", err));
}

// Eliminar un producto (DELETE)
function eliminarProducto(id) {
  if (!confirm(`¿Seguro que querés eliminar el producto con ID ${id}?`)) return;

  fetch(`http://localhost/Mi-codigo/Tienda/Backend/modelo/api_productos.php?id=${id}`, {
    method: "DELETE"
  })
    .then(res => res.json())
    .then(data => {
      console.log("Producto eliminado:", data);
      alert("Producto eliminado correctamente");
      listarProductos();
    })
    .catch(err => console.error("Error al eliminar producto:", err));
}

// === Función para editar un producto ===
function editarProducto(id, nombre, descripcion, precio) {
  // Rellena el formulario con los datos del producto
  document.getElementById('editId').value = id;
  document.getElementById('editNombre').value = nombre;
  document.getElementById('editDescripcion').value = descripcion;
  document.getElementById('editPrecio').value = precio;

  // Muestra el formulario debajo de la tabla
  document.getElementById('formularioEdicion').style.display = 'block';

  // esto hace scroll hasta el formulario de edicion porque  no sería visible al estar al final de la pagina
  document.getElementById('formularioEdicion').scrollIntoView({ behavior: 'smooth' });
}

      

// === Guardar cambios desde el formulario de edición ===
function guardarEdicion() {
  const id = document.getElementById('editId').value;
  const nombre = document.getElementById('editNombre').value;
  const descripcion = document.getElementById('editDescripcion').value;
  const precio = parseFloat(document.getElementById('editPrecio').value);

  if (!nombre || !descripcion || isNaN(precio)) {
    alert('Completá todos los campos correctamente.');
    return;
  }

  modificarProducto(id, nombre, descripcion, precio);
  cancelarEdicion();
}

// === Cancelar edición ===
function cancelarEdicion() {
  document.getElementById('formularioEdicion').style.display = 'none';
}

// Barra de busqueda 
function filtrarProductos() {
  const filtro = document.getElementById('buscarInput').value.toLowerCase();

  const filtrados = productosActuales.filter(p =>
    p.id.toString().includes(filtro) ||
    p.nombre.toLowerCase().includes(filtro) ||
    p.descripcion.toLowerCase().includes(filtro) ||
    p.precio.toString().includes(filtro)
  );

  mostrarTablaProductos(filtrados);
}
// Llama a la función que dibuja la tabla (`mostrarTablaProductos`) con el nuevo array filtrado.