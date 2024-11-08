 const express = require('express');

 const router = express.Router();

 // import controller
const {dummyLink,likepost, unlikePost} = require('../controllers/like');
const {createComment} = require('../controllers/comment');
const{createPost,getAllPosts} = require('../controllers/post');

 // mapping

 router.get("/dummyroute",dummyLink);
 router.post("/comments/create",createComment);
 router.post("/posts/create",createPost);
 router.get('/posts',getAllPosts);
 router.post("/likes/like",likepost);
 router.post("/likes/unlike",unlikePost)


// export
module.exports = router;