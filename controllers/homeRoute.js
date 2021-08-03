const router = require('express').Router();
const { Post, Comment, User};
const sequelize = require('.../config/connection');

router.get('/', (req, res)=>{
    Post.findAll({
attributes:[
    
]
    })
})