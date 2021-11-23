import { uuid } from 'uuidv4';

export default class User {
  public readonly id: string;

  public readonly googleId: string;

  public name: string;

  public email: string;

  public password: string;

  public createdAt: Date;

  public lastLogin: Date;

  public chatsPathList: Array<{
    id: string,
    pathh: string,
  }>;

  public friendList: Array<{
    id: string,
    name: string,
  }>;

  // eslint-disable-next-line no-unused-vars
  constructor(props: Omit<User, 'id' | 'googleId'>, id? : string, googleId? : string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
