import express from 'express';
import passport from 'passport';
import cookieSession from 'cookie-session';
// import { connect } from 'mongoose';
import '@googleAuth';

class App {
  public app: express.Application;

  public constructor() {
    this.app = express();
    this.middlewares();
    // this.database();
    this.routes();
  }

  private middlewares() : void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  //   private database(): void {
  //     connect();
  //   }

  private routes(): void {
    this.app.get('/', (_, res) => res.send('Hello World'));
  }
}

export default new App().app;
