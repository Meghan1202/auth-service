const redis = require('redis');

// const client = redis.createClient(6379);

const client = redis.createClient({
  host: 'redis-auth-v2',
  port: 6379,
});

client
  .on('connect', () => {
    console.log('Redis connect');
  })
  .on('ready', () => {
    console.log('Redis ready');
  })
  .on('error', (e) => {
    console.log('Redis ready', e);
  })
  .on('close', () => {
    console.log('Redis close');
  })
  .on('reconnecting', () => {
    console.log('Redis reconnecting');
  })
  .on('end', () => {
    console.log('Redis end');
  });

module.exports = { client };
