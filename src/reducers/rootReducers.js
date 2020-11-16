import {combineReducers} from 'redux';
import {reducer as oidcReducer} from 'redux-oidc';
import sampleReducer from './sampleReducer';

import {enableBatching} from 'redux-batched-actions';

const rootReducer = combineReducers({
    oidcReducer,
    sampleReducer: sampleReducer('', {})
});

export default enableBatching((rootReducer));