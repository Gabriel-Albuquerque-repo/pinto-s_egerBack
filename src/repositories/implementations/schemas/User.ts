import { Schema, model, Document } from 'mongoose';

interface UserInterface extends Document {
    id: string,

    googleId: string,

    email?: string,

    firtsName: String,

    lastName: String,
}

const simplifyOptions = {
  type: String,

  required: true,

  trim: true,
};

const schema = new Schema<UserInterface>(
  {
    id: simplifyOptions,

    googleId: simplifyOptions,

    email: simplifyOptions,

    firtsName: simplifyOptions,

    lastName: simplifyOptions,
  },
  {
    timestamps: true,
    id: false,
    strict: false,
  },
);

export default model<UserInterface>('UserModel', schema);
