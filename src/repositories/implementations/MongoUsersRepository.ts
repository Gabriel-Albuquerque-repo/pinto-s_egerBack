/* eslint-disable import/no-unresolved */
import User from '@entities/User';
import IUsersRepository from '@repositories/IUsersRepository';

export default class MongoUsersRepository implements IUsersRepository {
  async findByGoogleId(googleId: string): Promise<User> {

  }

  async save(user: User): Promise<void> {

  }
}
