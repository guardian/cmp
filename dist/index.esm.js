var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _StorageFactory_storage, _local, _session, _a$2;
class StorageFactory {
    constructor(storage) {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields
        _StorageFactory_storage.set(this, void 0);
        try {
            const uid = new Date().toString();
            storage.setItem(uid, uid);
            const available = storage.getItem(uid) == uid;
            storage.removeItem(uid);
            if (available)
                __classPrivateFieldSet(this, _StorageFactory_storage, storage, "f");
        }
        catch (e) {
            // do nothing
        }
    }
    /**
     * Check whether storage is available.
     */
    isAvailable() {
        return Boolean(__classPrivateFieldGet(this, _StorageFactory_storage, "f"));
    }
    /* eslint-disable
        @typescript-eslint/no-unsafe-assignment,
        @typescript-eslint/no-unsafe-return,
        @typescript-eslint/no-explicit-any
        --
        - we're using the `try` to handle anything bad happening
        - JSON.parse returns an `any`, we really are returning an `any`
    */
    /**
     * Retrieve an item from storage.
     *
     * @param key - the name of the item
     */
    get(key) {
        try {
            const { value, expires } = JSON.parse(__classPrivateFieldGet(this, _StorageFactory_storage, "f")?.getItem(key) ?? '');
            // is this item has passed its sell-by-date, remove it
            if (expires && new Date() > new Date(expires)) {
                this.remove(key);
                return null;
            }
            return value;
        }
        catch (e) {
            return null;
        }
    }
    /* eslint-enable
        @typescript-eslint/no-unsafe-assignment,
        @typescript-eslint/no-unsafe-return,
        @typescript-eslint/no-explicit-any
    */
    /**
     * Save a value to storage.
     *
     * @param key - the name of the item
     * @param value - the data to save
     * @param expires - optional date on which this data will expire
     */
    set(key, value, expires) {
        return __classPrivateFieldGet(this, _StorageFactory_storage, "f")?.setItem(key, JSON.stringify({
            value,
            expires,
        }));
    }
    /**
     * Remove an item from storage.
     *
     * @param key - the name of the item
     */
    remove(key) {
        return __classPrivateFieldGet(this, _StorageFactory_storage, "f")?.removeItem(key);
    }
    /**
     * Removes all items from storage.
     */
    clear() {
        return __classPrivateFieldGet(this, _StorageFactory_storage, "f")?.clear();
    }
    /**
     * Retrieve an item from storage in its raw state.
     *
     * @param key - the name of the item
     */
    getRaw(key) {
        return __classPrivateFieldGet(this, _StorageFactory_storage, "f")?.getItem(key) ?? null;
    }
    /**
     * Save a raw value to storage.
     *
     * @param key - the name of the item
     * @param value - the data to save
     */
    setRaw(key, value) {
        return __classPrivateFieldGet(this, _StorageFactory_storage, "f")?.setItem(key, value);
    }
}
_StorageFactory_storage = new WeakMap();
/**
 * Manages using `localStorage` and `sessionStorage`.
 *
 * Has a few advantages over the native API, including
 * - failing gracefully if storage is not available
 * - you can save and retrieve any JSONable data
 *
 * All methods are available for both `localStorage` and `sessionStorage`.
 */
const storage = new (_a$2 = class {
        constructor() {
            _local.set(this, void 0);
            _session.set(this, void 0);
        }
        // creating the instance requires testing the native implementation
        // which is blocking. therefore, only create new instances of the factory
        // when it's accessed i.e. we know we're going to use it
        get local() {
            return (__classPrivateFieldSet(this, _local, __classPrivateFieldGet(this, _local, "f") || new StorageFactory(localStorage), "f"));
        }
        get session() {
            return (__classPrivateFieldSet(this, _session, __classPrivateFieldGet(this, _session, "f") || new StorageFactory(sessionStorage), "f"));
        }
    },
    _local = new WeakMap(),
    _session = new WeakMap(),
    _a$2)();

/**
 * You can only subscribe to teams from this list.
 * Add your team name below to start logging.
 *
 * Make sure your label has a contrast ratio of 4.5 or more.
 * */
