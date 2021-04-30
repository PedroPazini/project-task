const User = require('../models/user.js');

exports.post = async (data) => {
  const user = new User(data);
  user.password = user.generateHash(data.password);
  await user.save();
  return user;
};
