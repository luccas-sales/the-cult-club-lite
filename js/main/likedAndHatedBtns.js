document.addEventListener('DOMContentLoaded', function () {
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

  function likeButton(cardType, cardPicType) {
    document.addEventListener('click', function (event) {
      const likeButton = event.target.closest('#like-button');
      if (!likeButton) return;

      const selectedList = document.querySelector('.selectedList');
      if (!selectedList) return;

      const selectedCard = selectedList.querySelector(cardType);
      if (!selectedCard) return;

      const cardPic = selectedCard.querySelector(cardPicType);
      if (!cardPic) return;
      const backgroundImageMatch = cardPic.style.backgroundImage.match(
        /url\(["']?(.*?)["']?\)/
      );
      const backgroundImage = backgroundImageMatch
        ? backgroundImageMatch[1]
        : '';

      const name = selectedCard.querySelector('.name');
      const title = name.childNodes[0].textContent.trim();
      const type = selectedCard.querySelector('.list-title').textContent.trim();

      const cardData = {
        image: backgroundImage,
        title: title,
        type: type,
      };

      const likedContainer = document.getElementById('liked-container');
      const alreadyExists = cardExists(cardData);

      if (!alreadyExists) {
        likedContainer.innerHTML += `
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
    });
  }

  likeButton('.card-movie', '.card-pic-movie');
  likeButton('.card-serie', '.card-pic-serie');
  likeButton('.card-anime', '.card-pic-anime');

  function deslikeButton(cardType, cardPicType) {
    document.addEventListener('click', function (event) {
      const deslikeButton = event.target.closest('#deslike-button');
      if (!deslikeButton) return;

      const selectedList = document.querySelector('.selectedList');
      if (!selectedList) return;

      const selectedCard = selectedList.querySelector(cardType);
      if (!selectedCard) return;

      const cardPic = selectedCard.querySelector(cardPicType);
      if (!cardPic) return;
      const backgroundImageMatch = cardPic.style.backgroundImage.match(
        /url\(["']?(.*?)["']?\)/
      );
      const backgroundImage = backgroundImageMatch
        ? backgroundImageMatch[1]
        : '';

      const name = selectedCard.querySelector('.name');
      const title = name.childNodes[0].textContent.trim();
      const type = selectedCard.querySelector('.list-title').textContent.trim();

      const cardData = {
        image: backgroundImage,
        title: title,
        type: type,
      };

      const hatedContainer = document.getElementById('hated-container');
      const alreadyExists = cardExists(cardData);

      if (!alreadyExists) {
        hatedContainer.innerHTML += `
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
    });
  }

  deslikeButton('.card-movie', '.card-pic-movie');
  deslikeButton('.card-serie', '.card-pic-serie');
  deslikeButton('.card-anime', '.card-pic-anime');

  document.addEventListener('click', function (event) {
    const removeButton = event.target.closest('#remove-feedback-btn');
    if (!removeButton) return;

    const cardFeedback = removeButton.closest('.card-feedback');
    cardFeedback.remove();
  });
});
