// Injeta a barra lateral (logo + navegação) em qualquer página.
// A página define window.ACTIVE_NAV = "trabalhos" | "sobre" | "contato"

function renderSidebar() {
  const active = window.ACTIVE_NAV || "";
  const mount = document.getElementById("sidebar");
  if (!mount) return;

  mount.innerHTML = `
    <a href="index.html" class="logo" aria-label="${SITE.name} — início">
      <img src="assets/logo.svg" alt="${SITE.name} — início">
    </a>
    <nav class="primary-nav">
      <a href="index.html" class="${active === "trabalhos" ? "active" : ""}">trabalhos</a>
      <a href="sobre.html" class="${active === "sobre" ? "active" : ""}">sobre mim</a>
      <a href="contato.html" class="${active === "contato" ? "active" : ""}">contato</a>
    </nav>
  `;
}

document.addEventListener("DOMContentLoaded", renderSidebar);
