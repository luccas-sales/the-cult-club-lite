const btnNavegationLeft = document.getElementById('btn-navegation-left');
const btnNavegationRight = document.getElementById('btn-navegation-right');
const list = document.querySelectorAll('.list');

let currentList = 1;

function Carousel() {
  list.forEach((listElement, index) => {
    listElement.style.order = index;
    listElement.classList.remove('selectedList');
  });

  list[currentList].classList.add('selectedList');
  list[currentList].style.order = 1;

  if (currentList > 0) {
    list[currentList - 1].style.order = 0;
  } else {
    list[list.length - 1].style.order = 0;
  }

  if (currentList < list.length - 1) {
    list[currentList + 1].style.order = 2;
  } else {
    list[0].style.order = 2;
  }
}

btnNavegationRight.addEventListener('click', function (event) {
  currentList++;
  if (currentList >= list.length) {
    currentList = 0;
  }
  Carousel();
});

btnNavegationLeft.addEventListener('click', function (event) {
  currentList--;
  if (currentList < 0) {
    currentList = list.length - 1;
  }
  Carousel();
});
