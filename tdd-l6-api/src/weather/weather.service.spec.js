jest.mock("axios");
const axios = require('axios');
const weatherService = require('./weather.service');
const mockWeatherApiStub = require('./weather.api.stub.json');

beforeEach(() => {
  jest.clearAllMocks(); // clear usage data. calles made
  jest.resetAllMocks(); // super set of clear, reset mock implementation
});

describe('Weather API', () => {
  test('Weather', async () => {
    axios.get.mockResolvedValueOnce(mockWeatherApiStub); // run at the beginning
    const location = { city: 'Istanbul', weatherCode: 'TR' };
    const results = await weatherService.getWeather(location);
    expect(results).toEqual(mockWeatherApiStub.data);
  });
});
