window.onload = function() {
  var botones = document.getElementsByClassName("miBoton");

  for (var i = 0; i < botones.length; i++) {
    var boton = botones[i];
    var porcentaje = 0; // Porcentaje inicial
    var porcentajeCirculo = boton.querySelector(".porcentaje-circulo");
    var porcentajeBorde = boton.querySelector(".porcentaje-borde");
    var porcentajeNumero = boton.querySelector(".porcentaje-numero");

    boton.addEventListener("click", function() {
      if (porcentaje === 0) {
        porcentaje = 80; // Porcentaje a mostrar
        porcentajeCirculo.style.display = "block";
        porcentajeNumero.style.display = "block";
      } else {
        porcentaje = 0;
        porcentajeCirculo.style.display = "none";
        porcentajeNumero.style.display = "none";
      }

      // Establecer el tamaño del borde circular según el porcentaje
      var circunferencia = 2 * Math.PI * porcentajeBorde.getAttribute("r");
      var longitudDasharray = (100 - porcentaje) / 100 * circunferencia;
      porcentajeBorde.style.strokeDasharray = longitudDasharray + " " + circunferencia;

      // Actualizar el texto del porcentaje
      porcentajeNumero.textContent = porcentaje + "%";
    });
  }
};
