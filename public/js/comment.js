const newFormHandler = async (event) => {
    event.preventDefault();
  
    const body = document.querySelector('#commentBody').value.trim();

    if (event.target.hasAttribute('data-id')) {
      const post_id = event.target.getAttribute('data-id');

      if (body) {
        const response = await fetch(`/api/comments`, {
          method: 'post',
          body: JSON.stringify({ 
            post_id, 
            body 
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
          document.location.replace(`/post/${post_id}`);
        } else {
          alert('Failed to comment');
        }
      };
    };
  };


  document
    .querySelector('#newCommentForm')
    .addEventListener('click', newFormHandler);