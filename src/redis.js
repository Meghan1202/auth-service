const redis = require('redis');
const dotenv = require('dotenv');

dotenv.config();

const REDIS_PORT = process.env.REDIS_PORT || 6379;
const REDIS_HOST = process.env.REDIS_HOST || 'localhost';

console.log(process.env.REDIS_HOST, process.env.REDIS_PORT);
const redisClient = redis.createClient({ port: REDIS_PORT, host: REDIS_HOST });

module.exports = { redisClient };
