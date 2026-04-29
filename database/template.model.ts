import { model, models, Schema, Types } from "mongoose";

export interface ICollection {}

const CollectionSchema = new Schema<ICollection>({});

const Collection =
  models?.CollectionSchema ||
  model<ICollection>("Collection", CollectionSchema);
export default Collection;
