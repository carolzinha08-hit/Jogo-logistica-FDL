let slideAtual = 0;

const slides = [
    "👋 Bem-vindo ao <b>Logística Total!</b><br>Um jogo divertido e educativo sobre o dia a dia da logística.",
    "📦 <b>Fase 1 – Armazém:</b><br>Organize os produtos nas prateleiras arrastando-os para os endereços corretos.",
    "🛒 <b>Fase 2 – Picking:</b><br>Separe os produtos certos para cada pedido da forma mais eficiente possível.",
    "🗺️ <b>Fase 3 – Rotas:</b><br>Monte a rota mais rápida e econômica para entregar todos os pedidos.",
    "🏆 <b>Pronto!</b><br>Agora você já sabe o básico. Clique em <b>Começar</b> e boa sorte! 🚚💨"
];

function abrirTutorial() {
    document.getElementById("tela-inicial").classList.remove("ativa");
    document.getElementById("tutorial").classList.add("ativa");
    mostrarSlide();
}

function mostrarSlide() {
    document.getElementById("tutorial-texto").innerHTML = slides[slideAtual];
}

function proximoSlide() {
    slideAtual++;
    if (slideAtual >= slides.length) {
        iniciarJogo();
        return;
    }
    mostrarSlide();
}
