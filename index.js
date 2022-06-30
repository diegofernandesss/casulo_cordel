let btnEquipe = document.getElementById("equipe");
let btnApostilas = document.getElementById("apostilas");
let btnEventos = document.getElementById("eventos");
let btnIndicacoes = document.getElementById("indicacoes");

let modalEquipe = document.getElementById("modalEquipe");
let atualStyleEquipe = modalEquipe.style.display;



let list = document.querySelectorAll(".list");
for (let i = 0; i< list.length; i++) {
  list[i].onclick = function(){
    let j = 0;
    while(j < list.length){
      list[j++].className = 'list';
    }
    list[i].className = 'active';
  }
}
function abrirModalEquipe() {
  
  if (atualStyleEquipe != 'none') {
    modalEquipe.style.display= 'block'
    modalApostilas.style.display = 'none'
    modalEventos.style.display = 'none'
  }

  else {

  }
}

let modalApostilas = document.getElementById("modalApostilas");
let atualStyleApostilas = modalApostilas.style.display
function abrirModalApostilas(){

  if (atualStyleApostilas != 'none'){
    modalEquipe.style.display = 'none'
    modalEventos.style.display = 'none'

    modalApostilas.style.display= 'block'

  } else {
    
  }
}

let modalEventos = document.getElementById("modalEventos")
let atualStyleEventos = modalEventos.style.display

function abrirModalEventos(){
  if (atualStyleEventos != 'none'){
    modalEquipe.style.display = 'none'
    modalApostilas.style.display = 'none'
    modalEventos.style.display = 'block'
    
  }
}

btnEquipe.addEventListener("click", abrirModalEquipe)
window.onclick = function(event) {
  // event.preventDefault()
  const modalEquipe = document.getElementById("modalEquipe")
  if (event.target == modalEquipe) {
    abrirModalEquipe()
    
  } else {
    
  }
}

btnApostilas.addEventListener("click", abrirModalApostilas)
window.onclick = function(event) {
  // event.preventDefault()
  const modalApostilas = document.getElementById("modalApostilas")
  if (event.target == modalApostilas) {
    abrirModalApostilas()
    
  }
}

btnEventos.addEventListener("click", abrirModalEventos)
window.onclick = function(event) {
  // event.preventDefault()
  const modalEventos = document.getElementById("modalEventos")
  if (event.target == modalEventos){
    abrirModalEventos()
  }
}



