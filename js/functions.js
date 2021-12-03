/* function agregarCuadro(cuadro, selector) {
    $(selector).append(
      `<div class="col">
        <div id="card_${cuadro.idCuadro}" class="card cuadros">
          <img src="/thisisartbyMaruulita/Multimedia/${cuadro.imagenCuadro}" class="card-img-top" alt="${cuadro.nombreCuadro}">
          <div class="card-body" id="modelo_${cuadro.idCuadro}">
            <h6 class="card-title">Nombre: ${cuadro.nombreCuadro}</h6>
            <h6 class="card-title">Precio: $${cuadro.precioCuadro}</h6>
            <p class="card-text">Descripcion Modelo ${cuadro.idCuadro}</p>
            <button id="button_${cuadro.idCuadro}" class="btn btn-outline-light" type="button">Comprar</button>
          </div>
        </div>
      </div>`
    );
};


function mostrarCarrito(localStorage) {
    let cuadroCarrito = JSON.parse(localStorage.getItem("carrito"));
    for (const cuadro of cuadroCarrito) {
      console.log("data cuadro", cuadro.data);
      $("#modelos_carrito").append(
        `<div class="col">
          <div id="card_${cuadro.data.idCuadro}" class="card cuadros">
            <img src="/thisisartbyMaruulita/Multimedia/${cuadro.data.imagenCuadro}" class="card-img-top" alt="${cuadro.data.nombreCuadro}">
            <div class="card-body" id="modelo_${cuadro.data.idCuadro}">
              <h6 class="card-title">Nombre: ${cuadro.data.nombreCuadro}</h6>
              <h6 class="card-title">Precio: $${cuadro.data.precioCuadro}</h6>
              <p class="card-text">Descripcion Modelo ${cuadro.data.idCuadro}</p>
              <!--<button id="button_${cuadro.data.idCuadro}" class="btn btn-outline-light" type="button">Comprar</button>-->
            </div>
          </div>
        </div>`);
    };
}; */