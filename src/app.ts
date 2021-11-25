/* eslint-disable import/no-unresolved */
import 'dotenv/config';
import express from 'express';
import passport from 'passport';
import cookieSession from 'cookie-session';
// Precisa criar uma interface para desacoplar o mongo e o auth!
import MongoConnection from '@mongoConnection';
import '@googleAuth';
// import routes from './routes';

export default class App {
  public app: express.Application;

  public conn : MongoConnection;

  public constructor() {
    this.conn = new MongoConnection();

    this.app = express();

    this.middlewares();

    this.routes();
  }

  private middlewares() : void {
    this.app.use(express.json());

    this.app.use(express.urlencoded({ extended: false }));

    this.app.use(cookieSession({
      name: 'web session',
      keys: ['key1', 'key2'],
    }));

    this.app.use(passport.initialize());

    this.app.use(passport.session());
  }

  private routes(): void {
    // this.app.use(routes);
    this.app.get('/failed', (_, response) => response.send('You failed to log in!'));

    this.app.get('/good', (req, res, next) => {
      if (req.user) {
        next();
      } else {
        res.sendStatus(401);
      }
    }, (request, response) => response.send(`Welcome ${request.user.displayName}!`));

    // auth/google
    this.app.get(
      '/',
      passport.authenticate('google', { scope: ['profile', 'email'] }),
    );

    this.app.get(
      '/google/callback',
      passport.authenticate('google', { failureRedirect: '/failed', successRedirect: '/good' }),
      (_, response) => {
        // Successful authentication, redirect home.
        response.redirect('/good');
      },
    );

    this.app.get('/logout', (req, res) => {
      req.session = null;
      req.logout();
      res.redirect('/');
    });
  }
}
