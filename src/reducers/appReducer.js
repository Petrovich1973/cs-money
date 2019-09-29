import {actionTypes as types,} from '../constants';

const initialState = {
    currentStep: null,
    modals: [],
    hideErrors: [],
    errors: [],
    spinner: false,
};

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case types.APP_UPDATE: {
            return {
                ...state,
                ...action.payload,
            };
        }
        default:
            return state
    }
}