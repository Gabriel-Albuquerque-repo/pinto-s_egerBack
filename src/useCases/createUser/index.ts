/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import MongoUsersRepository from '@repositories/implementations/MongoUsersRepository';
import CreateUserController from './CreateUserController';
import CreateUserUseCase from './CreateUserUseCase';

const mongoUsersRepository = new MongoUsersRepository();

const createUserUseCase = new CreateUserUseCase(mongoUsersRepository);

const createUserController = new CreateUserController(createUserUseCase);

// Joga lá na routes o createUserController!
export { createUserUseCase, createUserController };
