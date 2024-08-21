function addToCart(element) {
	var florParent = $(element).closest('div.flor-item')
	var id = element.dataset.id
	//Tiene el simbolo de moneda
	var price = $(florParent).find('.flor-Precio').text()
	price = price.substring(1, price.length)
	var name = $(florParent).find('.flor-Nombre').text()
	var quantity = $(florParent).find('.flor-quantity').val()
	//Item del carrito
	var cartItem = {
		id,
		name,
		price,
		quantity
	}
	//Obtener carrito actual
	var cartArray = new Array()
	if (localStorage.getItem('compra')) {
		cartArray = JSON.parse(localStorage.getItem('compra'))
	}
	if (cartArray.length > 0) {
		let itemIndex = cartArray.findIndex((obj) => obj.id == cartItem.id);
		//Si existe en los items del carrito
		if (itemIndex != -1) {
			cartArray[itemIndex].quantity = parseInt(cartArray[itemIndex].quantity) + parseInt(cartItem.quantity);
		} else {
			//Agregar item	
			cartArray.push(cartItem)
		}

	} else {
		//Nuevo carrito
		//Agregar item	
		cartArray.push(cartItem)

	}

	//Guardar
	localStorage.setItem('compra', JSON.stringify(cartArray))
	console.log(JSON.parse(localStorage.getItem('compra')))
	$.notify("Producto agregado a la compra: " + cartItem.name, "success");
}


function addToCartDetalle(flower) {
	// Extraer la información del objeto flower
	const id = flower._id;
	const name = flower.Nombre;
	const price = flower.Precio;
	const quantity = 1 // Obtiene la cantidad desde el DOM

	// Crear el objeto de item del carrito
	const cartItem = {
		id,
		name,
		price,
		quantity
	};

	// Obtener carrito actual
	let cartArray = [];
	if (localStorage.getItem('compra')) {
		cartArray = JSON.parse(localStorage.getItem('compra'));
	}

	if (cartArray.length > 0) {
		const itemIndex = cartArray.findIndex((obj) => obj.id == cartItem.id);
		// Si existe en los items del carrito
		if (itemIndex !== -1) {
			cartArray[itemIndex].quantity = cartItem.quantity;
		} else {
			// Agregar item
			cartArray.push(cartItem);
		}
	} else {
		// Nuevo carrito
		// Agregar item
		cartArray.push(cartItem);
	}

	// Guardar en localStorage
	localStorage.setItem('compra', JSON.stringify(cartArray));
	console.log(JSON.parse(localStorage.getItem('compra')));
	$.notify("Producto agregado a la compra: " + cartItem.name, "success");
}



//Eliminar
function removeCartItem(idFlor) {
	var cartArray = JSON.parse(localStorage.getItem('compra'));
	if (cartArray) {
		let index = cartArray.findIndex((obj) => obj.id == idFlor);
		// Verificar que el índice sea válido antes de hacer splice
		if (index !== -1) {
			cartArray.splice(index, 1);
		} else {
			console.error("Elemento no encontrado en el carrito.");
		}
	}
	// Guardar
	localStorage.setItem('compra', JSON.stringify(cartArray));
	$.notify("Producto Eliminado de la Compra", "warn");
	showDetailShop();
}


//Función Actualizar Normal
function updateCartItemQty(element) {
	var idLibro = element.dataset.id
	var quantity = element.value
	var cartArray = JSON.parse(localStorage.getItem('compra'))
	if (cartArray) {
		let itemIndex = cartArray.findIndex((obj) => obj.id == idLibro);
		cartArray[itemIndex].quantity = quantity
	}
	//Guardar
	localStorage.setItem('compra', JSON.stringify(cartArray))
	showDetailShop()
}


