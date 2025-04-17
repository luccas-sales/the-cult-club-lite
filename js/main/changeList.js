document.addEventListener('DOMContentLoaded', function () {
  const list = document.querySelectorAll('.list');

  let currentList = 1;

  list[currentList].classList.add('selectedList');

  list.forEach((list, index) => {
    list.style.order = index;
  });

  list.forEach((item) => {
    item.addEventListener('click', function (event) {
      if (Number(item.style.order) === 1) return;

      if (Number(item.style.order) === 0) {
        currentList--;
        if (currentList < 0) {
          currentList = list.length - 1;
        }

        list.forEach((list, index) => {
          list.style.order = index;
          list.classList.remove('selectedList');
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

      if (Number(item.style.order) === 2) {
        currentList++;
        if (currentList >= list.length) {
          currentList = 0;
        }

        list.forEach((list, index) => {
          list.style.order = index;
          list.classList.remove('selectedList');
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
    });
  });
});
