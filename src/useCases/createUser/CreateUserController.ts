/* eslint-disable import/extensions */
import { Request, Response } from 'express';
// eslint-disable-next-line import/no-unresolved
import CreateUserUseCase from './CreateUserUseCase';

export default class CreateUserController {
  private createUserUseCase: CreateUserUseCase;

  constructor(createUserUseCase: CreateUserUseCase) {
    this.createUserUseCase = createUserUseCase;
  }

  // eslint-disable-next-line class-methods-use-this
  public async handle(request: Request, response: Response): Promise<Response> {
    const { googleId, name, email } = request.body;

    try {
      await this.createUserUseCase.execute({
        googleId,
        name,
        email,
        createdAt: Date.now(),
      });

      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}
