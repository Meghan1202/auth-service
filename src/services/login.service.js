/* eslint-disable camelcase */
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const redisUtils = require('../utils/redis.utils');

const loginUser = async (username, password) => {
  const user = await User.findOne({
    where: {
      username,
      password,
    },

  });
  if (user) {
    const jwtToken = jwt.sign({ username }, process.env.JWT_SECRET_KEY,
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRY_TIME });
    console.log('jwt:', jwtToken);
    await redisUtils.storeToken(jwtToken, username);
    const receivedUsername = await redisUtils.retrieveToken(jwtToken);
    console.log(receivedUsername);
    return jwtToken;
  }

  throw new Error('Unauthenticated');
};

module.exports = { loginUser };
