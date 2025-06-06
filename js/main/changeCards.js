document.addEventListener('DOMContentLoaded', async function () {
  const movies = await fetchData('/the-cult-club-lite/json/movies.json');
  const series = await fetchData('/the-cult-club-lite/json/series.json');
  const anime = await fetchData('/the-cult-club-lite/json/anime.json');

  async function fetchData(url) {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      return [];
    }
  }

  let previousCards = [];

  function changeCards(dataList, list, type) {
    let currentCard = Math.floor(Math.random() * dataList.length);
    let tipVerification = false;

    function showCard(index) {
      const cardData = dataList[index];

      if (previousCards.length >= dataList.length) {
        previousCards = [];
      }

      if (previousCards.includes(cardData.title.trim())) {
        let nextIndex = (index + 1) % dataList.length;
        if (nextIndex === index) return;
        showCard(nextIndex);
        return;
      }

      previousCards.push(cardData.title.trim());

      const card = document.createElement('li');
      card.classList.add(`card-${type}`);

      const latestFeedback =
        JSON.parse(localStorage.getItem('previousFeedbackCardsDatas')) || [];
      const feedbackItem = latestFeedback.find(
        (obj) => obj.title === cardData.title
      );

      if (feedbackItem) {
        card.classList.add(feedbackItem.feedbackType);
      }

      card.innerHTML = `
      <div class='list-title'>
      <h1>${
        type === 'anime' ? type.toUpperCase() : type.toUpperCase() + 'S'
      }</h1>
       </div>
      <div class="card-pic-${type}" style="background-image: url('${
        cardData.image
      }');">
          ${
            !tipVerification
              ? '<div class="tip"><span>CLICK TO CHANGE</span> <i class="bi bi-arrow-repeat"></i></div>'
              : ''
          }
      </div>
          <h2 class="name">${cardData.title}<span class="release-year">${
        cardData.year
      }</span></h2>
          <div class="info">
            <p class="synopsis">${cardData.synopsis}</p>
            <div class="add-info"><span>running time ${
              cardData.duration
            } MINUTES</span></div>
            ${
              cardData.actors
                ? `<div class="add-info"><span>starring</span> <span class="actors">${cardData.actors}</span></div>`
                : cardData.studio
                ? `<div class="add-info"><span>studio</span> <span class="studio">${cardData.studio}</span></div>`
                : ''
            }
            <a href="${cardData.imdbLink}" target="_blank">
              <div class="imdb-rating">${`<i class="bi bi-star-fill imdb-star"></i>`.repeat(
                Math.round(cardData.imdb)
              )}</div>
            </a>
          </div>
          <div class="feedback-btns-container">
            <div class="feedback-btns">
              <button class="feedback-btn" id="like-button"><span class="material-symbols-outlined">thumb_up</span></button>
              <span class="material-symbols-outlined">swap_horiz</span>
              <button class="feedback-btn" id="deslike-button"><span class="material-symbols-outlined">thumb_down</span></button>
            </div>
          </div>
        `;

      list.innerHTML = '';
      list.appendChild(card);

      currentCard = index;

      const img = card.querySelector(`.card-pic-${type}`);
      if (tipVerification === false) {
        img.classList.add('has-tip');
      }

      img.addEventListener('click', () => {
        if (!list.classList.contains('selectedList')) return;

        if (!tipVerification) {
          tipVerification = true;
          const tip = img.querySelector('.tip');
          if (tip) {
            tip.remove();
            img.style.borderImage = 'none';
          }
        }

        let nextCard = Math.floor(Math.random() * dataList.length);
        if (nextCard === currentCard) {
          nextCard = (nextCard + 1) % dataList.length;
        }
        currentCard = nextCard;
        showCard(currentCard);
      });
    }

    showCard(currentCard);
  }

  changeCards(movies, document.querySelector('.movies-list'), 'movie');
  changeCards(series, document.querySelector('.series-list'), 'serie');
  changeCards(anime, document.querySelector('.anime-list'), 'anime');
});
