<?php
require "../Controllers/productos.php";

$requestMethod = $_SERVER["REQUEST_METHOD"];
$seccion = $_GET["seccion"] ?? null;

if ($requestMethod == "POST") {
    if ($seccion == "añadirproducto") {
        agregarProducto();
    } else if ($seccion == "eliminarDestino") {
        eliminarProducto();
    } else {
        echo "Sección POST no válida o no especificada.";
    }
}

if ($requestMethod == "GET") {
    if ($seccion == "producto") {
        obtenerProducto();
    } else {
        echo "Sección GET no válida o no especificada.";
    }
}
?>