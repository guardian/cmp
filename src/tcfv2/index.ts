import { mark } from '../lib/mark';
import { PRIVACY_MANAGER_TCFV2 } from '../lib/sourcepointConfig';
import { PubData } from '../types/PubData';
import { SourcepointImplementation } from '../types/SourcepointImplementation';
import { WillShowPrivacyMessage } from '../types/WillShowPrivacyMessage';
import {
	init as initSourcepoint,
	willShowPrivacyMessage as sourcepointWillShowPrivacyMessage,
} from './sourcepoint';

const init = (pubData?: PubData): void => {
	mark('cmp-tcfv2-init');
	initSourcepoint(pubData);
};

const willShowPrivacyMessage: WillShowPrivacyMessage = () =>
	sourcepointWillShowPrivacyMessage;

function showPrivacyManager(): void {
	// eslint-disable-next-line no-underscore-dangle
	window._sp_?.loadPrivacyManagerModal?.(PRIVACY_MANAGER_TCFV2);
}

export const TCFv2: SourcepointImplementation = {
	init,
	willShowPrivacyMessage,
	showPrivacyManager,
};
