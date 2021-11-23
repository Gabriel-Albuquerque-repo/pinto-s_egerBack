export default class User {
  public readonly id: string;

  public googleId: string;

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
}
