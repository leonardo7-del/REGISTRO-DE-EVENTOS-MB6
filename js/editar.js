const formEditar = document.getElementById("formEditar");
const mensaje = document.getElementById("mensaje");

let eventos = JSON.parse(localStorage.getItem("eventos")) || [];
let eventoEditar = JSON.parse(localStorage.getItem("eventoEditar"));

// Precargar datos en formulario
if (eventoEditar) {
  document.getElementById("id").value = eventoEditar.index;
  document.getElementById("nombre").value = eventoEditar.nombre;
  document.getElementById("fecha").value = eventoEditar.fecha;
  document.getElementById("lugar").value = eventoEditar.lugar;
  document.getElementById("descripcion").value = eventoEditar.descripcion;
}

formEditar.addEventListener("submit", (e) => {
  e.preventDefault();

  const index = document.getElementById("id").value;
  const nombre = document.getElementById("nombre").value.trim();
  const fecha = document.getElementById("fecha").value;
  const lugar = document.getElementById("lugar").value.trim();
  const descripcion = document.getElementById("descripcion").value.trim();

  if (!nombre || !fecha || !lugar || !descripcion) {
    mostrarMensaje("⚠️ Todos los campos son obligatorios.", "error");
    return;
  }

  eventos[index] = { nombre, fecha, lugar, descripcion };
  localStorage.setItem("eventos", JSON.stringify(eventos));
  localStorage.removeItem("eventoEditar");

  mostrarMensaje("✅ Evento actualizado con éxito.", "exito");

  setTimeout(() => {
    window.location.href = "index.html";
  }, 1500);
});

function mostrarMensaje(texto, tipo) {
  mensaje.textContent = texto;
  mensaje.className = tipo;
  setTimeout(() => {
    mensaje.textContent = "";
    mensaje.className = "";
  }, 3000);
}
