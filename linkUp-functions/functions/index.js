const functions = require('firebase-functions');

const app = require('express')();

const FBAuth = require('./utilities/FBAuth');

const { getAllPosts, postOnePost } = require ('./handlers/posts');
const{ signup, login} = require('./handlers/users')

//Post routes
app.get('/posts', getAllPosts);
app.post('/post', FBAuth, postOnePost);


//users routes
app.post('/signup', signup);
app.post('/login', login);




 exports.api = functions.https.onRequest(app);