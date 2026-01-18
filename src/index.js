import { homepage } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";

const pageMap = {
  'home': homepage,
  'menu': menu,
  'contact': contact
};

let currentPage = 'home';

const setActiveButton = (activeButton) => {
  document.querySelectorAll('nav button').forEach(btn => {
    btn.classList.remove('active');
  });
  if (activeButton) {
    activeButton.classList.add('active');
  }
};

const nav = document.querySelector('nav ul');
if (nav) {
  nav.addEventListener('click', (e) => {
    const button = e.target.closest('button');
    if (!button) return;

    const page = button.id;
    const pageFunction = pageMap[page];

    if (pageFunction && currentPage !== page) {
      currentPage = page;
      setActiveButton(button);
      pageFunction();
    }
  });

  homepage();
  const homeButton = document.querySelector('#home');
  if (homeButton) {
    setActiveButton(homeButton);
  }
}