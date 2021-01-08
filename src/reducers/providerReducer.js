import { UPDATE_PROVIDERS } from "../actions/providerAction";

export const initialState = {
    providers: []
}

export default function providerReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_PROVIDERS:
            return { providers: action.providers }
        default:
            return state;
    }
}