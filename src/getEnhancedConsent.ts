import { onConsentChange } from './onConsentChange';
import type { ConsentState, Framework } from './types';
import type { TCFv2ConsentList } from './types/tcfv2';

type ConsentStateEnhanced = ConsentState & {
	canTarget: boolean;
	framework: Framework | null;
};

const tcfv2ConsentedToAll = (consents: TCFv2ConsentList): boolean => {
	return (
		Object.keys(consents).length > 0 &&
		Object.values(consents).every(Boolean)
	);
};

const buildConsentStateEnhanced = (
	consentState: ConsentState,
	canTarget: boolean,
	framework: Framework | null,
): ConsentStateEnhanced => ({
	...consentState,
	canTarget,
	framework,
});

const enhanceConsentState = (state: ConsentState): ConsentStateEnhanced => {
	if (state.tcfv2) {
		return buildConsentStateEnhanced(
			state,
			tcfv2ConsentedToAll(state.tcfv2.consents),
			'tcfv2',
		);
	} else if (state.ccpa) {
		return buildConsentStateEnhanced(state, !state.ccpa.doNotSell, 'ccpa');
	} else if (state.aus) {
		return buildConsentStateEnhanced(
			state,
			state.aus.personalisedAdvertising,
			'aus',
		);
	}
	return buildConsentStateEnhanced(state, false, null);
};

/**
 * Wraps onConsentChange to provide:
 *
 *1. A promise that resolves on the initial consent state
 *
 *    This will only resolve once whereas callbacks passed to onConsentChange
 *    are executed each time consent state changes. Avoid using this function
 *    in contexts where subsequent consent states must be listened for.
 *
 *2. Additional properties for convenience on consent state i.e. `canTarget` and `framework`
 *
 *    - `canTarget`: if the user can be targeted for personalisation according to the active consent framework
 *    - `framework`: the active consent framework
 *
 * @returns Promise<ConsentStateEnhanced>
 */
const getEnhancedConsent = (): Promise<ConsentStateEnhanced> =>
	new Promise<ConsentStateEnhanced>((resolve, reject) => {
		onConsentChange((consentState) => {
			if (consentState.tcfv2 || consentState.ccpa || consentState.aus) {
				resolve(enhanceConsentState(consentState));
			}
			reject('Unknown framework');
		});
	});

export type { ConsentStateEnhanced };

export { getEnhancedConsent };
