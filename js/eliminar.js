// Función genérica para eliminar eventos
function eliminarEvento(index) {
  let eventos = JSON.parse(localStorage.getItem("eventos")) || [];

  if (confirm("¿Seguro que deseas eliminar este evento?")) {
    eventos.splice(index, 1);
    localStorage.setItem("eventos", JSON.stringify(eventos));
    alert("✅ Evento eliminado correctamente.");
    window.location.reload();
  }
}
