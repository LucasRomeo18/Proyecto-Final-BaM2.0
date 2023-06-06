
// Funcion para ocultar o mostrar el porcentaje en la pagina de habilidades

function togglePorcentaje() {
    var porcentaje = document.querySelector('.porcentaje');
    porcentaje.style.display = (porcentaje.style.display === 'none') ? 'block' : 'none';
  }


//   Confirmacion de envio de formulario

function confirmacion() {
    var respuesta = confirm("¿Estás seguro de enviar el formulario?");
    if (respuesta == true) {
      alert("Formulario enviado correctamente.");
    } else {
      alert("El envío del formulario ha sido cancelado.");
    }
  }