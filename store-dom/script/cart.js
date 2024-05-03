const cartProductsString = localStorage.getItem('cart');
let cartProducts = JSON.parse(cartProductsString) ?? [];

const cartProductsSelector = document.getElementById('cart-products');
const totalPriceSelector = document.getElementById('total-price');

const setTotal = (products) => {
  let totalPrice = 0;
  products.forEach(product => (totalPrice += product.price * product.quantity));
  totalPriceSelector.textContent = totalPrice.toFixed(2);
}

const printCartProducts = (products) => {
  let templateProducts = '';
  if (products.length > 0) {
    //!generando los elementos del carrito
    for (let product of products) {
      templateProducts += getCartProductTemplate(product);
    }
    //!obteniendo el total a pagar
    setTotal(products);
  } else {
    templateProducts = getMessageNoProducts();
  }
  cartProductsSelector.innerHTML = templateProducts;
}

const changeQuantity = (event) => {
  const newQuantity = Number(event.target.value);
  const idProduct = Number(event.target.id);
  const colorProduct = event.target.dataset.color;

  const product = cartProducts.find(product => product.id === idProduct && product.color === colorProduct);
  product.quantity = newQuantity;

  localStorage.setItem('cart', JSON.stringify(cartProducts));
  setTotal(cartProducts);
}

const getMessageNoProducts = () => {
  return `
    <h1 class="no-products-message">No hay productos en el carrito.</h1>
  `;
}

const getCartProductTemplate = (product) => {
  return `
    <div class="cart-product">
      <img src="${product.image}" height="150" alt="" />
      <div class="cart-product-detail">
          <span class="cart-product-title">${product.title}</span>
          <span class="cart-product-color">${product.color}</span>
          <span class="cart-product-description">${product.description}</span>
          <input id="${product.id}" data-color="${product.color}" type="number" min="1" value="${product.quantity}" class="cart-product-quantity" onchange="changeQuantity(event)" />
      </div>
      <div class="price">S/${product.price.toFixed(2)}</div>
    </div>
  `;
}

printCartProducts(cartProducts);
