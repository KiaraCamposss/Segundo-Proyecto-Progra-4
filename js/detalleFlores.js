
// Obtener el ID del libro de la URL
$(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const florid = urlParams.get("id");

  if (florid) {
    // Lógica para mostrar los detalles del libro
    console.log(`Detalles del libro con ID: ${florid}`);

    const flower = flowers.find((b) => b._id == florid)

    if (flower) {
      console.log(flower)
      //Mostrar los detalles del libro

      $('#title').text(flower.Nombre)
      $('#image').attr('src', flower.Imagen)
      $('#entrega').html('<b>Entrega: </b>' + flower.entrega)
      $('#tiempos').html(' <b>Tiempo de entrega:</b> ' + flower.Tiempos)
      $('#stock').html('<b>Stock:</b> ' + flower.Stock)
      $('#envio').html('<b>Gasto Envío:</b> &#8353;' + flower.GastoEnvio)
      $('#garantia').html('<b>Garantía:</b> ' + flower["Garantía del producto"])

      $('#price').html('&#8353;' + flower.Precio)
      $('#longDescription').html('<b>Descripción: </b>' + (flower.Descripción ? flower.Descripción : "No description"))


      let valoracionesHTML = '';
      flower.Valoración.forEach(function (review) {
        valoracionesHTML += `<div class="review">
        <h4>${review.Nombre}</h4>
       <p>${review.Rating} ${review.Comentario}</p>
    </div>`;
      });

      // Insertando las valoraciones en el contenedor con id "stars"
      $('#stars').html(valoracionesHTML);

      let galeria = flower.Galeria; // Asegúrate de que esto es un array
      for (let i = 0; i < galeria.length && i < 3; i++) {

        let imagenSrc = (galeria[i] && i < galeria.length) ? galeria[i] : '../img/image-not-found.jpg';
        $('#image' + (i + 1)).attr('src', imagenSrc);

      }



      flower.Tamanno.forEach((cat) => {
        const catItem = document.createElement("span")
        catItem.classList.add('badge')
        catItem.classList.add('text-bg-secondary')
        catItem.textContent = cat
        $('#categories').append(catItem)

      })
    }


    function comprarLibro() {
      addToCartDetalle(flower); 
  }

  $('#buttonPrincipal').on('click', function () {
    comprarLibro(); 
});
  }
});
