import './styles.css';

export function homepage() {
  // Instead of returning a string, append elements to #content when called
  const contentDiv = document.getElementById('content');
  if (contentDiv) {
    contentDiv.innerHTML = ''; // Clear previous content if any

    const img = document.createElement('img');
    img.src = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80';
    img.alt = 'Restaurant interior';
    img.classList.add('home-img');

    const h1 = document.createElement('h1');
    h1.textContent = 'Welcome to Gourmet Haven!';
    h1.classList.add('home-title');

    const p = document.createElement('p');
    p.innerHTML = `
      Discover an unforgettable dining experience at Gourmet Haven, where culinary artistry meets warm hospitality.
      Enjoy delectable flavors crafted from the freshest ingredients, in a beautiful and comfortable setting. Whether
      it's a cozy dinner for two or a celebration with friends, we make every meal special. We can't wait to serve you!
    `;
    p.classList.add('home-description');

    contentDiv.appendChild(img);
    contentDiv.appendChild(h1);
    contentDiv.appendChild(p);
  }
}