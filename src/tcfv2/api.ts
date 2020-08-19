/* eslint-disable no-underscore-dangle */

import { TCData } from './types/TCData';
import { CustomVendorConsents } from './types/CustomVendorConsents';

type Command =
	| 'getTCData'
	| 'ping'
	| 'addEventListener'
	| 'removeEventListener'
	| 'getCustomVendorConsents'; // sourecepoint addition https://documentation.sourcepoint.com/web-implementation/sourcepoint-gdpr-and-tcf-v2-support/__tcfapi-getcustomvendorconsents-api

const api = (command: Command) =>
	new Promise((resolve, reject) => {
		if (window.__tcfapi) {
			window.__tcfapi?.(command, 2, (result, success) => {
				if (success) resolve(result);
				else reject(new Error('Unable to get tcfapi data'));
			});
		}
	});

export const getTCData = () => api('getTCData') as Promise<TCData>;
export const getCustomVendorConsents = () =>
	api('getCustomVendorConsents') as Promise<CustomVendorConsents>;
