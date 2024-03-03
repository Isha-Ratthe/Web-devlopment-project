const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = form.querySelector('input[name="username"]').value;
  const password = form.querySelector('input[name="password"]').value;

  // Validate the username and password
  if (username === '' || password === '') {
    alert('Please enter a username and password.');
    return;
  }

  // Send the login request to the server
  const request = new XMLHttpRequest();
  request.open('POST', '/login');
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify({ username, password }));

  request.addEventListener('load', () => {
    if (request.status === 200) {
      // Login successful
      window.location.href = '/';
    } else {
      // Login failed
      alert('Invalid username or password.');
    }
  });
});