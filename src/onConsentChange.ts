import { getConsentState as getAUSConsentState } from './aus/getConsentState';
import { getConsentState as getCCPAConsentState } from './ccpa/getConsentState';
import { getCurrentFramework } from './getCurrentFramework';
import { getConsentState as getTCFv2ConsentState } from './tcfv2/getConsentState';
import type { Callback, CallbackQueueItem, ConsentState } from './types';

// callbacks cache
const callBackQueue: CallbackQueueItem[] = [];

const invokeCallback = (callback: CallbackQueueItem, state: ConsentState) => {
	// In TCFv2, Don’t only invoke callbacks if event status is either:
	// - useractioncomplete
	// - cmpuishown
	if (state.tcfv2?.eventStatus === 'cmpuishown') return;

	const stateString = JSON.stringify(state);

	// only invoke callback if the consent state has changed
	if (stateString !== callback.lastState) {
		callback.fn(state);
		callback.lastState = stateString;
	}
};

const getConsentState: () => Promise<ConsentState> = async () => {
	switch (getCurrentFramework()) {
		case 'aus':
			return { aus: await getAUSConsentState() };
		case 'ccpa':
			return { ccpa: await getCCPAConsentState() };
		case 'tcfv2':
			return { tcfv2: await getTCFv2ConsentState() };
		default:
			throw new Error('no IAB consent framework found on the page');
	}
};

// invokes all stored callbacks with the current consent state
export const invokeCallbacks = (): void => {
	if (callBackQueue.length === 0) return;
	void getConsentState().then((state) => {
		callBackQueue.forEach((callback) => invokeCallback(callback, state));
	});
};

export const onConsentChange: (fn: Callback) => void = (callBack) => {
	const newCallback: CallbackQueueItem = { fn: callBack };

	callBackQueue.push(newCallback);

	// if consentState is already available, invoke callback immediately
	getConsentState()
		.then((consentState) => {
			invokeCallback(newCallback, consentState);
		})
		/* istanbul ignore next */
		.catch(() => {
			// do nothing - callback will be added the list anyway and executed when consent changes
		});
};

export const _ = { getConsentState };
