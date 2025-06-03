<?php
require "../Models/producto.php"; // Importar el modelo

$productoModel = new producto($pdo); // Instancia del modelo

function obtenerProducto() {
    global $productoModel;
    echo json_encode($productoModel->obtenerTodos());
}

function agregarProducto($id, $nombre, $descripcion, $precio) {
    global $productoModel;
    if ($productoModel->agregar($id, $nombre, $descripcion, $precio)) {
        echo json_encode(["message" => "producto agregado"]);
    } else {
        echo json_encode(["error" => "Error al agregar el producto"]);
    }
}
?>