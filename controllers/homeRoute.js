const router = require('express').Router();
const { Post, Comment, User};
const sequelize = require('.../config/connection');

router.get('/', (req, res)=>{
    Post.findAll({
attributes:['id','title', 'post_body', 'date_created', 'user_id'],
include: [{
    model: User,
    as:'user',
    attributes:['username']
},{
    model: Comment,
    as:'comment',
    attributes:['id', 'user_id', 'comment_body']
},
],
    })
})

.then(postData) => {
    const posts = postData.map((posts)=> posts.get({
        plain: true
    }));
}