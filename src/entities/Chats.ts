import { uuid } from 'uuidv4';

export default class Chat {
  public readonly id: string;

  public CreatedAt: Date;

  public listChatUsersId: Array<{
    userPaticipantId: string,
    userParticipantName: string,
  }>;

  public chat: Array<{
    userWhoSentMessage: string,
    dateOfMessageSent: Date,
    messageSent: string,
  }>;

  // eslint-disable-next-line no-unused-vars
  constructor(props: Omit<Chat, 'id'>, id? : string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
