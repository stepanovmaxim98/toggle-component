const prices = document.querySelectorAll(".price");

const originalNumbers = Array.from(prices, (el) => Number(el.innerHTML));

const check = document.querySelector("#check");

check.addEventListener("click", () => {
  if (check.checked) {
    prices.forEach((el) => {
      el.innerHTML = `${(el.innerHTML * 30).toFixed(2)}`;
    });
  } else {
    prices.forEach((el, index) => {
      el.innerHTML = originalNumbers[index];
    });
  }
});
