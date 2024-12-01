import mongoose from 'mongoose';

const userModel = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    default: 'user',
  },
});

const User = mongoose.model('User', userModel);

export default User;
