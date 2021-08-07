// const { route } = require("./homeRoute")
// const withAuth = require('../../utils/auth');

// // needs ID
// router.get('/dashboard', async (req, res) => {
//     try {
//       const postData = await Post.findAll({
//         attributes: ['id', 'title', 'post_body', 'date_created', 'user_id'],
//         include: [
//           {
//             model: User,
//             as: 'user',
//             attributes: ['username'],
//           },
//           {
//             model: Comment,
//             as: 'comment',
//             attributes: ['id', 'user_id', 'comment_body'],
//           },
//         ],
//       });

//       const posts = postData.map((posts) =>
//         posts.get({
//           plain: true,
//         })
//       );
//       res.render('dashboard', {
//         posts,
//         loggedIn: req.session.loggedIn,
//       });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

// get by user id postMessage

// post route

// delete route
// update route
