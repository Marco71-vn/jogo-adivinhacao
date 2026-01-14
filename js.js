const obterElemento = (id) => document.getElementById(id);

const input = obterElemento("palpite");
const botao = obterElemento("btnJogar");
const mensagem = obterElemento("mensagem");
const tentativasTexto = obterElemento("tentativasTexto");

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let maxTentativas = 10;
let tentativasRestantes = maxTentativas;

tentativasTexto.textContent = `Tentativas restantes: ${tentativasRestantes}`;

function jogar(palpite) {
  tentativasRestantes--;

  if (palpite === numeroSecreto) {
    mensagem.textContent = `Voçe acertou! O numero era ${numeroSecreto}.`;
    botao.disabled = true;
    return;
  }

  if (tentativasRestantes === 0) {
    mensagem.textContent = `Voçe perdeu! o numero era ${numeroSecreto}`;
    botao.disabled = true;
    return;
  }

  if (palpite < numeroSecreto) {
    mensagem.textContent = "O numero é maior";
  } else {
    mensagem.textContent = "O numero é menor";
  }

  tentativasTexto.textContent = `Tentativas restantes: ${tentativasRestantes}`;
}

botao.addEventListener("click", () => {
  const valor = parseInt(input.value);

  if (isNaN(valor) || valor < 1 || valor > 100) {
    mensagem.textContent = "Digite um numero valido entre  1 e 100.";
    return;
  }

  jogar(valor);

  input.value = "";
  input.focus();
});
