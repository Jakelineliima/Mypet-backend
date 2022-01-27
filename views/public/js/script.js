// === Menu Mobile ===

function initMenu() {
  const btnMobile = document.getElementById("btn-mobile");

  function toggleMenu() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
  }

  btnMobile.addEventListener("click", toggleMenu);
}
initMenu();

$(function () {
  $("#telefone").inputmask({
    mask: "(99)99999-9999",
  });
});

$(function () {
  $("#cpf").inputmask({
    mask: "999-999-999-99",
  });
});

$(function () {
  $("#peso").inputmask({
    mask: "99,9",
  });
});


