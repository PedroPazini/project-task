const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: '',
  },
  email: {
    type: String,
    required: true,
    default: '',
  },
  password: {
    type: String,
    required: true,
    default: '',
    select: false,
  },
  taskList: [
    {
      type: mongoose.Schema.Types.ObjectID,
      ref: 'Task',
    },
  ],
});

userSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.getSaltSync(8), null);
};
userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
