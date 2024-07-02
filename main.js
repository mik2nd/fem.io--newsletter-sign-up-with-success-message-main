document.querySelector(".submit").addEventListener("click", () => {
  document.querySelector("main").classList.add("none");
  document.querySelector(".bg-continer-success").classList.remove("none");
});
document.querySelector(".dismiss").addEventListener("click", () => {
  document.querySelector("main").classList.remove("none");
  document.querySelector(".bg-continer-success").classList.add("none");
});
