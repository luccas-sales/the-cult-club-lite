document.addEventListener('DOMContentLoaded', async function () {
  const movies = await fetchData('/json/movies.json');
  const series = await fetchData('/json/series.json');
  const anime = await fetchData('/json/anime.json');

  async function fetchData(url) {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      return [];
    }
  }

  let previousFeedbackCardsDatas =
    JSON.parse(localStorage.getItem('previousFeedbackCardsDatas')) || [];

  const notification = document.querySelector('.notification');
  const notificationTitle = document.querySelector('.notification-title');
  const notificationIcon = document.querySelector('.notification-icon');
  const notificationClose = document.querySelector('.notification-close');

  function renderFeedbackCard(containerId, cardData) {
    const container = document.getElementById(containerId);

    const card = document.createElement('div');
    card.className = 'card-feedback';

    card.innerHTML = `
        <div class="card-pic-feedback" style="background-image: url('${cardData.image}');"></div>
        <h3>${cardData.title}</h3>
        <p>${cardData.type}</p>
        <button id="remove-feedback-btn">
            <span class="text">Remove</span>
            <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                </svg>
            </span>
        </button>
    `;

    container.appendChild(card);

    void card.offsetWidth;

    const cardsInContainer = container.querySelectorAll('.card-feedback');
    const index = Array.from(cardsInContainer).indexOf(card);

    setTimeout(() => {
      card.classList.add('show');
    }, 100 * (index + 1));
  }

  function feedbackButton(
    cardType,
    cardPicType,
    buttonId,
    containerId,
    feedbackType
  ) {
    document.addEventListener('click', function (event) {
      const targetButton = event.target.closest(`#${buttonId}`);
      if (!targetButton) return;

      const selectedList = document.querySelector('.selectedList');
      if (!selectedList) return;

      const selectedCard = selectedList?.querySelector(cardType);
      if (!selectedCard) return;

      const cardPic = selectedCard?.querySelector(cardPicType);
      if (!cardPic) return;

      const name = selectedCard?.querySelector('.name');

      if (!selectedCard || !cardPic || !name) return;

      const backgroundImageMatch = cardPic.style.backgroundImage.match(
        /url\(["']?(.*?)["']?\)/
      );
      const backgroundImage = backgroundImageMatch
        ? backgroundImageMatch[1]
        : '';

      const title = name.childNodes[0].textContent.trim();
      const type = determineMediaType(title);

      let feedbackCardData = {
        image: backgroundImage,
        title: title,
        type: type,
        feedbackType: feedbackType,
      };

      const existingCardIndex = previousFeedbackCardsDatas.findIndex(
        (item) =>
          item.title === feedbackCardData.title &&
          item.type === feedbackCardData.type &&
          item.image === feedbackCardData.image
      );

      if (existingCardIndex !== -1) {
        previousFeedbackCardsDatas[existingCardIndex].feedbackType =
          feedbackType;

        localStorage.setItem(
          'previousFeedbackCardsDatas',
          JSON.stringify(previousFeedbackCardsDatas)
        );

        renderAllFeedbackCards();
      } else {
        renderFeedbackCard(containerId, feedbackCardData);
        previousFeedbackCardsDatas.push(feedbackCardData);
        localStorage.setItem(
          'previousFeedbackCardsDatas',
          JSON.stringify(previousFeedbackCardsDatas)
        );
      }

      if (buttonId === 'like-button') {
        selectedCard.classList.remove('hated');
        selectedCard.classList.add('liked');
      } else {
        selectedCard.classList.remove('liked');
        selectedCard.classList.add('hated');
      }

      notification.style.backgroundColor =
        feedbackType === 'liked' ? '#d1fae5' : '#fee2e2';
      notification.style.borderLeft =
        feedbackType === 'liked' ? '4px solid #22c55e' : '4px solid #ef4444';
      notificationTitle.style.color =
        feedbackType === 'liked' ? '#064e3b' : '#7f1d1d';
      notificationIcon.style.color =
        feedbackType === 'liked' ? '#22c55e' : '#ef4444';
      notificationClose.style.color =
        feedbackType === 'liked' ? '#064e3b' : '#7f1d1d';
      notificationIcon.innerHTML =
        feedbackType === 'liked'
          ? '<i class="bi bi-hand-thumbs-up-fill"></i>'
          : '<i class="bi bi-hand-thumbs-down-fill"></i>';
      notificationTitle.innerText =
        feedbackType === 'liked'
          ? `Your card has been added to the "Liked It list".`
          : `Your card has been added to the "Hated It list".`;

      notification.classList.remove('notification-visible');
      void notification.offsetWidth;
      notification.classList.add('notification-visible');

      clearTimeout(notification.hideTimeout);
      notification.hideTimeout = setTimeout(() => {
        notification.classList.remove('notification-visible');
      }, 4000);

      notificationClose.addEventListener('click', function (event) {
        notification.classList.remove('notification-visible');
      });
    });
  }

  function renderAllFeedbackCards() {
    const likedContainer = document.getElementById('liked-container');
    const hatedContainer = document.getElementById('hated-container');
    likedContainer.innerHTML = '';
    hatedContainer.innerHTML = '';

    previousFeedbackCardsDatas.forEach((feedbackCardInfo, index) => {
      const containerId =
        feedbackCardInfo.feedbackType === 'hated'
          ? 'hated-container'
          : 'liked-container';

      setTimeout(() => {
        renderFeedbackCard(containerId, feedbackCardInfo);
      }, 100 * index);
    });
  }

  renderAllFeedbackCards();

  feedbackButton(
    '.card-movie',
    '.card-pic-movie',
    'like-button',
    'liked-container',
    'liked'
  );
  feedbackButton(
    '.card-serie',
    '.card-pic-serie',
    'like-button',
    'liked-container',
    'liked'
  );
  feedbackButton(
    '.card-anime',
    '.card-pic-anime',
    'like-button',
    'liked-container',
    'liked'
  );

  feedbackButton(
    '.card-movie',
    '.card-pic-movie',
    'deslike-button',
    'hated-container',
    'hated'
  );
  feedbackButton(
    '.card-serie',
    '.card-pic-serie',
    'deslike-button',
    'hated-container',
    'hated'
  );
  feedbackButton(
    '.card-anime',
    '.card-pic-anime',
    'deslike-button',
    'hated-container',
    'hated'
  );

  function determineMediaType(title) {
    if (movies.some((movie) => movie.title === title)) return 'MOVIE';
    if (series.some((serie) => serie.title === title)) return 'SERIES';
    if (anime.some((anime) => anime.title === title)) return 'ANIME';
    return;
  }

  function SearchFeedbackButtons() {
    document.addEventListener('click', function (event) {
      const likeButton = event.target.closest('#search-like-button');
      const dislikeButton = event.target.closest('#search-deslike-button');
      if (!likeButton && !dislikeButton) return;

      const cardSearchInner = event.target.closest('.card-search-inner');
      if (!cardSearchInner) return;

      const cardPic = cardSearchInner.querySelector('.card-pic-search-inner');
      if (!cardPic) return;

      const name = cardSearchInner.querySelector('.name');

      if (!cardPic || !name) return;

      const backgroundImageMatch = cardPic.style.backgroundImage.match(
        /url\(["']?(.*?)["']?\)/
      );
      const backgroundImage = backgroundImageMatch
        ? backgroundImageMatch[1]
        : '';
      const title = name.childNodes[0].textContent.trim();

      const type = determineMediaType(title);
      const feedbackType = likeButton ? 'liked' : 'hated';
      const containerId = likeButton ? 'liked-container' : 'hated-container';

      let feedbackCardData = {
        image: backgroundImage,
        title: title,
        type: type,
        feedbackType: feedbackType,
      };

      const existingCardIndex = previousFeedbackCardsDatas.findIndex(
        (item) =>
          item.title === feedbackCardData.title &&
          item.type === feedbackCardData.type &&
          item.image === feedbackCardData.image
      );

      if (existingCardIndex !== -1) {
        previousFeedbackCardsDatas[existingCardIndex].feedbackType =
          feedbackType;

        localStorage.setItem(
          'previousFeedbackCardsDatas',
          JSON.stringify(previousFeedbackCardsDatas)
        );

        renderAllFeedbackCards();
      } else {
        renderFeedbackCard(containerId, feedbackCardData);
        previousFeedbackCardsDatas.push(feedbackCardData);
        localStorage.setItem(
          'previousFeedbackCardsDatas',
          JSON.stringify(previousFeedbackCardsDatas)
        );
      }

      if (likeButton) {
        cardSearchInner.classList.remove('hated');
        cardSearchInner.classList.add('liked');
      } else {
        cardSearchInner.classList.remove('liked');
        cardSearchInner.classList.add('hated');
      }

      const mainCards = document.querySelectorAll(
        '.card-movie, .card-serie, .card-anime'
      );
      mainCards.forEach((card) => {
        const cardName = card
          .querySelector('.name')
          ?.childNodes[0]?.textContent?.trim();
        const cardImageEl = card.querySelector(
          '.card-pic-movie, .card-pic-serie, .card-pic-anime'
        );
        const cardImageMatch = cardImageEl?.style?.backgroundImage?.match(
          /url\(["']?(.*?)["']?\)/
        );
        const cardImage = cardImageMatch ? cardImageMatch[1] : '';

        if (cardName === title && cardImage === backgroundImage) {
          if (likeButton) {
            card.classList.remove('hated');
            card.classList.add('liked');
          } else {
            card.classList.remove('liked');
            card.classList.add('hated');
          }
        }
      });

      notification.style.backgroundColor =
        feedbackType === 'liked' ? '#d1fae5' : '#fee2e2';
      notification.style.borderLeft =
        feedbackType === 'liked' ? '4px solid #22c55e' : '4px solid #ef4444';
      notificationTitle.style.color =
        feedbackType === 'liked' ? '#064e3b' : '#7f1d1d';
      notificationIcon.style.color =
        feedbackType === 'liked' ? '#22c55e' : '#ef4444';
      notificationClose.style.color =
        feedbackType === 'liked' ? '#064e3b' : '#7f1d1d';
      notificationIcon.innerHTML =
        feedbackType === 'liked'
          ? '<i class="bi bi-hand-thumbs-up-fill"></i>'
          : '<i class="bi bi-hand-thumbs-down-fill"></i>';
      notificationTitle.innerText =
        feedbackType === 'liked'
          ? `Your card has been added to the "Liked It list".`
          : `Your card has been added to the "Hated It list".`;

      notification.classList.remove('notification-visible');
      void notification.offsetWidth;
      notification.classList.add('notification-visible');

      clearTimeout(notification.hideTimeout);
      notification.hideTimeout = setTimeout(() => {
        notification.classList.remove('notification-visible');
      }, 4000);
    });
  }

  SearchFeedbackButtons();

  document.addEventListener('click', function (event) {
    const removeButton = event.target.closest('#remove-feedback-btn');
    if (!removeButton) return;

    const cardFeedback = removeButton.closest('.card-feedback');
    if (!cardFeedback) return;

    const title = cardFeedback.querySelector('h3').textContent.trim();
    const type = cardFeedback.querySelector('p').textContent.trim();
    const imageStyle =
      cardFeedback.querySelector('.card-pic-feedback').style.backgroundImage;
    const imageMatch = imageStyle.match(/url\(["']?(.*?)["']?\)/);
    const image = imageMatch ? imageMatch[1] : '';

    previousFeedbackCardsDatas = previousFeedbackCardsDatas.filter((item) => {
      return !(
        item.title === title &&
        item.type === type &&
        item.image === image
      );
    });

    cardFeedback.remove();

    const allCards = document.querySelectorAll(
      '.card-movie, .card-serie, .card-anime'
    );
    allCards.forEach((card) => {
      const cardName = card
        .querySelector('.name')
        .childNodes[0].textContent.trim();
      const cardType = card.querySelector('.list-title').textContent.trim();
      const cardPic = card.querySelector(
        '.card-pic-movie, .card-pic-serie, .card-pic-anime'
      );
      const cardImageStyle = cardPic.style.backgroundImage;
      const cardImageMatch = cardImageStyle.match(/url\(["']?(.*?)["']?\)/);
      const cardImage = cardImageMatch ? cardImageMatch[1] : '';

      if (cardName === title && cardType === type && cardImage === image) {
        card.classList.remove('liked', 'hated');
      }
    });

    localStorage.setItem(
      'previousFeedbackCardsDatas',
      JSON.stringify(previousFeedbackCardsDatas)
    );
  });
});
