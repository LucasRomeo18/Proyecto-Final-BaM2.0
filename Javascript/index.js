// comentario de linea control mas corchete de cierre

// let variable2; //Declarada

// const LENGUAJE = "JAVASCRIPT"; //inicializada

// variable2 = 2;

// let variable3 = "un texto";


// console.log(variable3)


const hamburger = document.querySelector(".menu")
const navMenu = document.querySelector(".estilo")

hamburger.addEventListener("click", () =>{
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})


let nombre = "Lucas";
let apellido = "Romeo";
let edad = 33;
let tieneMascota = "Si tiene";


console.log("El nombre es "+nombre);
console.log("El apellido es "+ apellido);
console.log("La edad es "+ edad);
console.log("Tiene mascota? " + tieneMascota);



function showCircle(cx, cy, radius) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);

    setTimeout(() => {
      div.style.width = radius * 2 + 'px';
      div.style.height = radius * 2 + 'px';
    }, 0);
  }