//Función Actualizar con Ajax
function updateCartItemQtyConAjax(element) {
	var idLibro = element.dataset.id;
	var quantity = element.value;
	var cartArray = JSON.parse(localStorage.getItem('compra'));

	if (cartArray) {
		let itemIndex = cartArray.findIndex((obj) => obj.id == idLibro);
		if (itemIndex !== -1) {
			cartArray[itemIndex].quantity = parseInt(quantity);
		}
	}

	// Simula una solicitud Ajax a una API de prueba
	$.ajax({
		url: 'https://jsonplaceholder.typicode.com/posts', // URL de la API de prueba
		type: 'POST',
		data: JSON.stringify({ id: idLibro, quantity: quantity }),
		contentType: 'application/json; charset=utf-8',
		success: function (response) {
			console.log("Respuesta de la API:", response);


			localStorage.setItem('compra', JSON.stringify(cartArray));


			showDetailShop();

			$.notify("Cantidad actualizada correctamente", "success");
		},
		error: function (xhr, status, error) {
			console.error("Error al actualizar la cantidad:", error);
			$.notify("Hubo un error al actualizar la cantidad", "error");
		}
	});
}





function emptyCart() {
	if (localStorage.getItem('compra')) {
		localStorage.removeItem('compra');
		showDetailShop()
	}
}

//Mostrar en carrito
function showDetailShop() {
	var cartRowHTML = "";
	var itemCount = 0;
	var total = 0;

	var price = 0;
	var quantity = 0;
	var subTotal = 0;
	var cart = JSON.parse(localStorage.getItem('compra'))
	if (cart) {


		// Filtramos los items con cantidad 0 antes de iniciar el ciclo forEach
		cart = cart.filter(function (item) {
			if (item.quantity > 0) {
				return true;
			} else {
				removeCartItem(item.id);
				return false;
			}
		});



		itemCount = cart.length;

		cart.forEach(function (item) {

			price = parseFloat(item.price);
			quantity = parseInt(item.quantity);
			subTotal = price * quantity


			cartRowHTML += `<div class="row mb-4 d-flex justify-content-between align-items-center">
                        <div class="col-md-3 col-lg-3 col-xl-3">
                          <h6 class="text-muted name-libro">${item.name}</h6>
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-2 d-flex">

                          <input min="0" name="quantity" value="${item.quantity}" type="number" onChange="updateCartItemQtyConAjax(this)"
                            class="form-control form-control-sm quantity-libro" data-id="${item.id}" />

                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h6 class="mb-0 price-libro">&dollar; ${item.price}</h6>
                        </div>
                        
						<div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h6 class="mb-0 subtotal-libro">&dollar;${subTotal.toFixed(2)}</h6>
                        </div>
						<div class="col-md-1 col-lg-1 col-xl-1 ">
                           <button type="button" class="btn btn-secondary"><i class="bi bi-trash" data-id="${item.id}"></i>Eliminar</button>
                        </div>
                      </div>
                      <hr class="my-4">`;

			total += subTotal;
		});
	}

	$('#detail').html(cartRowHTML);
	$('#total-items').text(itemCount);
	$('#total-compra').text("$" + total.toFixed(2));

}



$(document).on('click', '.btn-secondary', function () {
	const idFlor = $(this).find('i').data('id');
	removeCartItem(idFlor);
});



function finalizarCompra() {
	const envioSeleccionado = document.querySelector('input[name="envio"]:checked').value;

	const pagoSeleccionado = document.querySelector('input[name="medioPago"]:checked').value;

	localStorage.setItem('envio', envioSeleccionado);
	localStorage.setItem('pago', pagoSeleccionado);


	window.location.href = "Factura.html";

}


$(document).on('click', '.finalizarCompra', function () {
	if (!$('#envioPostal').is(':checked') && !$('#recogidaTienda').is(':checked')) {
		$.notify("Por favor, seleccione un método de envío", "warn");
		return false;
	} else if (!$('#tarjeta').is(':checked') && !$('#efectivo').is(':checked')) {
		$.notify("Por favor, seleccione un método de pago", "warn");
		return false;
	}
	else if (!localStorage.getItem('compra')) {
		$.notify("Por favor, seleccione un algún producto para finalizar su compra", "warn");
		return false;
	} else {
		finalizarCompra();

	}
});




