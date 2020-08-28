import { ConsentList } from './ConsentList';
import { TCEventStatusCode } from './TCEventStatusCode';
import { TCPingStatusCode } from './TCPingStatusCode';

// https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consents-Framework/blob/master/TCFv2/IAB%20Tech%20Lab%20-%20CMP%20API%20v2.md#tcdata

export interface TCData {
	tcString: string;
	tcfPolicyVersion: number;
	cmpId: number;
	cmpVersion: number;

	/**
	 * true - GDPR Applies
	 * false - GDPR Does not apply
	 * undefined - unknown whether GDPR Applies
	 * see the section: "What does the gdprApplies value mean?"
	 */
	gdprApplies?: boolean;

	/*
	 * see addEventListener command
	 */
	eventStatus: TCEventStatusCode;

	/**
	 * see Ping Status Codes
	 */
	cmpStatus: TCPingStatusCode;

	/**
	 * If this TCData is sent to the callback of addEventListener: number,
	 * the unique ID assigned by the CMP to the listener function registered
	 * via addEventListener.
	 * Others: undefined.
	 */
	listenerId?: number;

	/*
	 * true - if using a service-specific or publisher-specific TC String
	 * false - if using a global TC String.
	 */
	isServiceSpecific: boolean;

	/**
	 * true - CMP is using publisher-customized stack descriptions
	 * false - CMP is NOT using publisher-customized stack descriptions
	 */
	useNonStandardStacks: boolean;

	/**
	 * Country code of the country that determines the legislation of
	 * reference.  Normally corresponds to the country code of the country
	 * in which the publisher's business entity is established.
	 */
	publisherCC: string;

	/**
	 * Only exists on service-specific TC
	 *
	 * true - Purpose 1 not disclosed at all. CMPs use PublisherCC to
	 * indicate the publisher's country of establishment to help Vendors
	 * determine whether the vendor requires Purpose 1 consent.
	 *
	 * false - There is no special Purpose 1 treatment status. Purpose 1 was
	 * disclosed normally (consent) as expected by TCF Policy
	 */
	purposeOneTreatment: boolean;

	/**
	 * Only exists on global-scope TC
	 */
	outOfBand: {
		allowedVendors: ConsentList;
		disclosedVendors: ConsentList;
	};
	purpose: {
		consents: ConsentList;
		legitimateInterests: ConsentList;
	};
	vendor: {
		consents: ConsentList;
		legitimateInterests: ConsentList;
	};
	specialFeatureOptins: ConsentList;
	publisher: {
		consents: ConsentList;
		legitimateInterests: ConsentList;
		customPurpose: {
			consents: ConsentList;
			legitimateInterests: ConsentList;
		};
		restrictions: {
			[key: string]: {
				/**
				 * 0 - Not Allowed
				 * 1 - Require Consents
				 * 2 - Require Legitimate Interest
				 */
				[key: string]: 0 | 1 | 2;
			};
		};
	};
}