const teams = {
    common: {
        background: '#052962',
        font: '#ffffff',
    },
    commercial: {
        background: '#77EEAA',
        font: '#004400',
    },
    cmp: {
        background: '#FF6BB5',
        font: '#2F0404',
    },
    dotcom: {
        background: '#000000',
        font: '#ff7300',
    },
    design: {
        background: '#185E36',
        font: '#FFF4F2',
    },
    tx: {
        background: '#2F4F4F',
        font: '#FFFFFF',
    },
};

/**
 *
 * Handles team-based logging to the browser console
 *
 * Prevents a proliferation of console.log in client-side
 * code.
 *
 * Subscribing to logs relies on LocalStorage
 */
var _a$1;
const KEY = 'gu.logger';
const teamColours = teams;
const style = (team) => {
    const { background, font } = teamColours[team];
    return `background: ${background}; color: ${font}; padding: 2px 3px; border-radius:3px`;
};
/**
 * Runs in all environments, if local storage values are set.
 */
const log = (team, ...args) => {
    // TODO add check for localStorage
    if (!(storage.local.get(KEY) || '').includes(team))
        return;
    const styles = [style('common'), '', style(team), ''];
    console.log(`%c@guardian%c %c${team}%c`, ...styles, ...args);
};
/**
 * Subscribe to a team’s log
 * @param team the team’s unique ID
 */
const subscribeTo = (team) => {
    const teamSubscriptions = storage.local.get(KEY)
        ? storage.local.get(KEY).split(',')
        : [];
    if (!teamSubscriptions.includes(team))
        teamSubscriptions.push(team);
    storage.local.set(KEY, teamSubscriptions.join(','));
    log(team, '🔔 Subscribed, hello!');
};
/**
 * Unsubscribe to a team’s log
 * @param team the team’s unique ID
 */
const unsubscribeFrom = (team) => {
    log(team, '🔕 Unsubscribed, good-bye!');
    const teamSubscriptions = storage.local.get(KEY)
        .split(',')
        .filter((t) => t !== team);
    storage.local.set(KEY, teamSubscriptions.join(','));
};
/* istanbul ignore next */
if (typeof window !== 'undefined') {
    window.guardian || (window.guardian = {});
    (_a$1 = window.guardian).logger || (_a$1.logger = {
        subscribeTo,
        unsubscribeFrom,
        teams: () => Object.keys(teamColours),
    });
}

let currentFramework;
const setCurrentFramework = (framework) => {
    log('cmp', `Framework set to ${framework}`);
    currentFramework = framework;
};
const getCurrentFramework = () => currentFramework;

const mark = (label) => {
    window.performance?.mark?.(label);
    {
        log('cmp', '[event]', label);
    }
};

const isServerSide = typeof window === 'undefined';
const serverSideWarn = () => {
    console.warn('This is a server-side version of the @guardian/consent-management-platform', 'No consent signals will be received.');
};
const serverSideWarnAndReturn = (arg) => {
    return () => {
        serverSideWarn();
        return arg;
    };
};
const cmp$1 = {
    __disable: serverSideWarn,
    __enable: serverSideWarnAndReturn(false),
    __isDisabled: serverSideWarnAndReturn(false),
    hasInitialised: serverSideWarnAndReturn(false),
    init: serverSideWarn,
    showPrivacyManager: serverSideWarn,
    version: 'n/a',
    willShowPrivacyMessage: serverSideWarnAndReturn(Promise.resolve(false)),
    willShowPrivacyMessageSync: serverSideWarnAndReturn(false),
};
const onConsentChange$2 = () => {
    return serverSideWarn();
};
const getConsentFor$2 = (vendor, consent) => {
    console.log(`Server-side call for getConsentFor(${vendor}, ${JSON.stringify(consent)})`, 'getConsentFor will always return false server-side');
    serverSideWarn();
    return false;
};

let isGuardian;
const isGuardianDomain = () => {
    if (typeof isGuardian === 'undefined') {
        if (isServerSide) {
            isGuardian = true;
        }
        else {
            isGuardian = window.location.host.endsWith('.theguardian.com');
        }
    }
    return isGuardian;
};

