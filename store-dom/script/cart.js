const cartProductsString = localStorage.getItem('cart');
const cartProducts = JSON.parse(cartProductsString);

const cartProductsSelector = document.getElementById('cart-products');
const totalPriceSelector = document.getElementById('total-price');

const printCartProducts = (products) => {
  //!generando los elementos del carrito
  let templateProducts = '';
  for (let product of products) {
    templateProducts += getCartProductTemplate(product);
  }
  cartProductsSelector.innerHTML = templateProducts;
  //!obteniendo el total a pagar
  let totalPrice = 0;
  products.forEach(product => (totalPrice += product.price * product.quantity));
  console.log(totalPrice);
  totalPriceSelector.textContent = totalPrice.toFixed(2);
}

const getCartProductTemplate = (product) => {
  return `
    <div class="cart-product">
      <img src="${product.image}" height="150" alt="" />
      <div class="cart-product-detail">
          <span class="cart-product-title">${product.title}</span>
          <span class="cart-product-color">${product.color}</span>
          <span class="cart-product-description">${product.description}</span>
          <input type="number" value="${product.quantity}" class="cart-product-quantity" />
      </div>
      <div class="price">S/${product.price.toFixed(2)}</div>
    </div>
  `;
}

if (cartProducts) {
  printCartProducts(cartProducts);
}  