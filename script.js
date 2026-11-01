const botao = document.querySelector(".botao-painel");

if (botao) {
    const painel = botao.closest(".border-anual, .border");

    if (painel) {
        botao.addEventListener("click", function() {
            painel.classList.toggle("fechado");
        });
    }
}