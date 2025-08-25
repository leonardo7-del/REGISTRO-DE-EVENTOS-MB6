// Cargar eventos desde localStorage
let eventos = JSON.parse(localStorage.getItem("eventos")) || [];

// Función para revisar eventos próximos
function revisarRecordatorios() {
  const hoy = new Date();
  const msEnUnDia = 1000 * 60 * 60 * 24;

  eventos.forEach(evento => {
    const fechaEvento = new Date(evento.fecha);
    const diferencia = Math.ceil((fechaEvento - hoy) / msEnUnDia);

    if (diferencia === 1) {
      alert(`📅 Recordatorio: Mañana es el evento "${evento.nombre}" en ${evento.lugar}`);
    } else if (diferencia === 0) {
      alert(`🚨 Hoy tienes el evento "${evento.nombre}" en ${evento.lugar}`);
    }
  });
}

// Ejecutar al cargar la página
revisarRecordatorios();
