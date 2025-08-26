// Cargar eventos desde localStorage o array vacío
let eventos = JSON.parse(localStorage.getItem("eventos")) || [];

const tablaEventos = document.getElementById("eventos-body");
const inputBuscar = document.getElementById("buscar");

// Función para renderizar tabla
function mostrarEventos(lista) {
  tablaEventos.innerHTML = "";

  if (lista.length === 0) {
    tablaEventos.innerHTML = `<tr><td colspan="5">No hay eventos registrados</td></tr>`;
    return;
  }

  lista.forEach((evento, index) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${evento.nombre}</td>
      <td>${evento.fecha}</td>
      <td>${evento.lugar}</td>
      <td>${evento.descripcion}</td>
      <td>
        <button onclick="editarEvento(${index})">✏️ Editar</button>
        <button onclick="eliminarEvento(${index})">🗑 Eliminar</button>
      </td>
    `;
    tablaEventos.appendChild(fila);
  });
}

// Buscar eventos
inputBuscar?.addEventListener("input", () => {
  const texto = inputBuscar.value.toLowerCase();
  const filtrados = eventos.filter(
    e =>
      e.nombre.toLowerCase().includes(texto) ||
      e.lugar.toLowerCase().includes(texto)
  );
  mostrarEventos(filtrados);
});

// Eliminar evento
function eliminarEvento(index) {
  if (confirm("¿Seguro que deseas eliminar este evento?")) {
    eventos.splice(index, 1);
    localStorage.setItem("eventos", JSON.stringify(eventos));
    mostrarEventos(eventos);
  }
}

// Editar evento → redirige a editar.html con el id
function editarEvento(index) {
  localStorage.setItem("eventoEditar", JSON.stringify({ index, ...eventos[index] }));
  window.location.href = "editar.html";
}

// Inicial
mostrarEventos(eventos);
