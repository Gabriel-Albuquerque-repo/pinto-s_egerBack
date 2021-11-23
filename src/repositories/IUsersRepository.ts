/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import User from '@entities/User';

export default interface IUsersRepository {
    findByGoogleId(googleId: string): Promise<User>;
    save(user: User): Promise<void>;
}
