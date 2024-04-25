const productImageSection = document.getElementById('product-images')
const productDescriptionSection = document.getElementById('product-description')
const productCheckoutSection = document.getElementById('product-checkout')

const query = location.search;
const params = new URLSearchParams(query);
const id = params.get('id');

const printDetails = (productId) => {
  const product = products.find(product => product.id === Number(productId));
  productImageSection.innerHTML = getProductImageTemplate(product);
  productDescriptionSection.innerHTML = getProductDescriptionTemplate(product);
  productCheckoutSection.innerHTML = getProductCheckoutTemplate(product);
}

const getProductImageTemplate = (product) => {
  let images = product.images.map((x, index) => `<div class="thumbnail-container"><img src="${x}" alt="miniatura ${index + 1}"/></div>`);
  return `
    ${images.join('')}
    <img class="main-image" src="${product.images[0]}" alt="" />
  `;
}

const getProductDescriptionTemplate = (product) => {
  let colors = product.colors.map(x => `<option>${x}</option>`);
  return `
    <h1 class="title">${product.title}</h1>
    <form class="selector">
        <fieldset>
            <label class="label" for="color">Color</label>
            <select id="color">
                ${colors.join('')}
            </select>
        </fieldset>
    </form>
    <p class="description">${product.description}</p>
  `;
}

const getProductCheckoutTemplate = (product) => {
  return `
    <div class="checkout-container">
      <span class="checkout-total-label">Total:</span>
      <h2 class="checkout-total-price">S/${product.price}</h2>
      <p class="checkout-description">Incluye impuestos, pero si quieres los evadimos por ti.</p>
      <ul class="checkout-policy-list">
        <li>
            <span class="policy-icon"><img src="assets/truck.png" alt="" /></span>
            <span class="policy-desc">Agregar el producto al carrito para conocer los precios de envío.</span>
        </li>
        <li>
            <span class="policy-icon"><img src="assets/plane.png" alt="" /></span>
            <span class="policy-desc">Lo recibes al instante, ni cuenta te vas a dar.</span>
        </li>
      </ul>
      <div class="checkout-process">
        <div class="top">
          <input type="number" value="1" min="1" max="10">
          <button class="btn-primary">Comprar</button>
        </div>
        <div class="bottom">
          <button class="btn-outline">Agregar al carrito</button>
        </div>
      </div>
    </div>
  `;
}

printDetails(id)