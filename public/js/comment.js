const newComment = async (event) => {
  event.preventDefault();

  const comment_body = document
    .querySelector('input [name="comment_body"]')
    .value.trim();
  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (comment_body) {
    const response = await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({ comment_body, post_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  if (response.ok) {
    document.location.replace('/comment');
  } else {
    alert('Failed to create comment');
  }
};

document.querySelector('#commentForm').addEventListener('submit', newComment);
