import { model, Schema } from "mongoose";

const UserSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  userPass: {
    type: String,
    required: true,
  },
});

const USER_MODEL = model("storage_name", UserSchema);
export default USER_MODEL;
