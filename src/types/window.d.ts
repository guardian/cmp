import { getConsentFor } from '../getConsentFor';
import { onConsentChange } from '../onConsentChange';
import { CCPAData } from './ccpa';
import { TCData } from './tcfv2/TCData';
import { Framework, PubData, WillShowPrivacyMessage } from '.';

type OnMessageChoiceSelect = (
	arg0: number,
	arg1: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 9 | 10 | 11 | 12 | 13 | 14 | 15,
) => void;

declare global {
	interface Window {
		// *************** START commercial.dcr.js hotfix ***************
		guCmpHotFix: {
			initialised?: boolean;
			framework?: Framework;
			cmp?: {
				init: ({
					pubData,
					framework,
				}: {
					pubData?: PubData | undefined;
					framework: Framework;
				}) => void;
				willShowPrivacyMessage: WillShowPrivacyMessage;
				showPrivacyManager: () => void;
				version: typeof __PACKAGE_VERSION__;
				__isDisabled: () => boolean;
				__disable: () => void;
				__enable: () => void;
			};

			onConsentChange?: typeof onConsentChange;
			getConsentFor?: typeof getConsentFor;
		};
		// *************** END commercial.dcr.js hotfix ***************

		// sourcepoint's libraries - only one should be present at a time
		_sp_ccpa?: {
			config: {
				mmsDomain: 'https://sourcepoint.theguardian.com';
				ccpaOrigin: 'https://ccpa-service.sp-prod.net';
				accountId: number;
				getDnsMsgMms: boolean;
				alwaysDisplayDns: boolean;
				siteHref: string | null;
				targetingParams: {
					framework: 'ccpa' | 'aus';
				};
				pubData: PubData;
				events?: {
					onConsentReady: () => void;
					onMessageReady: () => void;
					onMessageReceiveData: (data: { msg_id: 0 | string }) => void;
					onMessageChoiceSelect: OnMessageChoiceSelect;
				};
			};
			loadPrivacyManagerModal?: (unknown: unknown, id: string) => void; // this function is undocumented
		};
		_sp_?: {
			config: {
				baseEndpoint: 'https://sourcepoint.theguardian.com';
				accountId: number;
				propertyHref: string | null;
				propertyId?: string;
				targetingParams: {
					framework: 'tcfv2';
				};
				pubData: PubData;
				events?: {
					onConsentReady: () => void;
					onMessageReady: () => void;
					onMessageReceiveData: (data: { messageId: 0 | string }) => void;
					onMessageChoiceSelect: OnMessageChoiceSelect;
				};
			};
			loadPrivacyManagerModal?: (id: number) => void;
		};

		// IAB interfaces - only one should be present at a time
		__uspapi?: (
			command: string,
			version: number,
			callback: (tcData: CCPAData | undefined, success: boolean) => void,
		) => void;
		__tcfapi?: (
			command: string,
			version: number,
			callback: (tcData: TCData, success: boolean) => void,
			vendorIDs?: number[],
		) => void;
	}
}
