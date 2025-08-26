let carrito = [];

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById('itemsCarrito');
  const total = document.getElementById('total');
  lista.innerHTML = '';
  let suma = 0;
  carrito.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.nombre} - €${item.precio}`;
    lista.appendChild(li);
    suma += item.precio;
  });
  total.textContent = suma;
}

document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formComentario");
  const nombreInput = document.getElementById("nombreComentario");
  const textoInput = document.getElementById("textoComentario");
  const lista = document.getElementById("listaComentarios");

  if (formulario && nombreInput && textoInput && lista) {
    formulario.addEventListener("submit", function (e) {
      e.preventDefault();
      const nombre = nombreInput.value.trim();
      const texto = textoInput.value.trim();
      if (nombre && texto) {
        const div = document.createElement("div");
        div.innerHTML = `<strong>${nombre}</strong>: ${texto}`;
        lista.appendChild(div);
        formulario.reset();
      }
    });
  } else {
    console.warn("Formulario de comentarios no encontrado");
  }
});
