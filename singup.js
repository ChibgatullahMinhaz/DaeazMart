document.getElementById('registerForm').onsubmit = function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('psw').value;
    
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    
    
  };