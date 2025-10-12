import mongoose, { Schema, Document } from "mongoose";
import { Topic } from "./Topic";

export interface Subject extends Document {
  name: string;
  topics: (mongoose.Types.ObjectId | Topic)[];
  notes?: string;
  userId: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const SubjectSchema: Schema<Subject> = new Schema(
  {
    name: {
      type: String,
      required: [true, "Subject name is required"],
      trim: true,
    },
    topics: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Topic",
      },
    ],
    notes: {
      type: String,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const SubjectModel =
  (mongoose.models.Subject as mongoose.Model<Subject>) ||
  mongoose.model<Subject>("Subject", SubjectSchema);

export default SubjectModel;
