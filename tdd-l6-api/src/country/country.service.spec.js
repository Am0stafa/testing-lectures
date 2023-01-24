jest.mock("axios");
const axios = require('axios');
const countryService = require('./country.service');
const mockCountryApiStub = require('./country.api.stub.json');

//jest.mock("axios");

beforeEach(() => {
  jest.clearAllMocks();
  jest.resetAllMocks();
});

describe('Country API', () => {
  test('Country', async () => {
    //MRVO
    axios.get.mockResolvedValueOnce(mockCountryApiStub); // imp
    const location = { city: 'Istanbul', countryCode: 'TR' };
    const results = await countryService.getCountryInfo(location);
    expect(results).toEqual(mockCountryApiStub.data[0]);
  });
});
