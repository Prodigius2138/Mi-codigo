<?php
require "../Models/destino.php"; // Importar el modelo

$destinoModel = new destino($pdo); // Instancia del modelo

function obtenerDestino() {
    global $destinoModel;
    echo json_encode($destinoModel->obtenerTodos());
}

function agregarDestino($id_destino, $nombre_destino, $descripcion_destino, $pais_destino, $ciudad_destino, $atracciones_destino, $imagen_destino) {
    global $destinoModel;
    if ($destinoModel->agregar($id_destino, $nombre_destino, $descripcion_destino, $pais_destino, $ciudad_destino, $atracciones_destino, $imagen_destino)) {
        echo json_encode(["message" => "destino agregado"]);
    } else {
        echo json_encode(["error" => "Error al agregar el destino"]);
    }
}
?>