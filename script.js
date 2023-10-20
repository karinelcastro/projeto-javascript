const selecionarTema = document.querySelector("select");
const corpoDaPagina = document.querySelector("body");
const btnAdicionar = document.querySelector("#btnAdicionar");
const listaDeTarefas = document.querySelector(".listaDeTarefas");
const input = document.querySelector("input");

/*FUNÇÕES*/
function adicionarTarefa() {
  const valorDoInput = input.value;
  if (valorDoInput !== "") {
    const li = document.createElement("li");
    li.classList.add("tarefa");
    const img = document.createElement("img");
    img.setAttribute("src", "lixeira.svg");
    img.addEventListener("click", apagarItem);
    const p = document.createElement("p");
    p.innerHTML = valorDoInput;
    li.appendChild(p);
    li.appendChild(img);
    listaDeTarefas.appendChild(li);
    apagarFocar();
  }else{
    alert("Preencha o campo")
    apagarFocar()
  }
}

function apagarItem(evento) {
  const alvo = evento.target.parentNode;
  alvo.remove();
}

function apagarFocar() {
  input.focus();
  input.value = "";
}

/*EVENTOS*/
selecionarTema.addEventListener("change", (evento) => {
  if (evento.target.value === "escuro") {
    corpoDaPagina.classList.add("escuro");
    btnAdicionar.classList.add("ativo");
    selecionarTema.classList.add("ativo");
  } else {
    corpoDaPagina.classList.remove("escuro");
    btnAdicionar.classList.remove("ativo");
    selecionarTema.classList.remove("ativo");
  }
})

btnAdicionar.addEventListener("click", adicionarTarefa);
