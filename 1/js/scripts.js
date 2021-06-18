const cards = [
  {
    id: 1,
    title: 'Quest-bot',
    subtitle:
      'Writes to new users of the server in a personal message and offers to complete quests. For completing the quest, the user receives roles on the server',
    price: 10,
    image: () =>
      `https://picsum.photos/id/${Math.round(Math.random() * 52)}/52`,
    features: [
      {
        title: 'A lot of levels',
      },
      {
        title: 'Over 100 themes',
      },
    ],
  },
  {
    id: 2,
    title: 'Сredit-bot',
    subtitle:
      'Helps to make a credit assessment and sends this information to the manager',
    price: 10,
    image: () =>
      `https://picsum.photos/id/${Math.round(Math.random() * 52)}/52`,
    features: [
      {
        title: 'Automatization',
      },
    ],
  },
  {
    id: 3,
    title: 'Secret-bot',
    subtitle: 'Information bot for secret customers',
    price: 10,
    image: () =>
      `https://picsum.photos/id/${Math.round(Math.random() * 52)}/52`,
    features: [
      {
        title: 'Info about projects',
      },
      {
        title: 'Admin panel',
      },
      {
        title: 'DB access',
      },
    ],
  },
  {
    id: 4,
    title: 'Spam-bot',
    subtitle: 'Bot with 2 mailing plans (paid and free)',
    price: 10,
    image: () =>
      `https://picsum.photos/id/${Math.round(Math.random() * 52)}/52`,
    features: [
      {
        title: 'Chat with real manager',
      },
      {
        title: 'Trial period',
      },
    ],
  },
  {
    id: 5,
    title: 'Lottery-bot',
    subtitle:
      'The manager verifies the receipt in the admin area, after which the user becomes a participant in the prize drawing',
    price: 10,
    image: () =>
      `https://picsum.photos/id/${Math.round(Math.random() * 52)}/52`,
    features: [
      {
        title: 'Admin panel',
      },
      {
        title: 'Chat with real manager',
      },
    ],
  },
  {
    id: 6,
    title: 'Hookah-bot',
    subtitle: 'Bot directory for buying products.',
    price: 10,
    image: () =>
      `https://picsum.photos/id/${Math.round(Math.random() * 52)}/52`,
    features: [
      {
        title: 'Admin panel',
      },
      {
        title: 'List of users',
      },
      {
        title: 'List of popular requests',
      },
    ],
  },
  {
    id: 7,
    title: 'FAQ Bot',
    subtitle: 'Automation of consulting ',
    price: 10,
    image: () =>
      `https://picsum.photos/id/${Math.round(Math.random() * 52)}/52`,
    features: [
      {
        title: 'Admin panel',
      },
      {
        title: 'Export rezults to Excel',
      },
      {
        title: 'Chat with real manager',
      },
    ],
  },
  {
    id: 8,
    title: 'Course-bot',
    subtitle: 'Selling an educational course',
    price: 10,
    image: () =>
      `https://picsum.photos/id/${Math.round(Math.random() * 52)}/52`,
    features: [
      {
        title: 'Payment by U.Kassa',
      },
      {
        title: 'Mailing about sale',
      },
      {
        title: 'Auto-selling',
      },
    ],
  },
];

const cardsNode = document.getElementById('cards-content');

function addItemToCart(item) {
  const cart = JSON.parse(localStorage.getItem('cart') || "[]");
  
  cart.push(item);
  
  localStorage.removeItem('cart')
  localStorage.setItem('cart', JSON.stringify(cart));
  return cart
}
// 3.2
function removeItemFromCart(item) {
  const cart = JSON.parse(localStorage.getItem('cart') || "[]");

  const itemIndex = cart.findIndex((i) => i.id === item.id)
  cart.splice(itemIndex, 1);

  localStorage.removeItem('cart')
  localStorage.setItem('cart', JSON.stringify(cart));
  return cart
}

function updateCartCount(cart) {
  const cartElementCount = document.getElementById('shopping-cart-count')

  if (cartElementCount) {
    cartElementCount.innerHTML = `<div id="shopping-cart-count">${cart.length}</div>`;
    return;
  }

  const el = document.createElement('div');
  const cartElement = document.getElementById('shopping-cart')
  el.innerHTML = `<div id="shopping-cart-count">${cart.length}</div>`;
  cartElement.after(el)
}

function removeItemCartModal(id) {
  const item = cards.find((card) => card.id === +id);
  const cart = removeItemFromCart(item)

  updateCartModal()
  updateCartCount(cart)
}
// 3.3
function buyNow(id) {
  const item = cards.find((card) => card.id === +id);
  const cart = addItemToCart(item)

  const preloader = document.createElement('div');
  preloader.innerHTML = '<div id="loader"></div>';
  document.body.appendChild(preloader);

  setTimeout(() => {
  
    preloader.remove()
    document.getElementById('success-modal').style.display = 'block';
  
    setTimeout(() => {
  
      document.getElementById('success-modal').style.display = 'none';
      updateCartModal()
      updateCartCount(cart)
  
    }, 1000);
  }, 2000);
}

// 3.2
function updateCartModal() {
  const cartDataElement = document.getElementById('shopping-cart-modal-data');
  const cartTotalElement = document.getElementById('shopping-cart-modal-total');

  const cartData = JSON.parse(localStorage.getItem('cart') || "[]");
  let totalPrice = 0;

  cartDataElement.innerHTML = cartData.map((item, index) => {
    totalPrice += item.price;
    return (`
      <tr>
        <th scope="row">${index}</th>
        <td>${item.title}</td>
        <td>${item.price}$</td>
        <td><button class='btn btn-light'type="button" onclick="removeItemCartModal('${item.id}')">x</button></td>
      <tr>
    `)
  }).join('')

  cartTotalElement.innerHTML = `
    <tr>
      <th scope="row"></th>
      <td>Total</td>
      <td>${totalPrice}$</td>
      <td></td>
    <tr>
  `
}

// 3.4
const html = cards
  .map((card) => {
    return `
    <div data-id="${card.id}" class="col">
      <div class="card card-product">
        <div class="info_wrapper">
          <div class="image">
            <img src="${card.image()}" alt="${
      card.title
    }" style="border-radius: inherit">
          </div>
          <div class="card_title">
            ${card.title}
          </div>
          <div class="card_subtitle">
            ${card.subtitle}
          </div>
          <div class="card_features">
            ${card.features
              .map((feat) => {
                return `${feat.title}<br>`;
              })
              .join('')}
          </div>
        </div>
        <div class="card_button_wrapper">
        <div class="card-title pricing-card-title">${card.price}$<small class="text-muted fw-light">/mo</small></div>
          <button class="btn btn-light" onclick="buyNow('${card.id}')">Buy Now</button>
        </div>
      </div>
    </div>
  `.trim();
  })
  .join('\n');

cardsNode.innerHTML = html;
