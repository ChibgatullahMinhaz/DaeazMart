  document.getElementById('login').onsubmit = function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if(username === 'admin' && password === 'password') {
      alert('Login successful!');
    } else {
      alert('Invalid credentials.');
    }
  };
