document.addEventListener('DOMContentLoaded', function () {
  const username = localStorage.getItem('username');
  const searchInput = document.querySelector('.input');

  if ((username = null)) {
    searchInput.placeholder = `What’s your next obsession?`;
  } else {
    searchInput.placeholder = `What’s your next obsession, ${username}?`;
  }
});
