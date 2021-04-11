import mongoose, { Schema, Types, Document } from 'mongoose';

export interface IUser extends Document {
  _id: Types.ObjectId,
  email: string;
  firstName: string;
  lastName: string;
  password: string,
  phone: string,
  status: string,
  accessToken: string,
  expireAccessToken: Date,
  passwordChangeToken: string,
  expirePasswordChange: Date,
  hasTeam: boolean
}


const UserSchema: Schema = new Schema({
  _id: Types.ObjectId,
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: String,
  phone: String,
  status: String,
  accessToken: String,
  expireAccessToken: Date,
  passwordChangeToken: String,
  expirePasswordChange: Date,
  hasTeam: Boolean
});

// Export the model and return your IUser interface
export default mongoose.model<IUser>('User', UserSchema);