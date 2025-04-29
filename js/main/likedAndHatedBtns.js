document.addEventListener('DOMContentLoaded', function () {
  let previousFeedbackCardsDatas =
    JSON.parse(localStorage.getItem('previousFeedbackCardsDatas')) || [];

  function renderFeedbackCard(containerId, cardData) {
    const container = document.getElementById(containerId);

    container.innerHTML += `
      <div class="card-feedback">
        <div class="card-pic-feedback"
            style="background-image: url('${cardData.image}');">
        </div>
        <h3>${cardData.title}</h3>
        <p>${cardData.type}</p>
        <button id="remove-feedback-btn">
          <span class="text">Remove</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg"
            width="16" height="16" fill="currentColor" class="bi bi-trash-fill"
            viewBox="0 0 16 16">
            <path
                d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
            </svg></span>
        </button>
      </div>
    `;
  }

  for (const feedbackCardInfo of previousFeedbackCardsDatas) {
    const containerId =
      feedbackCardInfo.feedbackType === 'Hated'
        ? 'hated-container'
        : 'liked-container';
    renderFeedbackCard(containerId, feedbackCardInfo);
  }

  function cardExists(movieData) {
    const allCards = document.querySelectorAll('.card-feedback');

    return Array.from(allCards).some((card) => {
      const title = card.querySelector('h3')?.textContent.trim();
      const type = card.querySelector('p')?.textContent.trim();
      const image =
        card.querySelector('.card-pic-feedback')?.style.backgroundImage;

      return (
        title === movieData.title &&
        type === movieData.type &&
        image.includes(movieData.image)
      );
    });
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
      const typeEl = selectedCard?.querySelector('.list-title');

      if (!selectedCard || !cardPic || !name || !typeEl) return;

      const backgroundImageMatch = cardPic.style.backgroundImage.match(
        /url\(["']?(.*?)["']?\)/
      );
      const backgroundImage = backgroundImageMatch
        ? backgroundImageMatch[1]
        : '';
      const title = name.childNodes[0].textContent.trim();
      const type = typeEl.textContent.trim();

      const feedbackCardData = {
        image: backgroundImage,
        title: title,
        type: type,
        feedbackType: feedbackType,
      };

      if (!cardExists(feedbackCardData)) {
        renderFeedbackCard(containerId, feedbackCardData);
        previousFeedbackCardsDatas.push(feedbackCardData);
        localStorage.setItem(
          'previousFeedbackCardsDatas',
          JSON.stringify(previousFeedbackCardsDatas)
        );
      }
    });
  }

  feedbackButton(
    '.card-movie',
    '.card-pic-movie',
    'like-button',
    'liked-container',
    'Liked'
  );
  feedbackButton(
    '.card-serie',
    '.card-pic-serie',
    'like-button',
    'liked-container',
    'Liked'
  );
  feedbackButton(
    '.card-anime',
    '.card-pic-anime',
    'like-button',
    'liked-container',
    'Liked'
  );

  feedbackButton(
    '.card-movie',
    '.card-pic-movie',
    'deslike-button',
    'hated-container',
    'Hated'
  );
  feedbackButton(
    '.card-serie',
    '.card-pic-serie',
    'deslike-button',
    'hated-container',
    'Hated'
  );
  feedbackButton(
    '.card-anime',
    '.card-pic-anime',
    'deslike-button',
    'hated-container',
    'Hated'
  );

  document.addEventListener('click', function (event) {
    const removeButton = event.target.closest('#remove-feedback-btn');
    if (!removeButton) return;

    const cardFeedback = removeButton.closest('.card-feedback');
    if (!cardFeedback) return;
    
    const title = cardFeedback?.querySelector('h3')?.textContent.trim();
    const type = cardFeedback?.querySelector('p')?.textContent.trim();
    const imageStyle =
      cardFeedback?.querySelector('.card-pic-feedback')?.style.backgroundImage;
    const imageMatch = imageStyle?.match(/url\(["']?(.*?)["']?\)/);
    const image = imageMatch ? imageMatch[1] : '';

    previousFeedbackCardsDatas = previousFeedbackCardsDatas.filter((item) => {
      return !(
        item.title === title &&
        item.type === type &&
        item.image === image
      );
    });

    cardFeedback?.remove();

    localStorage.setItem(
      'previousFeedbackCardsDatas',
      JSON.stringify(previousFeedbackCardsDatas)
    );
  });
});
