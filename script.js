const botao = document.querySelector( ".botao-painel");
const painel = document.querySelector(".border-anual");
botao.addEventListener("click", function() {
    painel.classList.toggle("fechado");
});