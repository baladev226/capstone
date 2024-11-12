import { decorateIcons } from '../../scripts/aem.js';


function searchInput(block) {
  const input = document.createElement('input');
  input.setAttribute('type', 'search');
  input.className = 'search-input';

  const searchPlaceholder = 'SEARCH';
  input.placeholder = searchPlaceholder;
  input.setAttribute('aria-label', searchPlaceholder);

  input.addEventListener('input', (e) => {
    // handleSearch(e, block);
  });

  input.addEventListener('keyup', (e) => { if (e.code === 'Escape') { clearSearch(block); } });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const query = input.value;
        if (query) {
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        }
    }
  });

  return input;
}

function searchIcon() {
  const icon = document.createElement('span');
  icon.classList.add('icon', 'icon-search');
  return icon;
}

function searchBox(block) {
  const box = document.createElement('div');
  box.classList.add('search-box');
  box.append(
    searchIcon(),
    searchInput(block),
  );

  return box;
}

export default async function decorate(block) { 
  block.innerHTML = '';
  block.append(
    searchBox(block)
  );

  decorateIcons(block);
}
