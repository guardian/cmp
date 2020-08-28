/* eslint-disable no-underscore-dangle */

import { CustomVendorConsents } from './types/CustomVendorConsents';
import { TCData } from './types/TCData';

type Command =
	| 'getTCData'
	| 'ping'
	| 'addEventListener'
	| 'removeEventListener'
	| 'getCustomVendorConsents'; // sourecepoint addition https://documentation.sourcepoint.com/web-implementation/sourcepoint-gdpr-and-tcf-v2-support/__tcfapi-getcustomvendorconsents-api

const api = (command: Command) =>
	new Promise((resolve, reject) => {
		if (window.__tcfapi) {
			window.__tcfapi(command, 2, (result, success) =>
				success
					? resolve(result)
					: reject(new Error('Unable to get tcfapi data')),
			);
		} else {
			reject(new Error('No __tcfapi found on window'));
		}
	});

export const getTCData = (): Promise<TCData> =>
	api('getTCData') as Promise<TCData>;

export const getCustomVendorConsents = (): Promise<CustomVendorConsents> =>
	api('getCustomVendorConsents') as Promise<CustomVendorConsents>;
