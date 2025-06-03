<?php
require "../models/Libro.php"; // Importar el modelo

$libroModel = new Libro($pdo); // Instancia del modelo

function obtenerLibros() {
    global $libroModel;
    echo json_encode($libroModel->obtenerTodos());
}

function agregarLibro($titulo, $autor, $anio_publicacion) {
    global $libroModel;
    if ($libroModel->agregar($titulo, $autor, $anio_publicacion)) {
        echo json_encode(["message" => "Libro agregado"]);
    } else {
        echo json_encode(["error" => "Error al agregar el libro"]);
    }
}
?>