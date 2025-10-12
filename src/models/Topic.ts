import mongoose, { Schema, Document } from "mongoose";

export interface Topic extends Document {
  name: string;
  completed: boolean;
  notes?: string;
  subjectId: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const TopicSchema: Schema<Topic> = new Schema(
  {
    name: {
      type: String,
      required: [true, "Topic name is required"],
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    notes: {
      type: String,
    },
    subjectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
      required: true,
    },
  },
  { timestamps: true }
);

const TopicModel =
  (mongoose.models.Topic as mongoose.Model<Topic>) ||
  mongoose.model<Topic>("Topic", TopicSchema);

export default TopicModel;
