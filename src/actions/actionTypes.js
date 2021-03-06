export const LOAD_INIT_DATA = 'LOAD_INIT_DATA';
export const LOAD_INIT_DATA_SUCCESS = 'LOAD_INIT_DATA_SUCCESS';
export const APP_STORE_ERROR = 'APP_STORE_ERROR';
export const REQUEST_FAILED = 'REQUEST_FAILED';


export const API_SUFFIX = {
    SUCCESS: '_SUCCESS',
    IN_PROGRESS: '_IN_PROGRESS',
    FAILURE: '_FAILURE'
};

export function appStoreError(error) {
    return {
        type: APP_STORE_ERROR,
        payload: {
            ...error
        }
    };
}