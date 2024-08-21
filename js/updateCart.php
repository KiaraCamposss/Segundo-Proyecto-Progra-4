<?php
// obtiene el contenido del carrito desde localStorage
$cartArray = json_decode(file_get_contents('php://input'), true);

// Datos enviados por POST
$idLibro = $_POST['id'];
$quantity = $_POST['quantity'];

// Actualiza la cantidad del artículo en el carrito
foreach ($cartArray as &$item) {
    if ($item['id'] == $idLibro) {
        $item['quantity'] = $quantity;
        break;
    }
}

// Guarda los datos actualizados
file_put_contents('cart.json', json_encode($cartArray));

// Devuelve una respuesta JSON
echo json_encode(['success' => true, 'message' => 'Cantidad actualizada correctamente']);
?>
