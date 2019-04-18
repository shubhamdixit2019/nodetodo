const express = require('express');
const authRouter = require('./app/routes/authRoutes');
const postRouter = require('./app/routes/postRoutes');
const userRouter = require('./app/routes/userRoutes');
const mongoose = require('./mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');


app.get('/signup', function(req, res) {
    res.render('auth/signup');
});
app.get('/login', function(req, res) {
    res.render('auth/login');
});
app.get('/logout', function(req, res) {
    res.render('auth/logout');
});

app.use('/auth', authRouter);
app.use('/post', postRouter);
app.use('/user', userRouter);

mongoose.connect(() => {
    app.listen(5000, () => console.log('app listening on port 5000!'));
  });