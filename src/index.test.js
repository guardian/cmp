import waitForExpect from 'wait-for-expect';
import { CCPA } from './ccpa';
import { disable, enable } from './disable';
import { TCFv2 } from './tcfv2';
import { cmp } from '.';

jest.mock('./ccpa', () => ({
	CCPA: {
		init: jest.fn(),
		showPrivacyManager: jest.fn(),
		willShowPrivacyMessage: () => Promise.resolve('iwillshowit'),
	},
}));

jest.mock('./tcfv2', () => ({
	TCFv2: {
		init: jest.fn(),
		showPrivacyManager: jest.fn(),
		willShowPrivacyMessage: () => Promise.resolve('iwillshowit'),
	},
}));

beforeEach(() => {
	window.guCmpHotFix.initialised = false;
	TCFv2.init.mockClear();
	CCPA.init.mockClear();
});

describe('cmp.init', () => {
	it('does nothing if CMP is disabled', () => {
		disable();

		cmp.init({ isInUsa: false });
		cmp.init({ isInUsa: true });

		expect(TCFv2.init).not.toHaveBeenCalled();
		expect(CCPA.init).not.toHaveBeenCalled();

		enable();
	});

	it('requires isInUsa to be true or false', () => {
		expect(() => {
			cmp.init({ pubData: {} });
		}).toThrow('required');
	});

	it('initializes CCPA when in the US', () => {
		cmp.init({ isInUsa: true });
		expect(CCPA.init).toHaveBeenCalledTimes(1);
	});

	it('initializes TCF when not in the US', () => {
		cmp.init({ isInUsa: false });
		expect(TCFv2.init).toHaveBeenCalledTimes(1);
	});
});

// *************** START commercial.dcr.js hotfix ***************
describe('hotfix cmp.init', () => {
	it('only initialises once per page', () => {
		cmp.init({ isInUsa: false });
		cmp.init({ isInUsa: false });
		cmp.init({ isInUsa: false });
		cmp.init({ isInUsa: false });
		expect(TCFv2.init).toHaveBeenCalledTimes(1);
		expect(window.guCmpHotFix.initialised).toBe(true);
	});

	it.todo('uses window.guCmpHotFix instances if they exist');
});
// *************** END commercial.dcr.js hotfix ***************

describe('cmp.willShowPrivacyMessage', () => {
	it('resolves regardless of when the cmp is initialised', () => {
		const willShowPrivacyMessage1 = cmp.willShowPrivacyMessage();

		cmp.init({ isInUsa: true });

		const willShowPrivacyMessage2 = cmp.willShowPrivacyMessage();

		return expect(
			Promise.all([willShowPrivacyMessage1, willShowPrivacyMessage2]),
		).resolves.toEqual(['iwillshowit', 'iwillshowit']);
	});
});

describe('cmp.showPrivacyManager', () => {
	it('shows CCPA privacy manager when in the US', () => {
		cmp.init({ isInUsa: true });

		cmp.showPrivacyManager();

		return waitForExpect(() =>
			expect(CCPA.showPrivacyManager).toHaveBeenCalledTimes(1),
		);
	});
	it('shows TCF privacy manager when not in the US', () => {
		cmp.init({ isInUsa: false });

		cmp.showPrivacyManager();

		return waitForExpect(() =>
			expect(TCFv2.showPrivacyManager).toHaveBeenCalledTimes(1),
		);
	});
});
