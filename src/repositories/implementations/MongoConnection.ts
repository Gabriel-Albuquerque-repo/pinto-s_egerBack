/* eslint-disable no-console */
import mongoose from 'mongoose';

export default class MongoConnection {
  private stringConnect = process.env.MONGO_CONNECTION_STRING;

  public constructor() {
    mongoose.connect(this.stringConnect);

    const db = mongoose.connection;

    db.on('connected', () => {
      console.log('Mongoose default connection is open');
    });

    db.on('error', (err) => {
      console.log(`Mongoose default connection has occured \n${err}`);
    });

    db.on('disconnected', () => {
      console.log('Lost connection with mongoDB server.');
    });

    process.on('SIGINT', async () => {
      try {
        await db.close();
        console.log('Mongoose default connection is disconnected due to application termination');
      } catch (e) {
        console.log(e);
      }
      return process.exit(0);
    });
  }
}
