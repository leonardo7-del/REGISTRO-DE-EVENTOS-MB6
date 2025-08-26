const formRegistrar = document.getElementById("formRegistrar");
const mensaje = document.getElementById("mensaje");

let eventos = JSON.parse(localStorage.getItem("eventos")) || [];

formRegistrar.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const fecha = document.getElementById("fecha").value;
  const lugar = document.getElementById("lugar").value.trim();
  const descripcion = document.getElementById("descripcion").value.trim();

  if (!nombre || !fecha || !lugar || !descripcion) {
    mostrarMensaje("⚠️ Todos los campos son obligatorios.", "error");
    return;
  }

  const nuevoEvento = { nombre, fecha, lugar, descripcion };
  eventos.push(nuevoEvento);
  localStorage.setItem("eventos", JSON.stringify(eventos));

  mostrarMensaje("✅ Evento registrado con éxito.", "exito");
  formRegistrar.reset();
});

function mostrarMensaje(texto, tipo) {
  mensaje.textContent = texto;
  mensaje.className = tipo; // usa CSS para dar color según "error" o "exito"
  setTimeout(() => {
    mensaje.textContent = "";
    mensaje.className = "";
  }, 3000);
}
