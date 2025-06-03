<?php
require "../Controllers/destinos.php";

$requestMethod = $_SERVER["REQUEST_METHOD"];
$seccion = $_GET["seccion"] ?? null;

if ($requestMethod == "POST") {
    if ($seccion == "añadirDestino") {
        agregarDestino();
    } else if ($seccion == "eliminarDestino") {
        eliminarDestino();
    } else {
        echo "Sección POST no válida o no especificada.";
    }
}

if ($requestMethod == "GET") {
    if ($seccion == "destinos") {
        obtenerDestino();
    } else {
        echo "Sección GET no válida o no especificada.";
    }
}
?>