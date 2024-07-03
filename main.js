const input = document.getElementById("email");
const inputErr = document.querySelector(".invalid");
const inputedEmail = document.querySelector(".inputed");

function emailValidate() {
  let validStr = /^[a-z\_.\-0-9]*[@][a-z]*[\.][a-z]{2,4}$/;

  if (!input.value.match(validStr)) {
    inputErr.innerHTML = "Valid email required";
    inputErr.style.color = "var(--clr-accent)";
    input.style.outlineColor = "var(--clr-accent)";
    input.style.color = "var(--clr-accent)";
    return false;
  }
  inputErr.innerHTML = "OK";
  inputErr.style.color = "yellowgreen";
  input.style.outlineColor = "yellowgreen";
  input.style.color = "yellowgreen";
  return true;
}

function submit() {
  if (emailValidate() == true) {
    document.querySelector("main").classList.add("none");
    document.querySelector(".bg-continer-success").classList.remove("none");
    inputedEmail.innerHTML = input.value;
    inputedEmail.style.color = "yellowgreen";
  }
}

document.querySelector(".dismiss").addEventListener("click", () => {
  document.querySelector("main").classList.remove("none");
  document.querySelector(".bg-continer-success").classList.add("none");
  input.value = "";
  inputErr.innerHTML = "";
  input.style.outlineColor = "black";
});
