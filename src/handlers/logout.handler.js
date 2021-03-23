/* eslint-disable camelcase */
const redisUtils = require('../utils/redis.utils');

const logoutHandler = async (req, res) => {
  try {
    const { token } = req.body;
    await redisUtils.deleteToken(token);
    res.status(200).json({ message: 'logged out successfully ' });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  logoutHandler,
};
