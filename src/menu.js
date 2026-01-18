// menu page for restaurant
import './styles.css';

export function menu() {
  const contentDiv = document.getElementById('content');
  if (contentDiv) {
    contentDiv.innerHTML = '';

    const h1 = document.createElement('h1');
    h1.textContent = 'Menu';
    h1.className = 'menu-title';
    contentDiv.appendChild(h1);

    const introP = document.createElement('p');
    introP.textContent = 'Discover our delicious menu, carefully crafted to satisfy your taste buds. From classic favorites to innovative creations, we have something for everyone. Browse our selection and find your perfect meal.';
    introP.className = 'menu-intro';
    contentDiv.appendChild(introP);

    // Menu image (header)
    const menuImg = document.createElement('img');
    menuImg.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80';
    menuImg.alt = 'Menu cover';
    menuImg.className = 'menu-cover-img';
    contentDiv.appendChild(menuImg);

    // Appetizers
    const appetizersH2 = document.createElement('h2');
    appetizersH2.textContent = 'Appetizers';
    appetizersH2.className = 'menu-section-header';
    contentDiv.appendChild(appetizersH2);

    const appetizersList = document.createElement('div');
    appetizersList.className = 'menu-items';

    // Example appetizers
    const appetizers = [
      {
        name: "Truffle Parmesan Fries",
        description: "Crispy fries tossed with truffle oil, parmesan, and parsley.",
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Caprese Salad",
        description: "Heirloom tomatoes, fresh mozzarella, basil, and balsamic glaze.",
        img: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=600&q=80"
      }
    ];

    appetizers.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'menu-item';

      const itemImg = document.createElement('img');
      itemImg.src = item.img;
      itemImg.alt = item.name;
      itemImg.className = 'menu-item-img';

      const name = document.createElement('h3');
      name.textContent = item.name;
      name.className = 'menu-item-title';

      const desc = document.createElement('p');
      desc.textContent = item.description;
      desc.className = 'menu-item-desc';

      itemDiv.appendChild(itemImg);
      itemDiv.appendChild(name);
      itemDiv.appendChild(desc);
      appetizersList.appendChild(itemDiv);
    });

    contentDiv.appendChild(appetizersList);

    // Main Courses
    const mainsH2 = document.createElement('h2');
    mainsH2.textContent = 'Main Courses';
    mainsH2.className = 'menu-section-header';
    contentDiv.appendChild(mainsH2);

    const mainsList = document.createElement('div');
    mainsList.className = 'menu-items';

    // Example mains
    const mains = [
      {
        name: "Herb-Crusted Salmon",
        description: "Pan-seared salmon fillet, seasonal vegetables, lemon beurre blanc.",
        img: "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Wild Mushroom Risotto",
        description: "Creamy arborio rice, wild mushrooms, parmesan, truffle oil.",
        img: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80"
      }
    ];

    mains.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'menu-item';

      const itemImg = document.createElement('img');
      itemImg.src = item.img;
      itemImg.alt = item.name;
      itemImg.className = 'menu-item-img';

      const name = document.createElement('h3');
      name.textContent = item.name;
      name.className = 'menu-item-title';

      const desc = document.createElement('p');
      desc.textContent = item.description;
      desc.className = 'menu-item-desc';

      itemDiv.appendChild(itemImg);
      itemDiv.appendChild(name);
      itemDiv.appendChild(desc);
      mainsList.appendChild(itemDiv);
    });

    contentDiv.appendChild(mainsList);

    // Desserts
    const dessertsH2 = document.createElement('h2');
    dessertsH2.textContent = 'Desserts';
    dessertsH2.className = 'menu-section-header';
    contentDiv.appendChild(dessertsH2);

    const dessertsList = document.createElement('div');
    dessertsList.className = 'menu-items';

    // Example desserts
    const desserts = [
      {
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with molten center, served with vanilla ice cream.",
        img: "https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Classic Tiramisu",
        description: "Espresso-soaked ladyfingers, mascarpone cream, cocoa dust.",
        img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80"
      }
    ];

    desserts.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'menu-item';

      const itemImg = document.createElement('img');
      itemImg.src = item.img;
      itemImg.alt = item.name;
      itemImg.className = 'menu-item-img';

      const name = document.createElement('h3');
      name.textContent = item.name;
      name.className = 'menu-item-title';

      const desc = document.createElement('p');
      desc.textContent = item.description;
      desc.className = 'menu-item-desc';

      itemDiv.appendChild(itemImg);
      itemDiv.appendChild(name);
      itemDiv.appendChild(desc);
      dessertsList.appendChild(itemDiv);
    });

    contentDiv.appendChild(dessertsList);
  }
}