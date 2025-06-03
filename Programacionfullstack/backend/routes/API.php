<?php
require "../controllers/Libros.php"; // Importar el controlador que maneja la lógica de negocio
require "../controllers/usuarios.php";
require "../controllers/prestamos.php";
// Obtener el método de la solicitud HTTP (GET, POST, etc.)
$requestMethod = $_SERVER["REQUEST_METHOD"];
// Si la solicitud es de tipo GET, se llama a la función obtenerLibros()
if ($requestMethod == "GET") {
    $seccion = $_GET["seccion"];
    if($seccion =="libros"){
         obtenerLibros();
    } else if ($seccion=="usuarios"){
        //echo "aca llamaremos al json de usuario";
        obtenerUsuario();
    } else if ($seccion =="prestamos"){
        //echo "aca llamaremos al json de prestamos";
        obtenerprestamos();
    }
} 
// Si la solicitud es de tipo POST, se procesa la entrada y se agrega un libro
elseif ($requestMethod == "POST") {
    if ($seccion=='libros'){
        $ID=$_POST['ID Libro'];
        $Titulo=$_POST['Titulo'];
        $Autor=$_POST['Autor'];
        $Anio=$_POST['Anio'];
        $Disponible=$_POST['Disponible'];
        echo `datos del libro recibido: ` . $ID . `, ` . $Titulo . `, ` . $Autor . `, ` . $Anio . `, ` . $Disponible;
    }else if($seccion==`usuario`){
        echo `aca mostrare la indo de usuario recibidos`;
    }else if($seccion==`prestamos`){
        
    }
    
    // Leer los datos enviados en el cuerpo de la solicitud (formato JSON)
    $data = json_decode(file_get_contents("php://input"), true);
    
    // Llamar a la función agregarLibro() pasando los valores extraídos del JSON
    agregarLibro($data['ID'], $data['Titulo'], $data['Autor'], $data[`Anio`], $data[`Disponible`]);
 
// Si se usa otro método HTTP no permitido, se devuelve un mensaje de error en formato JSON
} else {
    echo json_encode(["error" => "Método no permitido"]);
}
?>