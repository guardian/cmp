/* eslint-disable no-underscore-dangle */

import { runStub } from './sourcepoint-stub';
import { mark } from '../mark';
import { isGuardianDomain } from '../domain';

// https://documentation.sourcepoint.com/web-implementation/sourcepoint-gdpr-and-tcf-v2-support-beta/gdpr-and-tcf-v2-setup-and-configuration#1-two-step-process-to-implement-the-gdpr-and-tcf-v2-code-snippet

declare global {
	interface Window {
		_sp_ccpa: {
			config: {
				mmsDomain: 'https://consent.theguardian.com';
				ccpaOrigin: 'https://ccpa-service.sp-prod.net';
				accountId: string;
				getDnsMsgMms: boolean;
				alwaysDisplayDns: boolean;
				siteHref: string | null;
				events?: {
					onConsentReady?: () => void;
					onMessageReady?: () => void;
					onMessageReceiveData?: onMessaReceiveDataCallback;
				};
			};
			loadPrivacyManagerModal?: (unknown: unknown, id: string) => {}; // this function is undocumented
		};
		__uspapi: (
			command: string,
			version: number,
			callback: (uspdata: UspData | undefined, success: boolean) => void,
		) => void;
	}
}

export interface MsgData {
	msg_id: number;
}

interface UspData {
	version: number;
	uspString: string;
}

type onReadyCallback = () => void;
type onMessaReceiveDataCallback = (data: MsgData) => void;
type PromiseResolver = (result: boolean) => void;

const accountId = '1257';

let willShowUi: Promise<boolean> | null = null;
let willShowUiResolver: PromiseResolver | null = null;

export const init = (onCcpaReadyCallback: onReadyCallback) => {
	mark('cmp-ccpa-init');

	willShowUi = new Promise<boolean>((resolve) => {
		willShowUiResolver = resolve;
	});

	// make sure nothing else on the page has accidentally
	// used the _sp_* name as well
	if (window._sp_ccpa) {
		throw new Error(
			'Sourcepoint CCPA global (window._sp_ccpa) is already defined!',
		);
	}
	runStub();

	window._sp_ccpa = {
		config: {
			mmsDomain: 'https://consent.theguardian.com',
			ccpaOrigin: 'https://ccpa-service.sp-prod.net',
			accountId,
			getDnsMsgMms: true,
			alwaysDisplayDns: false,
			siteHref: isGuardianDomain() ? null : 'https://test.theguardian.com',
			events: {
				onConsentReady() {
					mark('cmp-ccpa-got-consent');
					onCcpaReadyCallback();
				},
				onMessageReady: () => {
					mark('cmp-ccpa-ui-displayed');
				},
				onMessageReceiveData: (data) => {
					willShowUiResolver?.(data.msg_id !== 0);
				},
			},
		},
	};

	const ccpaLib = document.createElement('script');
	ccpaLib.id = 'sourcepoint-ccpa-lib';
	ccpaLib.src = 'https://ccpa.sp-prod.net/ccpa.js';
	document.body.appendChild(ccpaLib);
};

export const checkWillShowUi = (): Promise<boolean> => {
	return willShowUi ?? Promise.reject();
};
