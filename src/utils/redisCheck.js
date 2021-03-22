const redisUtils = require('./redis.utils');

const TOKEN = 'kjrnvnrtkknkjnkfgnkn';
const USERNAME = 'Dwight';
const TOKEN_NOT_EXIST = 'jhefhjbererhjb';
redisUtils.storeToken(TOKEN, USERNAME);
redisUtils.retriveToken(TOKEN);
redisUtils.retriveToken(TOKEN_NOT_EXIST);
