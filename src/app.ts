import 'dotenv/config';
// import http from 'http';
import express from 'express';
import passport from 'passport';
import cookieSession from 'cookie-session';
import './auth/google/GoogleOauth2.ts';

const app = express();
// app.use(express.static(`${__dirname}/../public`));

// const serverHttp = http.createServer(app);

app.use(cookieSession({
  name: 'web session',
  keys: ['key1', 'key2'],
}));

const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
};

app.use(passport.initialize());

app.use(passport.session());

// app.get('/', (_, response) => response.sendFile('index.html'));

app.get('/failed', (_, response) => response.send('You failed to log in!'));

app.get('/good', isLoggedIn, (request, response) => response.send(`Welcome ${request.user.displayName}!`));

app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }),
);

app.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/failed', successRedirect: '/good' }),
  (_, response) => {
    // Successful authentication, redirect home.
    response.redirect('/good');
  },
);

app.get('/logout', (req, res) => {
  req.session = null;
  req.logout();
  res.redirect('/');
});

export default app;
