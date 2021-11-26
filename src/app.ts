/* eslint-disable import/no-unresolved */
import 'dotenv/config';
import express from 'express';
import passport from 'passport';
import cookieSession from 'cookie-session';
// Precisa criar uma interface para desacoplar o mongo e o auth!
import MongoConnection from '@mongoConnection';
import '@googleAuth';
import router from '@routes';

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
    this.app.use(router);
  }
}
