import mongoose, { Document, Schema } from "mongoose";
import { Subject } from "./Subject";

export interface Education {
  degree: string;
  institution: string;
  passoutYear: string;
}

export interface SocialProfile {
  github?: string;
  linkedin?: string;
  x?: string;
}

export interface User extends Document {
  name: string;
  email: string;
  password: string;
  bio?: string;
  profilePic?: string;
  skills: string[];
  education?: Education;
  socialProfile?: SocialProfile;
  currentFocus?: string;
  subjects: (mongoose.Types.ObjectId | Subject)[];
  createdAt: Date;
  updatedAt: Date;
}

const EducationSchema: Schema<Education> = new Schema({
  degree: { type: String, required: true, trim: true },
  institution: { type: String, required: true, trim: true },
  passoutYear: { type: String, required: true, trim: true },
});

const SocialProfileSchema: Schema<SocialProfile> = new Schema({
  github: { type: String, trim: true },
  linkedin: { type: String, trim: true },
  x: { type: String, trim: true },
});

const UserSchema: Schema<User> = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      match: [/\S+@\S+\.\S+/, "Please use a valid email address"],
    },
    password: { type: String, required: true, trim: true, select: false },
    bio: { type: String },
    profilePic: { type: String },
    skills: { type: [String], default: [] },
    education: EducationSchema,
    socialProfile: SocialProfileSchema,
    currentFocus: { type: String },
    subjects: {
      type: [{ type: Schema.Types.ObjectId, ref: "Subject" }],
    },
  },
  { timestamps: true }
);

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);

export default UserModel;
