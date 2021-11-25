import { uuid } from 'uuidv4';

export default class User {
  public readonly id?: string;

  public googleId?: string; // id

  public firstName?: string; // displayName.givenName

  public familyName?: string; // displayName.givenName

  public email?: string; // email

  public createdAt?: number;

  public updatedAt?: number;

  public chatsPathList?: Array<{
    path: string,
  }>;

  public friendList?: Array<{
    friendId: string,
    name: string,
  }>;

  // eslint-disable-next-line no-unused-vars
  constructor(props: Omit<User, 'id' | 'updatedAt'>, id? : string, updatedAt?: number) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }

    if (!updatedAt) {
      this.updatedAt = Date.now();
    }
  }
}
