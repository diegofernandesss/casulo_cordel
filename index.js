import listaEquipe from "./listaEquipe.js";
import listaEventos from "./listaEventos.js";
import listaIndicacoes from "./listaIndicacoes.js";
import listaApostila from "./listaApostila.js";


let loading = `
<div class="main" id="load">
    <div class="loading">
        <img src="imagem/Perfil.svg" alt="Logo" class="logo">
        <h4>CASULO CORDEL</h4>
        <div class="animation-bar"></div>
    </div>
</div>
`
let destino = $("#destinoAviso");

destino.append(loading);
setTimeout(function(){
  $("header").remove()
}, 2000)



for (let equipe of listaEquipe){
  const cardEquipe = `
                    <div class="integrante">
                      <img class="imagemIntegrante" src=${equipe.imagem}>
                      <div class="descricao">
                          <p>${equipe.nome}</p>
                          <p>${equipe.funcao}</p>       
                      </div>
                    </div>
                      `
  let rowEquipe = document.getElementById("rowEquipe");
  rowEquipe.insertAdjacentHTML("beforeend", cardEquipe)
}

for (let evento of listaEventos){
  const cardEvento = `
                  <div class="imgEvento">
                    <img class="imagemEvento" src=${evento.imagem}>
                    <div class="descricao-evento">
                      <p>${evento.tituloEvento}</p>
                      <p>${evento.data}</p>
                      <button onclick="window.open('${evento.linkBtn}', '_blank')">Veja mais fotos</a></button>
                    </div>
                  </div>
                  `
  let rowEvento = document.getElementById("rowEvento");
  rowEvento.insertAdjacentHTML("beforeend", cardEvento)
}

for (let indicacao of listaIndicacoes){
  const cardIndicacao = `
                          <div class="imgEvento">
                            <img src=${indicacao.imagem}>
                            <div class="descricao-indicacao">
                              <p>${indicacao.tituloIndic}</p>
                              <p>${indicacao.autor}</p>
                              <button onclick="window.open('${indicacao.linkBtn}', '_blank')">Confira aqui</button>
                            </div>
                          </div>
                          `

  let rowIndicacoes = document.getElementById("rowIndicacoes");
  rowIndicacoes.insertAdjacentHTML("beforeend", cardIndicacao)
}

for (let apostila of listaApostila){
  const cardApostila = `
              <div class="apostila">
                  <img src=${apostila.imagem}>
                  <div class="descricao-apostila">                    
                    <span>${apostila.tituloApost}</span>
                    <p>${apostila.descricao}}</p>
                    <p>${apostila.data}</p>
                    <ul class="botoes">
                      <li><button onclick="window.open('${apostila.btnBaixar}', '_blank')">Baixar</button></li>
                      <li><button onclick="window.open('${apostila.btnVisualizar}', '_blank')">Visualizar</button></li>
                      <li><button onclick="window.open('${apostila.btnMarcaPag}', '_blank')">Marca Página</button></li>
                    </ul>
                  </div>
              </div> `
  let rowApostila = document.getElementById("rowApostila");
  rowApostila.insertAdjacentHTML("beforeend", cardApostila);
}


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
  $(".imgEvento").fadeOut(10).fadeIn(1000)
}

btnIndicacoes.addEventListener("click", abrirModalIndicacoes)
window.onclick = function (event){
  const modalIndicacoes = document.getElementById("modalIndicacoes")
  if (event.target == modalIndicacoes){
    abrirModalIndicacoes()
  }
}






