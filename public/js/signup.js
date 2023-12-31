const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#usernameSU').value.trim();
    const password = document.querySelector('#passwordSU').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashBoard');
      } else {
        alert("Username already exists");
      }
    }
  };
  
  document
    .querySelector('#signupForm')
    .addEventListener('submit', signupFormHandler);