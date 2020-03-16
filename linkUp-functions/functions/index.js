const functions = require('firebase-functions');

const app = require('express')();

const FBAuth = require('./utilities/FBAuth');

const { getAllPosts, postOnePost, getPost  } = require ('./handlers/posts');
const{ 
    signup, 
    login, 
    uploadImage, 
    addUserDetails,
    getAuthenticatedUser
} = require('./handlers/users')

//Post routes
app.get('/posts', getAllPosts);
app.post('/post', FBAuth, postOnePost);
app.get('/post/:postId', getPost);

//delete post
//like a post
//unlike a scream
//comment on post




//users routes
app.post('/signup', signup);
app.post('/login', login);
app.post('/user/image',FBAuth, uploadImage)
app.post('/user', FBAuth, addUserDetails)
app.get('/user', FBAuth, getAuthenticatedUser);


 exports.api = functions.https.onRequest(app);