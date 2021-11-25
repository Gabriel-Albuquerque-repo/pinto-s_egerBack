import { Schema, model, Document } from 'mongoose';

interface UserInterface extends Document {
    email?: string,
    firtsName: String,
    lastName: String,
}

const UserSchema = new Schema({
  email: String,
  firtsName: String,
  lastName: String,
}, {
  timestamps: true,
});

export default model<UserInterface>('User', UserSchema);
