let lista = JSON.parse(localStorage.getItem("lista")) || []
let indice = -1


let form = document.getElementById("formPaciente")
let tabela = document.getElementById("tabelaPacientes")


function listar() {
  let linhas = ""

  for (let i = 0; i < lista.length; i++) {
    let p = lista[i]
    linhas += `
      <tr onclick="editar(${i})">
        <td>${p.nome}</td>
        <td>${p.status}</td>
        <td>${p.inicioPrevisto}</td>
        <td>${p.inicioCirurgia}</td>
        <td>${p.fimCirurgia}</td>
        <td>${p.saidaPrevista}</td>
      </tr>
    `
  }

  if (tabela) {
    tabela.innerHTML = linhas
  }

  localStorage.setItem("lista", JSON.stringify(lista))
}


if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault()

    let paciente = {
      nome: form.nome.value,
      status: form.status.value,
      local: form.local.value,
      inicioPrevisto: form.inicioPrevisto.value,
      inicioCirurgia: form.inicioCirurgia.value,
      fimCirurgia: form.fimCirurgia.value,
      saidaPrevista: form.saidaPrevista.value
    }

    if (indice >= 0) {
      lista[indice] = paciente
      indice = -1
    } else {
      lista.push(paciente)
    }

    form.reset()
    listar()
  })
}


function editar(i) {
  let p = lista[i]

  form.nome.value = p.nome
  form.status.value = p.status
  form.local.value = p.local
  form.inicioPrevisto.value = p.inicioPrevisto
  form.inicioCirurgia.value = p.inicioCirurgia
  form.fimCirurgia.value = p.fimCirurgia
  form.saidaPrevista.value = p.saidaPrevista

  indice = i
}


let btnNovo = document.getElementById("novo")
if (btnNovo) {
  btnNovo.addEventListener("click", function () {
    form.reset()
    indice = -1
  })
}


let btnApagar = document.getElementById("apagar")
if (btnApagar) {
  btnApagar.addEventListener("click", function () {
    if (indice >= 0) {
      lista.splice(indice, 1)
      indice = -1
      listar()
      form.reset()
    } else {
      alert("Selecione um paciente primeiro!")
    }
  })
}


let btnPainel = document.getElementById("abrirPainel")
if (btnPainel) {
  btnPainel.addEventListener("click", function () {
    window.open(location.pathname + "?painel=1", "_blank")
  })
}


if (tabela) {
  listar()
}


let params = new URLSearchParams(window.location.search)
if (params.get("painel") === "1") {
  document.getElementById("gerenciar").style.display = "none"
  document.getElementById("painel").style.display = "block"

  function atualizarPainel() {
    let dados = JSON.parse(localStorage.getItem("lista")) || []
    let corpo = document.getElementById("painelPacientes")
    let linhas = ""

    for (let i = 0; i < dados.length; i++) {
      let p = dados[i]
      let cor = ""

      if (p.status.includes("Transferido")) {
        cor = "status-azul"
      } else if (p.status.includes("recuperação")) {
        cor = "status-verde"
      } else if (p.status.includes("Pré")) {
        cor = "status-amarelo"
      }

      linhas += `
        <tr class="${cor}">
          <td>${p.nome}</td>
          <td>${p.status}</td>
          <td>${p.inicioPrevisto}</td>
          <td>${p.inicioCirurgia}</td>
          <td>${p.fimCirurgia}</td>
          <td>${p.saidaPrevista}</td>
        </tr>
      `
    }

    corpo.innerHTML = linhas
    document.getElementById("dataHora").textContent = new Date().toLocaleString("pt-BR")
  }

  atualizarPainel()
  setInterval(atualizarPainel, 3000)
}