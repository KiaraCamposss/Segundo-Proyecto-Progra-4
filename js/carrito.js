$(document).ready(function() {
	showDetailShop()
	// Agregar inputs dinámicamente
	/* $('.quantity-libro').on('change', function() {
		updateCartItemQty($(this))
	}); */



	function togglePaymentFields() {
        if ($('#tarjeta').is(':checked')) {
            $('#card-fields').show(); 
        } else {
            $('#card-fields').hide(); 
        }
    }

    togglePaymentFields();

    $('input[name="medioPago"]').on('change', function() {
        togglePaymentFields();
    });
});



