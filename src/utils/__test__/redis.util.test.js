jest.mock('redis', () => jest.requireActual('redis-mock'));
const { retrieveToken } = require('../redis.util');
const { redisClient } = require('../../redis');

describe('get Access Token Util', () => {
  it('should throw error with redis get method', async () => {
    const mockUsername = '161t2357647325';
    jest.spyOn(redisClient, 'get').mockImplementation((username, callback) => { callback(new Error('error'), undefined); });
    try {
      await retrieveToken(mockUsername);
    } catch (error) {
      expect(error.message).toEqual('error');
    }
  });

  it('should return userdata', async () => {
    const mockUsername = 'appy385';
    const mockAccessToken = 'dsbhfjvdbsjvsd';
    jest.spyOn(redisClient, 'get').mockImplementation((username, callback) => { callback(undefined, mockAccessToken); });
    const data = await retrieveToken(mockUsername);
    expect(data).toBe(mockAccessToken);
  });
});
