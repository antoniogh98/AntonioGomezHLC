document.addEventListener('DOMContentLoaded', function () {
    console.log('JavaScript cargado correctamente');
  
    // Ejemplo: Mostrar alerta cuando se hace clic en un botón con id "btn-info"
    const btn = document.getElementById('btn-info');
    if (btn) {
      btn.addEventListener('click', function () {
        alert('¡Gracias por visitar mi PortaFolio!');
      });
    }
  });
  