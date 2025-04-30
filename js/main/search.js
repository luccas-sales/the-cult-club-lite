document.addEventListener('DOMContentLoaded', async function () {
  const movies = await fetchData('/the-cult-club-lite/json/movies.json');
  const series = await fetchData('/the-cult-club-lite/json/series.json');
  const animes = await fetchData('/the-cult-club-lite/json/animes.json');

  async function fetchData(url) {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.error('Error loading JSON data:', error);
      return [];
    }
  }

  const searchInput = document.querySelector('.input');
  const searchBtn = document.querySelector('.search-btn');

  const searchSuggestions = document.querySelector('.search-suggestions');

  const searchSection = document.querySelector('#search');
  const cardSearch = document.querySelector('.card-search');
  const searchBackgroud = document.querySelector('.search-backgroud');

  const notification = document.querySelector('.notification');
  const notificationTitle = document.querySelector('.notification-title');
  const notificationIcon = document.querySelector('.notification-icon');
  const notificationClose = document.querySelector('.notification-close');

  function normalizeText(text) {
    return text
      .toLowerCase()
      .trim()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s]/gi, '');
  }

  searchBtn.addEventListener('click', function (event) {
    const title = normalizeText(searchInput.value);

    try {
      if (title === '') {
        throw new Error('Input required.');
      }

      searchSuggestions.style.visibility = 'hidden';

      const allItems = [...movies, ...series, ...animes];

      const foundItem = allItems.some(
        (item) => normalizeText(item.title) === title
      );

      if (!foundItem) {
        throw new Error('No results found.');
      }

      const filteredItems = allItems.filter((item) =>
        normalizeText(item.title).includes(title)
      );

      searchSection.style.visibility = 'visible';
      cardSearch.innerHTML = '';

      filteredItems.forEach((item) => {
        const card = document.createElement('li');
        card.classList.add(`card-movie`);

        card.innerHTML = `
        <div class="card-pic-movie" style="background-image: url('${
          item.image
        }');">
          <img class="mouse-touch-icon">
        </div>
        <h2 class="name">${item.title}<span class="release-year">${
          item.year
        }</span></h2>
        <div class="info">
          <p class="synopsis">${item.synopsis}</p>
          <div class="add-info"><span>running time ${
            item.duration
          } MINUTES</span></div>
          ${
            item.actors
              ? `<div class="add-info"><span>starring</span> <span class="actors">${item.actors}</span></div>`
              : item.studio
              ? `<div class="add-info"><span>studio</span> <span class="studio">${item.studio}</span></div>`
              : ''
          }
          <a href="${item.imdbLink}" target="_blank">
            <div class="imdb-rating">${`<span class="imdb-star"></span>`.repeat(
              Math.round(item.imdb)
            )}</div>
          </a>
        </div>
      `;
        cardSearch.appendChild(card);
      });

      searchInput.value = '';
      notification.classList.remove('notification-visible');
    } catch (error) {
      notification.style.backgroundColor = '#fef08a';
      notification.style.borderLeft = '4px solid #f59e0b';
      notificationTitle.style.color = '#b45309';
      notificationIcon.style.color = '#f59e0b';
      notificationClose.style.color = '#b45309';
      notificationIcon.innerHTML =
        '<i class="bi bi-exclamation-circle-fill"></i>';
      notificationTitle.innerText = `${error.message}`;

      notification.classList.remove('notification-visible');
      void notification.offsetWidth;
      notification.classList.add('notification-visible');

      clearTimeout(notification.hideTimeout);
      notification.hideTimeout = setTimeout(() => {
        notification.classList.remove('notification-visible');
      }, 2000);
    }
  });

  notificationClose.addEventListener('click', function (event) {
    notification.classList.remove('notification-visible');
  });

  searchBackgroud.addEventListener('click', function (event) {
    searchSection.style.visibility = 'hidden';
    cardSearch.innerHTML = '';
  });

  searchInput.addEventListener('input', function () {
    const title = normalizeText(searchInput.value);

    const allItems = [...movies, ...series, ...animes];

    const matchingSuggestions = allItems.filter((suggestion) =>
      normalizeText(suggestion.title).startsWith(title)
    );

    if (matchingSuggestions.length === 0 || title === '') {
      searchSuggestions.innerHTML = '';
      searchSuggestions.style.visibility = 'hidden';
      return;
    }

    searchSuggestions.style.visibility = 'visible';

    const suggestionsHtml = matchingSuggestions
      .slice(0, 3)
      .map(
        (suggestion) => `
      <p class="suggestions">${suggestion.title}<span>${suggestion.year}</span></p>
    `
      )
      .join('');

    searchSuggestions.innerHTML = suggestionsHtml;
  });

  searchSuggestions.addEventListener('click', function (event) {
    if (event.target.classList.contains('suggestions')) {
      const suggestionElement = event.target;
      if (
        suggestionElement.firstChild &&
        suggestionElement.firstChild.nodeType === Node.TEXT_NODE
      ) {
        searchInput.value = suggestionElement.firstChild.textContent.trim();
        searchSuggestions.style.visibility = 'hidden';
        searchBtn.click();
      }
    }
  });
});
