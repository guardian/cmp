import uspData from './__fixtures__/api.getUSPData.json';
import { getUSPData } from './api';
import { getConsentState } from './getConsentState';

jest.mock('./api');
getUSPData.mockResolvedValue(uspData);

describe('getConsentState', () => {
	it('gets the consent state correctly', async () => {
		const { doNotSell } = await getConsentState();

		expect(getUSPData).toHaveBeenCalledTimes(1);
		expect(doNotSell).toBe(true);
	});
});