const ACCOUNT_ID = 1257;
const PRIVACY_MANAGER_CCPA = 540252;
const PRIVACY_MANAGER_TCFV2 = 106842;
const PRIVACY_MANAGER_AUSTRALIA = 540341;
const ENDPOINT = isGuardianDomain()
    ? 'https://sourcepoint.theguardian.com'
    : 'https://cdn.privacy-mgmt.com';

const api$2 = (command) => new Promise((resolve, reject) => {
    if (window.__uspapi) {
        window.__uspapi(command, 1, (result, success) => success
            ? resolve(result)
            :
                reject(new Error(`Unable to get ${command} data`)));
    }
    else {
        reject(new Error('No __uspapi found on window'));
    }
});
const getUSPData$1 = () => api$2('getUSPData');

const getConsentState$3 = async () => {
    const uspData = await getUSPData$1();
    const optedOut = uspData.uspString.charAt(2) === 'Y';
    return {
        personalisedAdvertising: !optedOut,
    };
};

const api$1 = (command) => new Promise((resolve, reject) => {
    if (window.__uspapi) {
        window.__uspapi(command, 1, (result, success) => success
            ? resolve(result)
            :
                reject(new Error(`Unable to get ${command} data`)));
    }
    else {
        reject(new Error('No __uspapi found on window'));
    }
});
const getUSPData = () => api$1('getUSPData');

const getConsentState$2 = async () => {
    const uspData = await getUSPData();
    return {
        doNotSell: uspData.uspString.charAt(2) === 'Y',
    };
};

const api = (command) => new Promise((resolve, reject) => {
    if (window.__tcfapi) {
        window.__tcfapi(command, 2, (result, success) => success
            ? resolve(result)
            :
                reject(new Error(`Unable to get ${command} data`)));
    }
    else {
        reject(new Error('No __tcfapi found on window'));
    }
});
const getTCData = () => api('getTCData');
const getCustomVendorConsents = () => api('getCustomVendorConsents');

const defaultConsents = {
    '1': false,
    '2': false,
    '3': false,
    '4': false,
    '5': false,
    '6': false,
    '7': false,
    '8': false,
    '9': false,
    '10': false,
};
const getConsentState$1 = async () => {
    const [tcData, customVendors] = await Promise.all([
        getTCData(),
        getCustomVendorConsents(),
    ]);
    if (typeof tcData === 'undefined') {
        const currentFramework = getCurrentFramework() ?? 'undefined';
        throw new Error(`No TC Data found with current framework: ${currentFramework}`);
    }
    const consents = {
        ...defaultConsents,
        ...tcData.purpose.consents,
    };
    const { eventStatus, gdprApplies, tcString, addtlConsent } = tcData;
    const { grants } = customVendors;
    const vendorConsents = Object.keys(grants)
        .sort()
        .reduce((acc, cur) => ({ ...acc, [cur]: grants[cur].vendorGrant }), {});
    return {
        consents,
        eventStatus,
        vendorConsents,
        addtlConsent,
        gdprApplies,
        tcString,
    };
};

const callBackQueue = [];
const awaitingUserInteractionInTCFv2 = (state) => state.tcfv2?.eventStatus === 'cmpuishown';
const invokeCallback = (callback, state) => {
    if (awaitingUserInteractionInTCFv2(state))
        return;
    const stateString = JSON.stringify(state);
    if (stateString !== callback.lastState) {
        callback.fn(state);
        callback.lastState = stateString;
    }
};
const getConsentState = async () => {
    switch (getCurrentFramework()) {
        case 'aus':
            return { aus: await getConsentState$3() };
        case 'ccpa':
            return { ccpa: await getConsentState$2() };
        case 'tcfv2':
            return { tcfv2: await getConsentState$1() };
        default:
            throw new Error('no IAB consent framework found on the page');
    }
};
const invokeCallbacks = () => {
    if (callBackQueue.length === 0)
        return;
    void getConsentState().then((state) => {
        if (awaitingUserInteractionInTCFv2(state))
            return;
        callBackQueue.forEach((callback) => invokeCallback(callback, state));
    });
};
const onConsentChange$1 = (callBack) => {
    const newCallback = { fn: callBack };
    callBackQueue.push(newCallback);
    void getConsentState()
        .then((consentState) => {
        invokeCallback(newCallback, consentState);
    })
        .catch(() => {
    });
};

