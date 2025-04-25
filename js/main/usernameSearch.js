document.addEventListener('DOMContentLoaded', function () {
  const username = localStorage.getItem('username');
  const searchInput = document.querySelector('.input');

  searchInput.placeholder = `What’s your next obsession, ${username}?`;
});
