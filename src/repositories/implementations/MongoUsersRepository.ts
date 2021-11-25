/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import User from '@entities/User';
import IUsersRepository from '@repositories/IUsersRepository';
import UserModel from './schemas/User';

export default class MongoUsersRepository implements IUsersRepository {
  public async findByGoogleId(googleId: string): Promise<User> {
    const user = await UserModel.findOne({ googleId });

    return user;
  }

  public async save(user: User): Promise<void> {
    const newUser = new UserModel(user);

    await newUser.save();
  }
}
