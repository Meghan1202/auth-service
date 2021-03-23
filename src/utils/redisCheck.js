const redisUtils = require('./redis.util');

const TOKEN = 'kjrnvnrtkknkjnkfgnkn';
const USERNAME = 'Dwight';
const TOKEN_NOT_EXIST = 'jhefhjbererhjb';
redisUtils.storeToken(TOKEN, USERNAME);
redisUtils.retrieveToken(TOKEN);
redisUtils.retrieveToken(TOKEN_NOT_EXIST);
