import {
	init as initSourcepoint,
	willShowPrivacyMessage as sourcepointWillShowPrivacyMessage,
} from '../ccpa/sourcepoint';
import { mark } from '../lib/mark';
import { PRIVACY_MANAGER_AUSTRALIA } from '../lib/sourcepointConfig';
import {
	PubData,
	SourcepointImplementation,
	WillShowPrivacyMessage,
} from '../types';

const init = (pubData?: PubData): void => {
	mark('cmp-ccpa-init');
	initSourcepoint(pubData, true);
};

const willShowPrivacyMessage: WillShowPrivacyMessage = () =>
	sourcepointWillShowPrivacyMessage;

function showPrivacyManager(): void {
	// eslint-disable-next-line no-underscore-dangle
	window._sp_ccpa?.loadPrivacyManagerModal?.(null, PRIVACY_MANAGER_AUSTRALIA);
}

export const AUS: SourcepointImplementation = {
	init,
	willShowPrivacyMessage,
	showPrivacyManager,
};
