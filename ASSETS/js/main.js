document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementById("irAlCielo");

  if (boton) {
    boton.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});