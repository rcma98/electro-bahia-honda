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
    li.textContent = `${item.nombre} - $${item.precio}`;
    lista.appendChild(li);
    suma += item.precio;
  });
  total.textContent = suma;
}
document.getElementById('formComentario').addEventListener('submit', function(e) {
  e.preventDefault();
  const nombre = this[0].value;
  const correo = this[1].value;
  const texto = this[2].value;
  const div = document.createElement('div');
  div.innerHTML = `<strong>${nombre}</strong>: ${texto}`;
  document.getElementById('listaComentarios').appendChild(div);
  this.reset();
});
function generarPDF() {
  alert("Aquí se generaría el PDF con los productos del carrito.");
  // Aquí podrías integrar jsPDF o similar
}
