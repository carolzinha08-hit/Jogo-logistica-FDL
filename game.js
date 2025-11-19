function iniciarJogo() {
    document.querySelectorAll(".tela").forEach(t => t.classList.remove("ativa"));
    document.getElementById("game-container").classList.add("ativa");

    carregarFaseEstoque();
}

/* --- FASE 1: ESTOQUE --- */
function carregarFaseEstoque() {
    document.getElementById("game-container").innerHTML =
        "<h2>📦 Fase 1 – Organização de Estoque</h2>" +
        "<p>Em breve você poderá arrastar produtos para as prateleiras! (estoque.js)</p>";
}

/* --- FASE 2: PICKING --- */
function carregarFasePicking() {
    document.getElementById("game-container").innerHTML =
        "<h2>🛒 Fase 2 – Picking</h2>" +
        "<p>Aguarde! Esta fase será carregada pelo módulo picking.js.</p>";
}

/* --- FASE 3: ROTAS --- */
function carregarFaseRotas() {
    document.getElementById("game-container").innerHTML =
        "<h2>🗺️ Fase 3 – Rotas</h2>" +
        "<p>O sistema de roteirização será carregado pelo módulo rotas.js.</p>";
}

/* --- RESULTADOS --- */
function carregarResultados() {
    document.getElementById("game-container").innerHTML =
        "<h2>🏆 Resultado Final</h2>" +
        "<p>Resumo da sua operação aparecerá aqui. (resultados.js)</p>";
}
