/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import User from '@entities/User';
import IUsersRepository from '@repositories/IUsersRepository';
import ICreateUserRequestDTO from './CreateUserDTO';

export default class CreateUserUseCase {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByGoogleId(data.googleId);

    if (userAlreadyExists) {
      throw new Error('User Already exists');
    }

    const user = new User(data);

    await this.usersRepository.save(user);
  }
}
