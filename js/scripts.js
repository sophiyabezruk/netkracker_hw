const cards = [
  // {
  //   id: 1,
  //   title: 'Quest-bot',
  //   subtitle:
  //     'Пишет новым пользователям сервера в личку и предлагает пройти квесты. За прохождения квеста пользователь получает роли на сервере',
  //   image: () =>
  //     `https://picsum.photos/id/${Math.round(Math.random() * 52)}/52`,
  //   features: [
  //     {
  //       title: 'много уровней квеста',
  //     },
  //     {
  //       title: 'более 100 тем',
  //     },
  //     {
  //       title: 'рандомные вопросы',
  //     },
  //   ],
  // },
  // {
  //   id: 2,
  //   title: 'Сredit-bot',
  //   subtitle:
  //     'Чат бот помогает сделать оценку кредитоспособности и направляет эту информацию менеджеру.  Кроме этого раз в сутки присылает полезные статьи по теме.',
  //   image: () =>
  //     `https://picsum.photos/id/${Math.round(Math.random() * 52)}/52`,
  //   features: [
  //     {
  //       title: 'автоматизация',
  //     },
  //   ],
  // },
  {
    id: 3,
    title: 'Secret-bot',
    subtitle: 'Information bot for secret customers',
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
        <div class="card-title pricing-card-title">$0<small class="text-muted fw-light">/mo</small></div>
          <button class="btn btn-light">Buy Now</button>
        </div>
      </div>
    </div>
  `.trim();
  })
  .join('\n');

cardsNode.innerHTML = html;
