import { uuid } from 'uuidv4';

export default class User {
  public readonly id?: string;

  public googleId: string;

  public name: string;

  public email: string;

  public createdAt: number;

  public lastLogin?: number;

  public chatsPathList?: Array<{
    path: string,
  }>;

  public friendList?: Array<{
    friendId: string,
    name: string,
  }>;

  // eslint-disable-next-line no-unused-vars
  constructor(props: Omit<User, 'googleId'>, id? : string, lastLogin?: number) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }

    if (!lastLogin) {
      this.lastLogin = Date.now();
    }
  }
}
