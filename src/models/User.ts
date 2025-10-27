import mongoose, { Document, Schema } from "mongoose";
// import { Subject } from "./Subject";

export interface User extends Document {
  name: string;
  email: string;
  password: string;
  bio?: string;
  profilePic?: string;
  currentFocus?: string;
  subjects: string[];
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema<User> = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      index: true,
      match: [/\S+@\S+\.\S+/, "Please use a valid email address"],
    },
    password: { type: String, required: true, trim: true, select: false },
    bio: { type: String, default: "" },
    profilePic: { type: String, default: "" },
    currentFocus: { type: String, default: "" },
    subjects: {
      type: [String],
      required: true,
      validate: [
        (arr: string[]) => arr.length > 0,
        "At least one subject is required",
      ],
    },
  },
  { timestamps: true }
);

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);

export default UserModel;
