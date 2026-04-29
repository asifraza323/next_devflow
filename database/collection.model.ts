import { model, models, Schema, Types } from "mongoose";

export interface IVote {
  author: Types.ObjectId;
  question: Types.ObjectId;
}

const VoteSchema = new Schema<IVote>({
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  question: { type: Schema.Types.ObjectId, ref: "Question", required: true },
});

const Vote = models?.VoteSchema || model<IVote>("Vote", VoteSchema);
export default Vote;
