const fecha = document.getElementById("date")
const date = new Date()
//Obtener elementos de la fecha
let day = date.getDate()
let month = date.getMonth() + 1
let year = date.getFullYear()

let fechaActual = `${day}-${month}-${year}`
let fechaActual2 = day + "-" + month + "-" + year

fecha.innerHTML += fechaActual
const tBody = document.getElementById("contenido-factura")
var filas = tBody.rows.length



//Envio y metodo pago


window.onload = function () {
    const envio = localStorage.getItem('envio');
    const pago = localStorage.getItem('pago');


    const envioSeleccionado = document.getElementById("envioSeleccionado")
    const metodoPagoSeleccionado = document.getElementById("pagoSeleccionado")
    envioSeleccionado.innerHTML += envio
    metodoPagoSeleccionado.innerHTML += pago
}


//Productos
function cargarProductos() {
    var cartArray = JSON.parse(localStorage.getItem('compra'))

    if (cartArray) {

        $(tBody).html('')
        cartArray.forEach(function (item) {
            addNewRow(item)
        });


        calculoTotal2()
    }
}


addNewRow = (item) => {

    var price = parseFloat(item.price);
    var quantity = parseInt(item.quantity);
    var subTotal = price * quantity



    const row = document.createElement("tr")
    row.className = "fila-factura"
    row.innerHTML = `<td><input type="text" placeholder="Nombre Producto" value="${item.name}"class="form-control" readonly   style="font-size: 1.5rem;"></td>
    <td><input type="number" placeholder="0" name="cantidad[${filas}]" value="${item.quantity}" class="form-control cantidad"  readonly style="font-size: 1.5rem;"></td>
    <td><input type="number" placeholder="0" name="precio[${filas}]" value="${price.toFixed(2)}" class="form-control precio" readonly style="font-size: 1.5rem;"></td>
    <td><input type="number" placeholder="0" name="subtotal[]"  value="${subTotal.toFixed(2)}" class="form-control subtotal" readonly style="font-size: 1.5rem;"></td>
    <td style="text-align: right;">
  </td>`
    tBody.insertBefore(row, tBody.lastChild)
    filas++
}


calculoTotal2 = () => {
    const subtotales = document.querySelectorAll(".subtotal")
    let sumaTotal = 1000
    subtotales.forEach(elemento => {
        sumaTotal += parseFloat(elemento.value)
    })
    document.getElementById("total").value = sumaTotal
}

$(document).ready(function () {
    cargarProductos()
    emptyCart()
});

