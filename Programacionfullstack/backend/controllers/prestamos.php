<?php
require "../models/prestamo.php"; // Importar el modelo

$prestamosModel = new Prestamos($pdo); // Instancia del modelo

function obtenerprestamos() {
    global $prestamosModel;
    echo json_encode($prestamosModel->obtenerTodos());
}


?>