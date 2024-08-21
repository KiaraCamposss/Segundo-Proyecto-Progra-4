function detalleFlor(id) {
    window.location.href = `detalleProductos.html?id=${id}`;
  }
  function displayflowers(data) {  
    $("#flower-list").html('')

    data.forEach(flower => {
      const flowercard=`<div class="col">
      <div class="card shadow-sm text-center flor-item">
          <div class="card-header">
              <h4 class="card-title flor-Nombre">${flower.Nombre}</h4>
          </div>
          <img class="card-img-top flor-Imagen" style="max-height:460px;" role="img" src="${flower.Imagen? flower.Imagen : '../img/image-not-found.jpg'}"
              alt="Imagen" />
          <div class="card-body">
              <p class="card-title">Tiempos de entrega: ${flower.Tiempos}</p>
              <h1 class="card-title flor-Precio">&#8353; ${flower.Precio}</h1>
               <div class="input-group">
                        <div class="input-group-text">Cantidad</div>
                        <input type="text" class="form-control flor-quantity" name="quantity" value="1" size="2" />
                              
                      </div>
              <div class="d-grid gap-2">
                  <button type="button" class="btn btn-lg btn-primary" onclick= "detalleFlor(${flower._id})">Detalle</button>
                    <button type="button" class="btn btn-lg btn-success" onclick="comprarLibro(this)" data-id="${flower._id}"><i class="bi bi-cart-plus"></i>Añadir al carrito</button>
              </div>

          </div>
      </div>
  </div>`
  $('#flower-list').append(flowercard)
    });

  }

  function comprarLibro(element){
    addToCart(element)
}

  // Función para mostrar las opciones de filtro por tamaño
  function displayCategories() {
    var select = $('#filter');
    var tamannos = [];
    
    // Obtener todas las categorías únicas
    $.each(flowers, function(index, flower) {
        $.each(flower.Tamanno, function(index, tamanno) {
            if ($.inArray(tamanno, tamannos) === -1) {
                tamannos.push(tamanno);
                // Añadir opción al select
                select.append('<option value="' + tamanno + '">' + tamanno + '</option>');
            }
        });
    });
  }
  $(document).ready(function () {
    //Listar Libros
    displayflowers(flowers)
    //Listar Categorias
    displayCategories()
    $('#filter').change(function() {
        var category = $(this).val();
        var filteredflowers;    
        if (category === 'all') {
            filteredflowers = flowers;
        } else {
            filteredflowers = flowers.filter(function(flower) {
                return flower.Tamanno.includes(category);
            });
        }    
        // Mostrar los libros filtrados
        displayflowers(filteredflowers);
    });
  });
  