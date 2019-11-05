import { getConsentState, registerStateChangeHandler } from './store';
import {
    GuPurposeState,
    GuPurpose,
    GuResponsivePurposeEventId,
    IabPurposeState,
    ItemState,
} from './types';
import { GU_PURPOSE_LIST } from './config';

type GuPurposeCallback = (state: ItemState) => void;
type IabPurposeCallback = (state: IabPurposeState) => void;

type GuPurposeRegister = {
    [key in GuResponsivePurposeEventId]: GuPurposeCallback[];
};

let initialised = false;

const buildGuRegister = (): GuPurposeRegister => {
    const { purposes } = GU_PURPOSE_LIST;

    const purposeRegister = purposes.reduce(
        (register, purpose: GuPurpose): {} => {
            if (purpose.alwaysEnabled) {
                return register;
            }

            return {
                ...register,
                [purpose.eventId]: [],
            };
        },
        {},
    );

    return purposeRegister as GuPurposeRegister;
};

const guPurposeRegister: GuPurposeRegister = buildGuRegister();
const iabPurposeRegister: IabPurposeCallback[] = [];

const init = (): void => {
    if (!initialised) {
        registerStateChangeHandler(onStateChange);
        initialised = true;
    }
};

const onStateChange = (
    guState: GuPurposeState,
    iabState: IabPurposeState,
): void => {
    // Iterate over guPurposeRegister callbacks
    Object.keys(guPurposeRegister).forEach((key: string): void => {
        const guCallbacks =
            guPurposeRegister[key as GuResponsivePurposeEventId];
        guCallbacks.forEach((callback: GuPurposeCallback): void =>
            callback(guState[key]),
        );
    });
    // Iterate over iabPurposeRegister callbacks
    iabPurposeRegister.forEach((callback: IabPurposeCallback): void => {
        callback(iabState);
    });
};

const onIabConsentNotification = (callback: IabPurposeCallback): void => {
    init();

    const { iabState } = getConsentState();

    callback(iabState);

    iabPurposeRegister.push(callback);
};

const onGuConsentNotification = (
    purposeName: GuResponsivePurposeEventId,
    callback: GuPurposeCallback,
): void => {
    init();

    const { guState } = getConsentState();
    const purposeState = guState[purposeName];

    callback(purposeState);

    guPurposeRegister[purposeName].push(callback);
};

export { init, onGuConsentNotification, onIabConsentNotification };

// Exposed for testing
export const _ = {
    onStateChange,
    reset: (): void => {
        initialised = false;
        // reset guPurposeRegister
        Object.keys(guPurposeRegister).forEach((key: string): void => {
            guPurposeRegister[key as GuResponsivePurposeEventId] = [];
        });
        // reset iabPurposeRegister
        iabPurposeRegister.length = 0;
    },
};
