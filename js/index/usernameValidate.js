document.addEventListener('DOMContentLoaded', function () {
  const username = document.getElementById('username');

  document.addEventListener('submit', function (event) {
    event.preventDefault();

    if (usernameValidate()) {
      const validUser = username.value;

      localStorage.setItem('username', validUser);
      console.log('funcionou');
      window.location.href = 'main.html';
    } else {
      localStorage.removeItem('username');
    }
  });

  function usernameValidate() {
    const usernameValue = username.value;
    const usernameAlert = document.getElementById('username-alert');

    if (usernameValue.trim() === '') {
      usernameAlert.style.display = 'block';
      usernameAlert.innerHTML = '<p>Please enter a username.</p>';
      return false;
    }

    const usernameRegex = /^[a-zA-Z0-9]{3,10}$/;

    if (!usernameRegex.test(usernameValue)) {
      usernameAlert.style.display = 'block';
      usernameAlert.innerHTML =
        '<p>Username must be 3-10 characters<br>(letters or numbers only).</p>';
      return false;
    }

    usernameAlert.style.display = 'none';
    return true;
  }
});
