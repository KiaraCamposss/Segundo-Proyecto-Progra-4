$(document).ready(function () {
    $('#simulate-payment').on('click', function (e) {
        e.preventDefault(); // Prevenir el comportamiento por defecto del botón

        const cardNumber = $('#card-number').val();
        const bin = cardNumber.substring(0, 6);

        const cardExpiry = $('#card-expiry').val();
        const cardcvc = $('#card-cvc').val();

        if (isNaN(cardNumber)) {
            $.notify("Número de tarjeta inválido, Porfavor coloquelo bien", "warn");
            return;
        }
        if (cardNumber.trim() === "") {
            $.notify("Número de tarjeta inválido, Porfavor escriba su número de tarjeta", "warn");
            return;
        }
        if (cardNumber.length < 6) {
            $.notify("Número de tarjeta inválido, Debe escribir los primeros 6 digitos de su tarjeta mínimo", "warn");
            return;
        }
        if (cardExpiry.trim() === "") {
            $.notify("Porfavor escriba la fecha de expiración", "warn");
            return;
        }
        if (!/^\d{2}\/\d{2}$/.test(cardExpiry)) {
            $.notify("Por favor, escriba una fecha de expiración válida en el formato MM/YY", "warn");
            return;
        }
        
        if (cardcvc.trim() === "") {
            $.notify("Porfavor escriba su cvc", "warn");
            return;
        }


        fetch(`https://data.handyapi.com/bin/${bin}`)
        .then(response => response.json())
        .then(data => {
            const scheme = data.Scheme;
            const issuer = data.Issuer;

            // Guardar los datos en atributos del botón
            $('#simulate-payment').attr('data-scheme', scheme);
            $('#simulate-payment').attr('data-issuer', issuer);

            if (scheme === 'VISA') {
                $('#card-logo').html('<img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" width="100">');
            } else if (scheme === 'MASTERCARD') {
                $('#card-logo').html('<img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" alt="MasterCard" width="100">');
            } else {
                $('#card-logo').html('Tarjeta no reconocida');
            }

            $('#card-banco').val(issuer);
        })
        .catch(error => {
            console.error('Error al verificar el BIN:', error);
        });
});
});


