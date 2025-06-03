<?php
// Se importa el archivo que contiene la configuración de la base de datos, que establece la conexión
require "../Config/database.php"; // Importar la conexión a la base de datos

// Definición de la clase Libro que interactuará con la tabla 'libros' en la base de datos
class producto {
    private $pdo;  // Declaración de una propiedad privada para almacenar la conexión PDO

    // El constructor recibe el objeto $pdo (conexión a la base de datos) y lo asigna a la propiedad $this->pdo
    public function __construct($pdo) {
        $this->pdo = $pdo;  // Asigna la conexión PDO a la propiedad de la clase
    }

    // Método para obtener todos los libros de la base de datos
    public function obtenerTodos() {
        // Prepara la consulta SQL para seleccionar todos los registros de la tabla 'libros'
        $stmt = $this->pdo->prepare("SELECT * FROM productos");
        
        // Ejecuta la consulta
        $stmt->execute();
        
        // Devuelve todos los resultados como un array asociativo
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Método para agregar un nuevo libro a la base de datos
    public function agregar($id, $nombre, $descripcion, $precio) {
        // Prepara la consulta SQL para insertar un nuevo registro en la tabla 'libros'
        $stmt = $this->pdo->prepare("INSERT INTO productos (id, nombre, descripcion, precio) VALUES (:id, :nombre, :descripcion, :precio)");
        
        // Ejecuta la consulta con los parámetros proporcionados en la llamada al método
        // Los valores del libro se pasan en un array asociativo
        return $stmt->execute(["id" => $id, "nombre" => $nombre, "descripcion" => $descripcion, "precio" => $precio]);
    }
}
?>