/* eslint-disable -- this is third party code */
/* istanbul ignore file */

const stub_ccpa = () => {
	(function () {
		var e = false;
		var c = window;
		var t = document;
		function r() {
			if (!c.frames['__uspapiLocator']) {
				if (t.body) {
					var a = t.body;
					var e = t.createElement('iframe');
					e.style.cssText = 'display:none';
					e.name = '__uspapiLocator';
					a.appendChild(e);
				} else {
					setTimeout(r, 5);
				}
			}
		}
		r();
		function p() {
			var a = arguments;
			__uspapi.a = __uspapi.a || [];
			if (!a.length) {
				return __uspapi.a;
			} else if (a[0] === 'ping') {
				a[2]({ gdprAppliesGlobally: e, cmpLoaded: false }, true);
			} else {
				__uspapi.a.push([].slice.apply(a));
			}
		}
		function l(t) {
			var r = typeof t.data === 'string';
			try {
				var a = r ? JSON.parse(t.data) : t.data;
				if (a.__cmpCall) {
					var n = a.__cmpCall;
					c.__uspapi(n.command, n.parameter, function (a, e) {
						var c = {
							__cmpReturn: {
								returnValue: a,
								success: e,
								callId: n.callId,
							},
						};
						t.source.postMessage(r ? JSON.stringify(c) : c, '*');
					});
				}
			} catch (a) {}
		}
		if (typeof __uspapi !== 'function') {
			c.__uspapi = p;
			__uspapi.msgHandler = l;
			c.addEventListener('message', l, false);
		}
	})();
};

/* eslint-disable -- this is third party code */
/* istanbul ignore file */

