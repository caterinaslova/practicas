const movimientos = document;
const encabezado = document.querySelector("header");
const flecha = document.getElementById("contenedor-flecha");
const fecha = document.getElementById("fecha");


window.onscroll= function(){

    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){

        flecha.style.display= "block";
    }else{
        flecha.style.display="none";
    }
}




document.addEventListener('scroll',()=>{
   
    if (window.scrollY>=20){
      
        encabezado.classList.add("oscurecer");
    }else{
        encabezado.classList.remove("oscurecer");
    }
});

flecha.addEventListener("click",()=>{
    window.scrollTo({
        top:0
    })
});

fecha.innerHTML = (new Date()).getFullYear();

function abrirMenu(){
    if (respuesta.style.display === "block"){
         respuesta.style.display="none";
    }else{
         respuesta.style.display="block";
    }
  
}

//usando selectores dentro del elemento
const questions = document.querySelectorAll(".cuadro");

questions.forEach(function (question) {
  const btn = question.querySelector(".abridor");


  btn.addEventListener("click", function () {


    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});

// atravesando el  dom
// const btns = document.querySelectorAll(".abridor");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;

//     question.classList.toggle("show-text");
//   });
// });


const menuHamburguesa = document.querySelector(".menu-hamburguesa");
const menuOpciones = document.querySelector(".menu-nav")
const lasopciones = document.querySelectorAll(".menu-nav a")
const lasRayasIconoMenu = document.querySelectorAll(".menu-hamburguesa span")



menuHamburguesa.addEventListener("click",()=>{
    menuOpciones.classList.toggle("ver-menu-nav");

    lasRayasIconoMenu[0].classList.toggle('primerRayaCerrar');
    lasRayasIconoMenu[1].classList.toggle('segundaRayaCerrar');
    lasRayasIconoMenu[2].classList.toggle('tercerRayaCerrar');
    lasopciones.forEach(opcion=>{
        opcion.onclick = ()=>{
            menuOpciones.classList.remove("ver-menu-nav");
            lasRayasIconoMenu[0].classList.remove('primerRayaCerrar');
            lasRayasIconoMenu[1].classList.remove('segundaRayaCerrar');
            lasRayasIconoMenu[2].classList.remove('tercerRayaCerrar');

        }
    })
});


// tarjeta con TAB

const titulos = document.querySelectorAll('.titulo');
const detalle1 = document.querySelector('.detalle-1');
const detalle2 = document.querySelector('.detalle-2');
const detalle3 = document.querySelector('.detalle-3');




titulos.forEach((titulo)=>{
   
    titulo.addEventListener("click",()=>{
       
    if (titulo.innerHTML==="HTML"){
        detalle1.classList.remove('ocultar')
        detalle1.classList.add('ver');
        detalle2.classList.remove('ver');
        detalle2.classList.add('ocultar');
        detalle3.classList.remove('ver');
        detalle3.classList.add('ocultar');
    }
    if (titulo.innerHTML==="CSS"){
        detalle1.classList.add('ocultar');
        detalle1.classList.remove('ver')
        detalle2.classList.remove('ocultar');
        detalle2.classList.add('ver');
        detalle3.classList.remove('ver');
        detalle3.classList.add('ocultar');
    }
    if (titulo.innerHTML==="Javascript"){
        detalle1.classList.remove('ver')
        detalle1.classList.add('ocultar');
        detalle2.classList.remove('ver');
        detalle2.classList.add('ocultar');
        detalle3.classList.remove('ocultar');
        detalle3.classList.add('ver');
    }

    titulos.forEach(accion=>{
        if (accion===titulo){
            accion.style.background = "rosybrown";
            accion.style.color = "white";
        }else{
            accion.style.background = "white";
            accion.style.color= "black";
        }
    })

    });

});

const form = document.getElementById("formulario");
const email = document.getElementById("email");
const password = document.getElementById("password");
// const toggle = document.getElementById("toggle");

// Mostrar/ocultar contraseña
// toggle.addEventListener("click", () => {
//   password.type = password.type === "password" ? "text" : "password";
// });

// Regex email real
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let valido = true;

  const errorEmail = email.parentElement.parentElement.querySelector(".error");
  const errorPassword = password.parentElement.parentElement.querySelector(".error");

  errorEmail.textContent = "";
  errorPassword.textContent = "";

  // Validación email
  if (!emailRegex.test(email.value)) {
    errorEmail.textContent = "Email inválido";
    valido = false;
  }

  // Validación contraseña
  if (password.value.length < 6) {
    errorPassword.textContent = "Mínimo 6 caracteres";
    valido = false;
  }

  if (valido) {
    alert("Login exitoso 🚀");
  }
});


// galeria-foto

const fotos = document.querySelectorAll(".foto-galeria");
const btnIzq = document.querySelector(".btn-izq");
const btnDer = document.querySelector(".btn-der");

fotos.forEach((foto,posicion)=>{
    foto.style.left=`${posicion * 100}%`
})

let contador = 0;

btnIzq.onclick = ()=>{

    contador--;
    if (contador < 0){
        contador = (fotos.length - 1);
    }
    mostrarFotos()
}

btnDer.onclick = function(){
    contador++  ;
    if (contador > (fotos.length - 1)){
        contador = 0;
    }
   mostrarFotos()
}

const mostrarFotos = ()=>{
    fotos.forEach((foto)=>{
        foto.style.transform = `translateX(-${(contador) * 100}%)`;
    })
}

// menu lateral

const menuLateral = document.querySelectorAll(".menu-lateral-proyecto p");
const detalleOpciones = document.querySelectorAll(".detalle-opcion-elegida .detalle")


menuLateral.forEach((opcion,indice)=>{
    opcion.onclick = ()=>{
        const opcionElegida = (normalizarTexto(opcion.lastElementChild.textContent));
        detalleOpciones.forEach(cadaDiv=>{
            if(cadaDiv.id !== opcionElegida){
                cadaDiv.style.display = "none"
            }else{
                cadaDiv.style.display = "flex"
            }
        })
    }
});



function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")                 // separa acentos
    .replace(/[\u0300-\u036f]/g, "")  // elimina acentos
    .replace(/\s+/g, "");             // elimina espacios
}

// banner

const track = document.getElementById("track");
track.innerHTML += track.innerHTML;

//subopciones

const dropdowns = document.querySelectorAll(".dropdown a");

dropdowns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const submenu = btn.nextElementSibling;
    const arrow = btn.querySelector("span:last-child");

    // cerrar otros
    document.querySelectorAll(".submenu").forEach(menu => {
      if (menu !== submenu) {
       
        menu.style.height="0";
        // 🔴 sacar rotación de otras flechas
        const otherArrow = menu.previousElementSibling.querySelector("span:last-child");
        otherArrow.classList.remove("rotate");
    }
    });

    // toggle altura
    const isOpen = submenu.style.height === `${ submenu.scrollHeight}px`;
    submenu.style.height = isOpen ? "0" : submenu.scrollHeight + "px";

    // toggle flecha
    arrow.classList.toggle("rotate", !isOpen);
     
  });
});

// sorpresa

// cursos
const toggle = document.querySelector('.toggle-sorpresa');
const menu = document.querySelector('.menu-sorpresa');



toggle.onclick = function(){
   menu.classList.toggle('active')
    if (toggle.textContent== "Ver +"){
      toggle.textContent= "Ver -"
   }else{
      toggle.textContent= "Ver +"
   }
  
   
}


