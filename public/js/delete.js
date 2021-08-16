// const deletePost = async (event) => {
//   event.preventDefault();

//   const postId = window.location.toString().split('/')[
//     window.location.toString().split('/') - 1
//   ];

//   const response = await fetch(`/api/post/${id}`, {
//     method: 'DELETE',
//     headers: {
//       'Content-type': 'application/json',
//     },
//   });
//   if (response.ok) {
//     document.location.replace('/dashboard');
//   }
// };

// document.querySelector('.deleteBtn').addEventListener('click', deletePost);
