function solve() {
  const shoppingCard = document.querySelectorAll(".shopping-cart");
  const products = Array.from(document.querySelectorAll(".product")),
    result = document.querySelector("textarea"),
    checkout = document.querySelector(".checkout"),
    buttons = document.querySelectorAll("button");

  let checkSum = 0;
  let list = [];

  shoppingCard.forEach((el) => {
    el.addEventListener("click", (btn) => {



    });
  });

  products.forEach((element) => {
    element.addEventListener("click", (btn) => {
      if (
        btn.target &&
        btn.target.matches(".add-product") &&
        !btn.target.matches(".disable")
      ) {
        btn.preventDefault();
        let productName = element.children[1].firstElementChild.textContent;
        let productPrice = Number(element.children[3].textContent);

        checkSum += productPrice;
        if (list.includes(productName) === false) {
          list.push(productName);
        }
        result.value += `Added ${productName} for ${productPrice.toFixed(
          2
        )} to the cart.\n`;
      }
    });
  });
  checkout.addEventListener("click", (btn) => {
    if (btn.target && !btn.target.matches(".disable")) {
      btn.preventDefault();
      result.value += `You bought ${list.join(", ")} for ${checkSum.toFixed(
        2
      )}.`;
    }
    btn.target.classList.add("disable");
    buttons.forEach((el) => {
      el.classList.add("disable");
    });
  });
}
