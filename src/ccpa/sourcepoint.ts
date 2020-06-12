/* eslint-disable no-underscore-dangle */

import './sourcepoint-stub';
import { mark } from '../mark';

// https://documentation.sourcepoint.com/web-implementation/sourcepoint-gdpr-and-tcf-v2-support-beta/gdpr-and-tcf-v2-setup-and-configuration#1-two-step-process-to-implement-the-gdpr-and-tcf-v2-code-snippet

declare global {
    interface Window {
        _sp_ccpa: {
            config: {
                mmsDomain: 'https://message.sp-prod.net';
                ccpaOrigin: 'https://ccpa-service.sp-prod.net';
                accountId: string;
                getDnsMsgMms: boolean;
                alwaysDisplayDns: boolean;
                siteHref: string | null;
                events: {};
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

interface UspData {
    version: number;
    uspString: string;
}

type onReadyCallback = () => void;

const accountId = '1257';

const ccpaLib = document.createElement('script');
ccpaLib.id = 'sourcepoint-ccpa-lib';
ccpaLib.src = 'https://ccpa.sp-prod.net/ccpa.js';

export const init = (onCcpaReadyCallback: onReadyCallback) => {
    mark('cmp-ccpa-init');

    // make sure nothing else on the page has accidentally
    // used the _sp_* name as well
    if (window._sp_ccpa) {
        throw new Error(
            'Sourcepoint CCPA global (window._sp_ccpa) is already defined!',
        );
    }

    window._sp_ccpa = {
        config: {
            mmsDomain: 'https://message.sp-prod.net',
            ccpaOrigin: 'https://ccpa-service.sp-prod.net',
            accountId,
            getDnsMsgMms: true,
            alwaysDisplayDns: false,
            siteHref:
                window.location.host.indexOf('theguardian.com') !== -1
                    ? null
                    : 'https://test.theguardian.com',
            events: {
                onConsentReady() {
                    mark('cmp-ccpa-got-consent');
                    onCcpaReadyCallback();
                },
                onMessageReady: () => {
                    mark('cmp-ccpa-ui-displayed');
                },
            },
        },
    };

    document.body.appendChild(ccpaLib);
};
