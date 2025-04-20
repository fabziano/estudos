const botoes = document.querySelectorAll("button[type='submit']");
botoes.forEach(function(btn) {
  if (btn.textContent.trim() === "Submit") {
    btn.textContent = "Enviar";
  }
});
