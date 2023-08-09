const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#usernameLI').value.trim();
    const password = document.querySelector('#passwordLI').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert("Incorrect username or password");
      }
    };
  };

  document
    .querySelector('#loginForm')
    .addEventListener('submit', loginFormHandler);