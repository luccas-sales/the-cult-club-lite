document.addEventListener('DOMContentLoaded', function () {
  const username = localStorage.getItem('username');
  const usernameContainer = document.getElementById('username-container');

  const usernameIconBox = '<i class="bi bi-person-bounding-box"></i>';
  const usernameIcon = '<i class="bi bi-person"></i>';

  const usernameHidden = username.replace(/[a-zA-Z0-9]/g, '*');

  usernameContainer.innerHTML = `<h2>
                ${usernameIconBox}${usernameHidden}
            </h2>`;

  usernameContainer.addEventListener('click', function (event) {
    if (usernameContainer.innerText === usernameHidden) {
      usernameContainer.innerHTML = `<h2>
        ${usernameIcon}${username}
    </h2>`;
    } else {
      usernameContainer.innerHTML = `<h2>
        ${usernameIconBox}${usernameHidden}
    </h2>`;
    }
  });
});
