document.getElementById('formulario').onsubmit = function () {
    const email = document.getElementById('email').value;
    const fecha = document.getElementById('fecha').value;
    const telefono = document.getElementById('tel').value;
    const observaciones = document.getElementById('observaciones').value;
    const fullName = document.getElementById('nombre').value;
    const rol = document.getElementById('rol').value;

    // Validación de nombre completo (debe contener al menos dos palabras)
const namePattern = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+(?:\s[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+){1,}$/;
if (!namePattern.test(fullName)) {
    $.notify('Por favor, ingrese su nombre completo con al menos dos palabras.', "warn");
    return false;
}


    // Validación de correo electrónico
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        $.notify('Por favor, ingrese un correo electrónico válido', "warn");
        return false;
    }


    // Validación de fecha de nacimiento (debe ser mayor de 18 años)
    const birthDate = new Date(fecha);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    if (age < 18) {
        $.notify('Debe tener al menos 18 años para enviar este formulario.', "warn");
        return false;
    }

    // Validación de teléfono (7 a 15 dígitos)
    if (!/^\+?\d{8}$/.test(telefono)) {
        $.notify('Por favor, ingrese un número de teléfono válido, debe tener 8 dígitos.', "warn");
        return false;
    }


    // Validación de rol
    if (rol.length == 0) {
        $.notify('Por favor, seleccione un rol', "warn");
        return false;
    }

    // Validación de observaciones (mínimo 10 caracteres)
    if (observaciones.length < 10) {
        $.notify('El mensaje debe contener al menos 10 caracteres.', "warn");
        return false;
    }

    return true; // Si todas las validaciones son correctas, se envía el formulario
};