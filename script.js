document.addEventListener("DOMContentLoaded", () => {
  // 🛒 Carrito
  const carrito = [];
  const agregarBtn = document.getElementById("agregarCarrito");
  const listaCarrito = document.getElementById("listaCarrito");

  if (agregarBtn && listaCarrito) {
    agregarBtn.addEventListener("click", () => {
      carrito.push("Refrigerador Premium");
      const item = document.createElement("li");
      item.textContent = "Refrigerador Premium";
      listaCarrito.appendChild(item);
    });
  }

  // 💬 Comentarios
  const formulario = document.getElementById("formComentario");
  const listaComentarios = document.getElementById("listaComentarios");

  if (formulario && listaComentarios) {
    formulario.addEventListener("submit", (e) => {
      e.preventDefault();
      const nombre = document.getElementById("nombreComentario").value.trim();
      const texto = document.getElementById("textoComentario").value.trim();

      if (nombre && texto) {
        const comentario = document.createElement("div");
        comentario.innerHTML = `<strong>${nombre}</strong>: ${texto}`;
        listaComentarios.appendChild(comentario);
        formulario.reset();
      }
    });
  }
});
