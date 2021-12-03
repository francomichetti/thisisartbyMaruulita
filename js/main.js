const productos = [];
const carrito = [];
const cuadrosEnCarrito = [];

class Cuadro {
  constructor(id, nombre, precio, color, tamanio, imagen, cantidad) {
    this.idCuadro = id;
    this.nombreCuadro = nombre;
    this.precioCuadro = precio;
    this.colorCuadro = color;
    this.tamanioCuadro = tamanio;
    this.imagenCuadro = imagen;
    this.cantidadCuadro = cantidad;
  }

  toString() {
    return `
      IdCuadro:${this.idCuadro} 
      Nombre: ${this.nombreCuadro} 
      Precio: $${this.precioCuadro} 
      Color: ${this.colorCuadro} 
      Tamaño: ${this.tamanioCuadro}
    `;
  }
};

class CuadroCarrito {
  constructor(id, nombre, precio, color, tamanio, imagen, cantidad){
    this.idCuadro = id
    this.nombreCuadro = nombre;
    this.precioCuadro = precio;
    this.colorCuadro = color;
    this.tamanioCuadro = tamanio;
    this.imagenCuadro = imagen;
    this.cantidadCuadro = cantidad;
  }

  removeCuadro(){
    remove(this.cuadroC)
  }
};

productos.push(
  new Cuadro("modelo1", "modelo 1", 2000, "blanco", "20x20", "mod1.jpg", 0)
);
productos.push(
  new Cuadro("modelo2", "MoonLight", 3000, "azul", "50x50", "moonLight.jpeg", 0)
);
productos.push(
  new Cuadro("modelo3", "Day&Night", 5000, "gris", "100x80", "daynNight.jpeg", 0)
);

productos.forEach((cuadro) => {
  agregarCuadro(cuadro, "#modelos");
  $(`#button_${cuadro.idCuadro}`).click({...cuadro}, cargarCuadroLocal);
});

function agregarCuadro(cuadro, selector) {
  $(selector).append(
    `<div class="col">
      <div id="card_${cuadro.idCuadro}" class="card cuadros">
        <img src="../Multimedia/${cuadro.imagenCuadro}" class="card-img-top" alt="${cuadro.nombreCuadro}">
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

function cargarCuadroLocal(cuadro) {
  carrito.push(cuadro);
  $("#carrito_cantidad").html(`${carrito.length}`);
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

function pushearCuadroDelLocal() {
  let cuadroCarrito = JSON.parse(localStorage.getItem("carrito"))
  cuadroCarrito.forEach((cuadro) => {
    cuadrosEnCarrito.push(cuadro)
  });
};

function mostrarCarrito() {
  cuadrosEnCarrito.forEach((cuadroC) => {
    $("#modelos_carrito").append(
      `<div class="col">
        <div id="card_${cuadroC.data.idCuadro}" class="card cuadros">
          <img src="../Multimedia/${cuadroC.data.imagenCuadro}" class="card-img-top" alt="${cuadroC.data.nombreCuadro}">
          <div class="card-body" id="modelo_${cuadroC.data.idCuadro}">
            <h6 class="card-title">Nombre: ${cuadroC.data.nombreCuadro}</h6>
            <h6 class="card-title">Precio: $${cuadroC.data.precioCuadro}</h6>
            <p class="card-text">Descripcion Modelo ${cuadroC.data.idCuadro}</p>
            <button id="removeCuadro" class="btn btn-outline-light" type="button">Eliminar</button>
          </div>
        </div>
      </div>`
    );
  });
};

$(document).ready(() => {
  pushearCuadroDelLocal();
  mostrarCarrito();
});

$("#removeCuadro").click( () => {
  console.log('apreto boton')
});

const URLJSON = "../referencia/main.json";

$('#mostrar_referencias').click( () => {
  $.getJSON(URLJSON, function (respuesta){
    let referencia = respuesta;
    for (const cuadroReferencia of referencia) {
      $("#modelos_referencia").html(
        `<div class="col">
          <div id="card_${cuadroReferencia.idCuadro}" class="card cuadros">
            <img src="../Multimedia/JSON/${cuadroReferencia.imagenCuadro}" class="card-img-top" alt="${cuadroReferencia.nombreCuadro}">
            <div class="card-body" id="modelo_${cuadroReferencia.idCuadro}">
            <h6 class="card-title">Nombre: ${cuadroReferencia.nombreCuadro}</h6>
          </div>
        </div>`
      )
    };
  });
});

