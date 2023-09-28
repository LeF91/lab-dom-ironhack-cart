// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  let priceProduct = product.querySelector(".price span");
  let quantityProduct = product.querySelector(".quantity input");

  let price = parseFloat(priceProduct.innerHTML);
  let quantity = parseInt(quantityProduct.value);

  const subTotal = price * quantity;
  const subTotalProduct = product.querySelector(".subtotal span");

  subTotalProduct.innerHTML = subTotal.toFixed(2);

  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // end of test

  // ITERATION 2

  const productRows = document.getElementsByClassName("product");

  for (const productRow of productRows) {
    updateSubtotal(productRow);
  }

  // ITERATION 3

  let totalPrice = 0;

  for (const productRow of productRows) {
    const subTotal = updateSubtotal(productRow);
    totalPrice += subTotal;
  }

  const totalProduct = document.getElementById("total-value");
  totalProduct.textContent = totalPrice.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
}

// ITERATION 5

function createProduct() {}
window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
