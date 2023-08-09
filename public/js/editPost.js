const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#postTitle').value.trim();
    const body = document.querySelector('#postBody').value.trim();

    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');

      console.log(id)

      if (title && body) {
        const response = await fetch(`/api/posts/${id}`, {
          method: 'PUT',
          body: JSON.stringify({ 
            title, 
            body 
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
          document.location.replace(`/dashboard`);
        } else {
          alert('Failed to update post');
        }
      }
    }
  };


  document
  .querySelector('#newPostForm')
  .addEventListener('click', newFormHandler);