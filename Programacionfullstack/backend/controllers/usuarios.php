<?php
require "../models/usuario.php"; // Importar el modelo

$usuarioModel = new Usuario($pdo); // Instancia del modelo

function obtenerUsuario() {
    global $usuarioModel;
    echo json_encode($usuarioModel->obtenerTodos());
}


?>