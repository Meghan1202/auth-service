const { logoutHandler } = require('../logout.handler');
const redisUtils = require('../../utils/redis.utils');

jest.mock('redis', () => jest.requireActual('redis-mock'));

describe('Logout handler', () => {
  let mockJson;
  let mockResponse;
  beforeEach(() => {
    mockJson = jest.fn();
    mockResponse = {
      status: jest.fn(() => ({ send: mockJson })),
    };
  });
  it('should set response status code to 200 on succesful logout', async () => {
    const mockRequest = {
      body: {
        token: 'abc',
      },
    };
    const logoutSpy = jest.spyOn(redisUtils, 'deleteToken').mockResolvedValue(true);
    await logoutHandler(mockRequest, mockResponse);
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(logoutSpy).toHaveBeenCalledWith(mockRequest.body.token);
  });
  it('should go to catch block when service throws error ', async () => {
    const mockRequest = {
      body: {
        token: 'abc',
      },
    };
    jest.spyOn(redisUtils, 'deleteToken').mockRejectedValue(false);
    await logoutHandler(mockRequest, mockResponse);
    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockJson).toHaveBeenCalled();
  });
});
