//Definição das variáveis
let btnEquipe = document.getElementById("equipe");
let btnApostilas = document.getElementById("apostilas");
let btnEventos = document.getElementById("eventos");
let btnIndicacoes = document.getElementById("indicacoes");


//Selecionando a lista de botões para deixar ativo ao clicar
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

//Função de abrir modal da Equipe
let modalEquipe = document.getElementById("modalEquipe");
let atualStyleEquipe = modalEquipe.style.display;
function abrirModalEquipe() { 
  if (atualStyleEquipe != 'none') {
    modalEquipe.style.display= 'block'
    modalApostilas.style.display = 'none'
    modalEventos.style.display = 'none'
    modalIndicacoes.style.display = 'none'
  }
  $(".integrante").fadeOut(10).fadeIn(1000)
}

btnEquipe.addEventListener("click", abrirModalEquipe)
window.onclick = function(event) {
  // event.preventDefault()
  const modalEquipe = document.getElementById("modalEquipe")
  if (event.target == modalEquipe) {
    abrirModalEquipe()
    
  } 
}


//Função de abrir modal das Apostilas
let modalApostilas = document.getElementById("modalApostilas");
let atualStyleApostilas = modalApostilas.style.display
function abrirModalApostilas(){

  if (atualStyleApostilas != 'none'){
    modalEquipe.style.display = 'none'
    modalEventos.style.display = 'none'
    modalIndicacoes.style.display = 'none'
    modalApostilas.style.display= 'block'

  } 
  $(".apostila").fadeOut(10).fadeIn(1000)
}

btnApostilas.addEventListener("click", abrirModalApostilas)
window.onclick = function(event) {
  // event.preventDefault()
  const modalApostilas = document.getElementById("modalApostilas")
  if (event.target == modalApostilas) {
    abrirModalApostilas()
    
  }
}

//Abrir modal de Eventos
let modalEventos = document.getElementById("modalEventos")
let atualStyleEventos = modalEventos.style.display
function abrirModalEventos(){
  if (atualStyleEventos != 'none'){
    modalEquipe.style.display = 'none'
    modalApostilas.style.display = 'none'
    modalIndicacoes.style.display = 'none'
    modalEventos.style.display = 'block'
    
  }
  $(".imgEvento").fadeOut(10).fadeIn(1000)
}

btnEventos.addEventListener("click", abrirModalEventos)
window.onclick = function(event) {
  // event.preventDefault()
  const modalEventos = document.getElementById("modalEventos")
  if (event.target == modalEventos){
    abrirModalEventos()
  }
}

//Abrir modal de Indicações
let modalIndicacoes = document.getElementById("modalIndicacoes")
let atualStyleIndicacoes = modalIndicacoes.style.display
function abrirModalIndicacoes(){
  if (atualStyleIndicacoes != 'none'){
    modalEquipe.style.display = 'none'
    modalApostilas.style.display = 'none'
    modalEventos.style.display = 'none'
    modalIndicacoes.style.display = 'block'
  }
  $(".imgIndicacao").fadeOut(10).fadeIn(1000)
}

btnIndicacoes.addEventListener("click", abrirModalIndicacoes)
window.onclick = function (event){
  const modalIndicacoes = document.getElementById("modalIndicacoes")
  if (event.target == modalIndicacoes){
    abrirModalIndicacoes()
  }
}




