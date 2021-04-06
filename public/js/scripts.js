const cards = [{
  "id": 1,
  "title": "Titan",
  "subtitle": "Czech Republic",
  "image": () => `https://picsum.photos/id/${Math.round((Math.random() * 100))}/100`,
  "features": [
    {
      "title": "Cookie Dough - Peanut Butter"
    },
    {
      "title": "Salmon Steak - Cohoe 8 Oz"
    },
    {
      "title": "Snails - Large Canned"
    }
  ]
}, {
  "id": 2,
  "title": "MPV",
  "subtitle": "Indonesia",
  "image": () => `https://picsum.photos/id/${Math.round((Math.random() * 100))}/100`,
  "features": [
    {
      "title": "Wine - Chablis J Moreau Et Fils"
    },
    {
      "title": "Quiche Assorted"
    },
    {
      "title": "Honey - Liquid"
    }
  ]
}, {
  "id": 3,
  "title": "Sky",
  "subtitle": "Poland",
  "image": () => `https://picsum.photos/id/${Math.round((Math.random() * 100))}/100`,
  "features": [
    {
      "title": "Tea Peppermint"
    },
    {
      "title": "Silicone Parch. 16.3x24.3"
    },
    {
      "title": "Soup - Campbells, Chix Gumbo"
    }
  ]
}, {
  "id": 4,
  "title": "QX",
  "subtitle": "Georgia",
  "image": () => `https://picsum.photos/id/${Math.round((Math.random() * 100))}/100`,
  "features": [
    {
      "title": "Vodka - Lemon, Absolut"
    }
  ]
}, {
  "id": 5,
  "title": "LS",
  "subtitle": "Portugal",
  "image": () => `https://picsum.photos/id/${Math.round((Math.random() * 100))}/100`,
  "features": [
    {
      "title": "Pasta - Orecchiette"
    },
    {
      "title": "Pepper - Red Bell"
    }
  ]
}, {
  "id": 6,
  "title": "M5",
  "subtitle": "Indonesia",
  "image": () => `https://picsum.photos/id/${Math.round((Math.random() * 100))}/100`,
  "features": [
    {
      "title": "Cakes Assorted"
    },
    {
      "title": "Truffle Cups - Brown"
    },
    {
      "title": "Ham Black Forest"
    }
  ]
}, {
  "id": 7,
  "title": "RAV4",
  "subtitle": "China",
  "image": () => `https://picsum.photos/id/${Math.round((Math.random() * 100))}/100`,
  "features": [
    {
      "title": "Roe - White Fish"
    },
    {
      "title": "Temperature Recording Station"
    },
    {
      "title": "Milkettes - 2%"
    },
    {
      "title": "Dooleys Toffee"
    }
  ]
}, {
  "id": 8,
  "title": "Grand Marquis",
  "subtitle": "Philippines",
  "image": () => `https://picsum.photos/id/${Math.round((Math.random() * 100))}/100`,
  "features": [
    {
      "title": "Iced Tea - Lemon, 460 Ml"
    },
    {
      "title": "Soup - French Onion, Dry"
    }
  ]
}]


const cardsNode = document.getElementById('cards-content');

const html = cards.map((card) => {
  return `
    <div data-id="${card.id}" class="col">
      <div class="card card-product">
        <div class="info_wrapper">
          <div class="image">
            <img src="${card.image()}" alt="${card.title}" style="border-radius: inherit">
          </div>
          <div class="card_title">
            ${card.title}
          </div>
          <div class="card_subtitle">
            ${card.subtitle}
          </div>
          <div class="card_features">
            ${card.features.map((feat) => {
              return `${feat.title}<br>`;
            }).join('')}
          </div>
        </div>
        <div class="card_button_wrapper">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  `.trim();
}).join('\n');

cardsNode.innerHTML = html;
