/* eslint-disable no-underscore-dangle */
import { getConsentFor } from './getConsentFor';

const googleAnalytics = '5e542b3a4cd8884eb41b5a72';

const tcfv2ConsentNotFound = {
	tcfv2: { vendorConsents: { doesnotexist: true } },
};

const tcfv2ConsentFoundTrue = {
	tcfv2: { vendorConsents: { [googleAnalytics]: true } },
};

const tcfv2ConsentFoundFalse = {
	tcfv2: { vendorConsents: { [googleAnalytics]: false } },
};

const ccpaWithConsent = { ccpa: { doNotSell: false } };

const ccpaWithoutConsent = { ccpa: { doNotSell: true } };

it('throws an error if the vendor found ', () => {
	expect(() => {
		getConsentFor('doesnotexist', tcfv2ConsentFoundTrue);
	}).toThrow("Vendor 'doesnotexist' not found");
});

test.each([
	['tcfv2', false, 'google-analytics', tcfv2ConsentNotFound],
	['tcfv2', true, 'google-analytics', tcfv2ConsentFoundTrue],
	['tcfv2', false, 'google-analytics', tcfv2ConsentFoundFalse],
	['ccpa', true, 'google-analytics', ccpaWithConsent],
	['ccpa', false, 'google-analytics', ccpaWithoutConsent],
])(
	`In %s mode, returns %s, for vendor %s`,
	(cmpMode, expected, vendor, mock) => {
		expect(getConsentFor(vendor, mock)).toBe(expected);
	},
);
