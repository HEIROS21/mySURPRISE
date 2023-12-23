 function validateLogin() {
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;

      // Check if the entered username and password match the expected values
      if (username === 'Geralyn' && password === '1815') {
        alert('Login successful!');
        window.location.href = 'dashboard.html';
        // You can redirect to another page or perform additional actions here
      } else {
        alert('Invalid username or password. Please try again.');
      }
    }
    function goBack() {
      window.location.href = 'index.html';
    }
