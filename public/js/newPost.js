const newFormHandler = async (event) => {
  event.preventDefault();

  const postTitle = document.querySelector('#postTitle').value.trim();
  const description = document.querySelector('#postDesc').value.trim();

  if (username && postTitle && description) {
    const response = await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({ username, postTitle, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/post');
    } else {
      alert('Failed to create new post');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/post/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/post');
    } else {
      alert('Failed to delete post');
    }
  }
};

document
  .querySelector('.newPostForm')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.activePosts')
  .addEventListener('click', delButtonHandler);
