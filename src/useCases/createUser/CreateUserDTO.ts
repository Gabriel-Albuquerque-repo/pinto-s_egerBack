/* eslint-disable semi */
export default interface ICreateUserRequestDTO {
    googleId: string,
    name: string,
    email: string,
    createdAt: number,
    chatsPathList: Array<{
        path: string,
    }>,
    friendList: Array<{
        friendId: string,
        name: string
    }>
}
