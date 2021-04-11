import { IUser } from "./models/user.model";

export interface InputUser {
  _id: IUser['_id'];
  email: IUser['email'];
}

export function getUserEmailById(
  user: InputUser,
  users: InputUser[]
): InputUser['email'] {
  return users.filter((item: InputUser) => item._id === user._id)[0].email;
}