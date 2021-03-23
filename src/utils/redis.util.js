const redis = require('redis');
const dotenv = require('dotenv');
const { redisClient } = require('../redis');

dotenv.config();

const storeToken = (token, username) => {
  redisClient.setex(token, process.env.ACCESS_TOKEN_EXPIRY_TIME, username, redis.print);
};

const retrieveToken = (token) => new Promise((resolve, reject) => {
  redisClient.get(token, (error, value) => {
    if (error) reject(error);
    resolve(value);
  });
});


module.exports = { storeToken, retrieveToken};
