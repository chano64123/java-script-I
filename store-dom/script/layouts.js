//? PARTE 01 NAV
const socialSelector = document.getElementById("social");

const optionsSocial = [
  { iconClass: "fa-brands fa-facebook", linkTo: "#" },
  { iconClass: "fa-brands fa-instagram", linkTo: "#" },
  { iconClass: "fa-solid fa-cart-shopping", linkTo: "cart.html" },
  { iconClass: "fa-solid fa-star", linkTo: "favorites.html" },
];

for (let option of optionsSocial) {
  const listItem = document.createElement("li"); //nuevo
  
  const anchor = document.createElement("a");
  anchor.href = option.linkTo;

  const icon = document.createElement("i");
  icon.className = option.iconClass;

  anchor.appendChild(icon)
  listItem.appendChild(anchor); //nuevo
  socialSelector.appendChild(listItem);
}

//? PARTE 02 NAV
const navSelector = document.getElementById("nav");

const optionsNav = [
  { title: "Ofertas", linkTo: "#" },
  { title: "Como comprar", linkTo: "#" },
  { title: "Costos y tarifas", linkTo: "#" },
  { title: "Mis productos", linkTo: "#" },
  { title: "Garantia", linkTo: "#" },
];

for (let option of optionsNav) {
  const listItem = document.createElement("li"); //nuevo
  const anchor = document.createElement("a");

  anchor.textContent = option.title;
  anchor.href = option.linkTo;

  listItem.appendChild(anchor); //nuevo
  navSelector.appendChild(listItem);
}

//? PARTE 03 FOOTER
const footerSelector = document.getElementById('footer');

const optionsFooter = [
  [
    { option: "Ofertas de la semana", isPrincipal: true, linkTo: "#" },
    { option: "Laptop", isPrincipal: false, linkTo: "#" },
    { option: "Audio", isPrincipal: false, linkTo: "#" },
    { option: "Auriculares", isPrincipal: false, linkTo: "#" },
  ],
  [
    { option: "Cómo comprar", isPrincipal: true, linkTo: "#" },
    { option: "Formas de pago", isPrincipal: false, linkTo: "#" },
    { option: "Envios", isPrincipal: false, linkTo: "#" },
    { option: "Devoluciones", isPrincipal: false, linkTo: "#" },
  ],
  [
    { option: "Costos y tarifas", isPrincipal: true, linkTo: "#" },
    { option: "Impuestos", isPrincipal: false, linkTo: "#" },
    { option: "Facturación", isPrincipal: false, linkTo: "#" },
  ],
  [
    { option: "Mis pedidos", isPrincipal: true, linkTo: "#" },
    { option: "Pedir nuevamente", isPrincipal: false, linkTo: "#" },
    { option: "Lista de deseos", isPrincipal: false, linkTo: "#" },
  ],
  [
    { option: "Garantía de Entrega", isPrincipal: true, linkTo: "#" },
    { option: "Pedir nuevamente", isPrincipal: false, linkTo: "#" },
    { option: "Lista de deseos", isPrincipal: false, linkTo: "#" },
  ],
];

for (let options of optionsFooter) {
  //!para el div
  const divCol = document.createElement("div");
  divCol.className = "col";

  //!para el ul
  const ul = document.createElement('ul');

  for (let option of options) {
    const li = document.createElement('li');
    //!para el li
    if (option.isPrincipal) {
      li.className = 'col-main-item';
    }

    //! para al ancla
    const anchor = document.createElement('a')
    anchor.href = option.linkTo;
    anchor.textContent = option.option;

    li.appendChild(anchor);
    ul.appendChild(li);
  }

  divCol.appendChild(ul);
  footerSelector.appendChild(divCol);
}
