const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const value = document.querySelector(".value");

plus.addEventListener("click", () => {
  value.textContent = Number(value.textContent) + 1;
});
minus.addEventListener("click", () => {
  value.textContent = Number(value.textContent) - 1;
});
