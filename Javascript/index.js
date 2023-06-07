
//   Confirmacion de envio de formulario

function confirmacion() {
    var respuesta = confirm("¿Estás seguro de enviar el formulario?");
    if (respuesta == true) {
      alert("Formulario enviado correctamente.");
    } else {
      alert("El envío del formulario ha sido cancelado.");
    }
}

// Funciones para mostrar con una alerta el conocimiento que poseo en cada programa

function psAlerta(){
    alert("Mi conocimiento de Photoshop es de 80%")
}

function ilAlerta(){
    alert("Mi conocimiento de Illustrator es de 80%")
}

function aeAlerta(){
    alert("Mi conocimiento de After Effects es de 60%")
}

function idAlerta(){
    alert("Mi conocimiento de Indesign es de 30%")
}

function xdAlerta(){
    alert("Mi conocimiento de Adobe xD es de 50%")
}

function prAlerta(){
    alert("Mi conocimiento de Premier es de 20%")
}

function figmaAlerta(){
    alert("Mi conocimiento de Figma es de 70%")
}

function htmlAlerta(){
    alert("Mi conocimiento de HTML es de 40%")
}

function cssAlerta(){
    alert("Mi conocimiento de CSS es de 40%")
}

function jsAlerta(){
    alert("Mi conocimiento de Javascript es de 30%")
}


// Menu Hamburgesa

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document-querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",() =>{
   hamburger.classList.remove("active");
   navMenu.classList.remove("active");
 }));