const stub_tcfv2 = () => {
	!(function (t) {
		var e = {};
		function n(r) {
			if (e[r]) return e[r].exports;
			var o = (e[r] = { i: r, l: !1, exports: {} });
			return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
		}
		(n.m = t),
			(n.c = e),
			(n.d = function (t, e, r) {
				n.o(t, e) ||
					Object.defineProperty(t, e, { enumerable: !0, get: r });
			}),
			(n.r = function (t) {
				'undefined' != typeof Symbol &&
					Symbol.toStringTag &&
					Object.defineProperty(t, Symbol.toStringTag, {
						value: 'Module',
					}),
					Object.defineProperty(t, '__esModule', { value: !0 });
			}),
			(n.t = function (t, e) {
				if ((1 & e && (t = n(t)), 8 & e)) return t;
				if (4 & e && 'object' == typeof t && t && t.__esModule)
					return t;
				var r = Object.create(null);
				if (
					(n.r(r),
					Object.defineProperty(r, 'default', {
						enumerable: !0,
						value: t,
					}),
					2 & e && 'string' != typeof t)
				)
					for (var o in t)
						n.d(
							r,
							o,
							function (e) {
								return t[e];
							}.bind(null, o),
						);
				return r;
			}),
			(n.n = function (t) {
				var e =
					t && t.__esModule
						? function () {
								return t.default;
						  }
						: function () {
								return t;
						  };
				return n.d(e, 'a', e), e;
			}),
			(n.o = function (t, e) {
				return Object.prototype.hasOwnProperty.call(t, e);
			}),
			(n.p = ''),
			n((n.s = 3));
	})([
		function (t, e, n) {
			var r = n(2);
			t.exports = !r(function () {
				return (
					7 !=
					Object.defineProperty({}, 'a', {
						get: function () {
							return 7;
						},
					}).a
				);
			});
		},
		function (t, e) {
			t.exports = function (t) {
				return 'object' == typeof t
					? null !== t
					: 'function' == typeof t;
			};
		},
		function (t, e) {
			t.exports = function (t) {
				try {
					return !!t();
				} catch (t) {
					return !0;
				}
			};
		},
		function (t, e, n) {
			n(4),
				(function () {
					if ('function' != typeof window.__tcfapi) {
						var t,
							e = [],
							n = window,
							r = n.document;
						!n.__tcfapi &&
							(function t() {
								var e = !!n.frames.__tcfapiLocator;
								if (!e)
									if (r.body) {
										var o = r.createElement('iframe');
										(o.style.cssText = 'display:none'),
											(o.name = '__tcfapiLocator'),
											r.body.appendChild(o);
									} else setTimeout(t, 5);
								return !e;
							})() &&
							((n.__tcfapi = function () {
								for (
									var n = arguments.length,
										r = new Array(n),
										o = 0;
									o < n;
									o++
								)
									r[o] = arguments[o];
								if (!r.length) return e;
								if ('setGdprApplies' === r[0])
									r.length > 3 &&
										2 === parseInt(r[1], 10) &&
										'boolean' == typeof r[3] &&
										((t = r[3]),
										'function' == typeof r[2] &&
											r[2]('set', !0));
								else if ('ping' === r[0]) {
									var i = {
										gdprApplies: t,
										cmpLoaded: !1,
										apiVersion: '2.0',
									};
									'function' == typeof r[2] && r[2](i, !0);
								} else e.push(r);
							}),
							n.addEventListener(
								'message',
								function (t) {
									var e = 'string' == typeof t.data,
										r = {};
									try {
										r = e ? JSON.parse(t.data) : t.data;
									} catch (t) {}
									var o = r.__tcfapiCall;
									o &&
										n.__tcfapi(
											o.command,
											o.parameter,
											o.version,
											function (n, r) {
												var i = {
													__tcfapiReturn: {
														returnValue: n,
														success: r,
														callId: o.callId,
													},
												};
												e && (i = JSON.stringify(i)),
													t.source.postMessage(
														i,
														'*',
													);
											},
										);
								},
								!1,
							));
					}
				})();
		},
		function (t, e, n) {
			var r = n(0),
				o = n(5).f,
				i = Function.prototype,
				c = i.toString,
				u = /^s*function ([^ (]*)/;
			r &&
				!('name' in i) &&
				o(i, 'name', {
					configurable: !0,
					get: function () {
						try {
							return c.call(this).match(u)[1];
						} catch (t) {
							return '';
						}
					},
				});
		},
		function (t, e, n) {
			var r = n(0),
				o = n(6),
				i = n(10),
				c = n(11),
				u = Object.defineProperty;
			e.f = r
				? u
				: function (t, e, n) {
						if ((i(t), (e = c(e, !0)), i(n), o))
							try {
								return u(t, e, n);
							} catch (t) {}
						if ('get' in n || 'set' in n)
							throw TypeError('Accessors not supported');
						return 'value' in n && (t[e] = n.value), t;
				  };
		},
		function (t, e, n) {
			var r = n(0),
				o = n(2),
				i = n(7);
			t.exports =
				!r &&
				!o(function () {
					return (
						7 !=
						Object.defineProperty(i('div'), 'a', {
							get: function () {
								return 7;
							},
						}).a
					);
				});
		},
		function (t, e, n) {
			var r = n(8),
				o = n(1),
				i = r.document,
				c = o(i) && o(i.createElement);
			t.exports = function (t) {
				return c ? i.createElement(t) : {};
			};
		},
		function (t, e, n) {
			(function (e) {
				var n = function (t) {
					return t && t.Math == Math && t;
				};
				t.exports =
					n('object' == typeof globalThis && globalThis) ||
					n('object' == typeof window && window) ||
					n('object' == typeof self && self) ||
					n('object' == typeof e && e) ||
					Function('return this')();
			}.call(this, n(9)));
		},
		function (t, e) {
			var n;
			n = (function () {
				return this;
			})();
			try {
				n = n || new Function('return this')();
			} catch (t) {
				'object' == typeof window && (n = window);
			}
			t.exports = n;
		},
		function (t, e, n) {
			var r = n(1);
			t.exports = function (t) {
				if (!r(t)) throw TypeError(String(t) + ' is not an object');
				return t;
			};
		},
		function (t, e, n) {
			var r = n(1);
			t.exports = function (t, e) {
				if (!r(t)) return t;
				var n, o;
				if (
					e &&
					'function' == typeof (n = t.toString) &&
					!r((o = n.call(t)))
				)
					return o;
				if ('function' == typeof (n = t.valueOf) && !r((o = n.call(t))))
					return o;
				if (
					!e &&
					'function' == typeof (n = t.toString) &&
					!r((o = n.call(t)))
				)
					return o;
				throw TypeError("Can't convert object to primitive value");
			};
		},
	]);
};

const stub = (framework) => {
    if (framework === 'tcfv2')
        stub_tcfv2();
    else
        stub_ccpa();
};

let resolveWillShowPrivacyMessage;
const willShowPrivacyMessage$2 = new Promise((resolve) => {
    resolveWillShowPrivacyMessage = resolve;
});
const getProperty = (framework) => {
    if (framework == 'aus')
        return 'https://au.theguardian.com';
    return isGuardianDomain() ? null : 'https://test.theguardian.com';
};
const init$2 = (framework, pubData = {}) => {
    stub(framework);
    if (window._sp_) {
        throw new Error('Sourcepoint global (window._sp_) is already defined!');
    }
    setCurrentFramework(framework);
    invokeCallbacks();
    const frameworkMessageType = framework == 'tcfv2' ? 'gdpr' : 'ccpa';
    log('cmp', `framework: ${framework}`);
    log('cmp', `frameworkMessageType: ${frameworkMessageType}`);
    window._sp_queue = [];
    window._sp_ = {
        config: {
            baseEndpoint: ENDPOINT,
            accountId: ACCOUNT_ID,
            propertyHref: getProperty(framework),
            targetingParams: {
                framework,
            },
            pubData: { ...pubData, cmpInitTimeUtc: new Date().getTime() },
            events: {
                onConsentReady: (message_type, consentUUID, euconsent) => {
                    log('cmp', `onConsentReady ${message_type}`);
                    if (message_type != frameworkMessageType)
                        return;
                    log('cmp', `consentUUID ${consentUUID}`);
                    log('cmp', `euconsent ${euconsent}`);
                    mark('cmp-got-consent');
                    setTimeout(invokeCallbacks, 0);
                },
                onMessageReady: (message_type) => {
                    log('cmp', `onMessageReady ${message_type}`);
                    if (message_type != frameworkMessageType)
                        return;
                    mark('cmp-ui-displayed');
                },
                onMessageReceiveData: (message_type, data) => {
                    log('cmp', `onMessageReceiveData ${message_type}`);
                    if (message_type != frameworkMessageType)
                        return;
                    log('cmp', 'onMessageReceiveData ', data);
                    void resolveWillShowPrivacyMessage(data.messageId !== 0);
                },
                onMessageChoiceSelect: (message_type, choice_id, choiceTypeID) => {
                    log('cmp', `onMessageChoiceSelect message_type: ${message_type}`);
                    console.log();
                    if (message_type != frameworkMessageType)
                        return;
                    log('cmp', `onMessageChoiceSelect choice_id: ${choice_id}`);
                    log('cmp', `onMessageChoiceSelect choice_type_id: ${choiceTypeID}`);
                    if (choiceTypeID === 11 ||
                        choiceTypeID === 13 ||
                        choiceTypeID === 15) {
                        setTimeout(invokeCallbacks, 0);
                    }
                },
                onPrivacyManagerAction: function (message_type, pmData) {
                    log('cmp', `onPrivacyManagerAction message_type: ${message_type}`);
                    if (message_type != frameworkMessageType)
                        return;
                    log('cmp', `onPrivacyManagerAction ${pmData}`);
                },
                onMessageChoiceError: function (message_type, err) {
                    log('cmp', `onMessageChoiceError ${message_type}`);
                    if (message_type != frameworkMessageType)
                        return;
                    log('cmp', `onMessageChoiceError ${err}`);
                },
                onPMCancel: function (message_type) {
                    log('cmp', `onPMCancel ${message_type}`);
                    if (message_type != frameworkMessageType)
                        return;
                },
                onSPPMObjectReady: function () {
                    log('cmp', 'onSPPMObjectReady');
                },
                onError: function (message_type, errorCode, errorObject, userReset) {
                    log('cmp', `errorCode: ${message_type}`);
                    if (message_type != frameworkMessageType)
                        return;
                    log('cmp', `errorCode: ${errorCode}`);
                    log('cmp', errorObject);
                    log('cmp', `userReset: ${userReset}`);
                },
            },
        },
    };
    if (framework === 'tcfv2') {
        window._sp_.config.gdpr = {
            targetingParams: {
                framework,
            },
        };
    }
    else {
        window._sp_.config.ccpa = {
            targetingParams: {
                framework,
            },
        };
    }
    const spLib = document.createElement('script');
    spLib.id = 'sourcepoint-lib';
    spLib.src = `${ENDPOINT}/unified/wrapperMessagingWithoutDetection.js`;
    document.body.appendChild(spLib);
};

const init$1 = (framework, pubData) => {
    mark('cmp-init');
    init$2(framework, pubData);
};
const willShowPrivacyMessage$1 = () => willShowPrivacyMessage$2;
function showPrivacyManager$1() {
    switch (getCurrentFramework()) {
        case 'tcfv2':
            window._sp_?.gdpr?.loadPrivacyManagerModal?.(PRIVACY_MANAGER_TCFV2);
            break;
        case 'ccpa':
            window._sp_?.ccpa?.loadPrivacyManagerModal?.(PRIVACY_MANAGER_CCPA);
            break;
        case 'aus':
            window._sp_?.ccpa?.loadPrivacyManagerModal?.(PRIVACY_MANAGER_AUSTRALIA);
            break;
    }
}
const CMP = {
    init: init$1,
    willShowPrivacyMessage: willShowPrivacyMessage$1,
    showPrivacyManager: showPrivacyManager$1,
};

const COOKIE_NAME = 'gu-cmp-disabled';
const disable = () => {
    document.cookie = `${COOKIE_NAME}=true`;
};
const enable = () => {
    document.cookie = `${COOKIE_NAME}=false`;
};
const isDisabled = () => new RegExp(`${COOKIE_NAME}=true(\\W+|$)`).test(document.cookie);

const VendorIDs = {
    a9: ['5f369a02b8e05c308701f829'],
    acast: ['5f203dcb1f0dea790562e20f'],
    braze: ['5ed8c49c4b8ce4571c7ad801'],
    comscore: ['5efefe25b8e05c06542b2a77'],
    fb: ['5e7e1298b8e05c54a85c52d2'],
    'google-analytics': ['5e542b3a4cd8884eb41b5a72'],
    'google-mobile-ads': ['5f1aada6b8e05c306c0597d7'],
    'google-tag-manager': ['5e952f6107d9d20c88e7c975'],
    googletag: ['5f1aada6b8e05c306c0597d7'],
    ias: ['5e7ced57b8e05c485246ccf3'],
    inizio: ['5e37fc3e56a5e6615502f9c9'],
    ipsos: ['5f745ab96f3aae0163740409'],
    lotame: ['5ed6aeb1b8e05c241a63c71f'],
    nielsen: ['5ef5c3a5b8e05c69980eaa5b'],
    ophan: ['5f203dbeeaaaa8768fd3226a'],
    permutive: ['5eff0d77969bfa03746427eb'],
    prebid: ['5f92a62aa22863685f4daa4c'],
    redplanet: ['5f199c302425a33f3f090f51'],
    remarketing: ['5ed0eb688a76503f1016578f'],
    sentry: ['5f0f39014effda6e8bbd2006'],
    teads: ['5eab3d5ab8e05c2bbe33f399'],
    twitter: ['5e71760b69966540e4554f01'],
    'youtube-player': ['5e7ac3fae30e7d1bc1ebf5e8'],
};

const getConsentFor$1 = (vendor, consent) => {
    const sourcepointIds = VendorIDs[vendor];
    if (typeof sourcepointIds === 'undefined' || sourcepointIds === []) {
        throw new Error(`Vendor '${vendor}' not found, or with no Sourcepoint ID. ` +
            'If it should be added, raise an issue at https://git.io/JUzVL');
    }
    if (consent.ccpa) {
        return !consent.ccpa.doNotSell;
    }
    if (consent.aus) {
        return consent.aus.personalisedAdvertising;
    }
    const foundSourcepointId = sourcepointIds.find((id) => typeof consent.tcfv2?.vendorConsents[id] !== 'undefined');
    if (typeof foundSourcepointId === 'undefined') {
        console.warn(`No consent returned from Sourcepoint for vendor: '${vendor}'`);
        return false;
    }
    const tcfv2Consent = consent.tcfv2?.vendorConsents[foundSourcepointId];
    if (typeof tcfv2Consent === 'undefined') {
        console.warn(`No consent returned from Sourcepoint for vendor: '${vendor}'`);
        return false;
    }
    return tcfv2Consent;
};

const getFramework = (countryCode) => {
    let framework;
    switch (countryCode) {
        case 'US':
            framework = 'ccpa';
            break;
        case 'AU':
            framework = 'aus';
            break;
        case 'GB':
        default:
            framework = 'tcfv2';
            break;
    }
    return framework;
};

var _a, _b, _c;
if (!isServerSide) {
    window.guCmpHotFix || (window.guCmpHotFix = {});
}
let _willShowPrivacyMessage;
let initComplete = false;
let resolveInitialised;
const initialised = new Promise((resolve) => {
    resolveInitialised = resolve;
});
const init = ({ pubData, country }) => {
    if (isDisabled() || isServerSide)
        return;
    if (window.guCmpHotFix.initialised) {
        if (window.guCmpHotFix.cmp?.version !== "0.0.0-this-never-updates-in-source-code-refer-to-git-tags")
            console.warn('Two different versions of the CMP are running:', [
                "0.0.0-this-never-updates-in-source-code-refer-to-git-tags",
                window.guCmpHotFix.cmp?.version,
            ]);
        return;
    }
    window.guCmpHotFix.initialised = true;
    if (typeof country === 'undefined') {
        throw new Error('CMP initialised without `country` property. A 2-letter, ISO ISO_3166-1 country code is required.');
    }
    const framework = getFramework(country);
    CMP.init(framework, pubData ?? {});
    void CMP.willShowPrivacyMessage().then((willShowValue) => {
        _willShowPrivacyMessage = willShowValue;
        initComplete = true;
        log('cmp', 'initComplete');
    });
    resolveInitialised();
};
const willShowPrivacyMessage = () => initialised.then(() => CMP.willShowPrivacyMessage());
const willShowPrivacyMessageSync = () => {
    if (_willShowPrivacyMessage !== undefined) {
        return _willShowPrivacyMessage;
    }
    throw new Error('CMP has not been initialised. Use the async willShowPrivacyMessage() instead.');
};
const hasInitialised = () => initComplete;
const showPrivacyManager = () => {
    void initialised.then(CMP.showPrivacyManager);
};
const cmp = isServerSide
    ? cmp$1
    : ((_a = window.guCmpHotFix).cmp || (_a.cmp = {
        init,
        willShowPrivacyMessage,
        willShowPrivacyMessageSync,
        hasInitialised,
        showPrivacyManager,
        version: "0.0.0-this-never-updates-in-source-code-refer-to-git-tags",
        __isDisabled: isDisabled,
        __enable: enable,
        __disable: disable,
    }));
const onConsentChange = isServerSide
    ? onConsentChange$2
    : ((_b = window.guCmpHotFix).onConsentChange || (_b.onConsentChange = onConsentChange$1));
const getConsentFor = isServerSide
    ? getConsentFor$2
    : ((_c = window.guCmpHotFix).getConsentFor || (_c.getConsentFor = getConsentFor$1));

export { cmp, getConsentFor, onConsentChange };