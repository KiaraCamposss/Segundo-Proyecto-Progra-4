$(document).ready(function () {
    $('#simulate-payment').on('click', function(e) {
        e.preventDefault(); // Prevenir el comportamiento por defecto del botón

        const cardNumber = $('#card-number').val();
        const bin = cardNumber.substring(0, 6);

        fetch(`https://data.handyapi.com/bin/${bin}`)
            .then(response => response.json())
            .then(data => {
                const scheme = data.Scheme;
                console.log(data)
                if (scheme === 'VISA') {
                    $('#card-logo').html('<img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" width="100">');
                } else if (scheme === 'MASTERCARD') {
                    $('#card-logo').html('<img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" alt="MasterCard" width="100">');
                } else {
                    $('#card-logo').html('Tarjeta no reconocida');
                }

                $('#card-banco').val(data.Issuer);

            })
            .catch(error => console.error('Error al verificar el BIN:', error));
    });
});



