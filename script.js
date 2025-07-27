// Cambio de idioma
document.getElementById("languageSwitcher").addEventListener("change", function () {
  const lang = this.value;
  document.querySelectorAll("[data-lang-es]").forEach((el) => {
    el.textContent = el.dataset["lang" + lang];
  });
});

// Contador 24h
const countdownDate = new Date().getTime() + 24 * 60 * 60 * 1000;
const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;
  if (distance < 0) {
    document.getElementById("countdown").textContent = "Finalizado";
    clearInterval(countdown);
    return;
  }
  const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("countdown").textContent = `${h}h ${m}m ${s}s`;
}, 1000);
