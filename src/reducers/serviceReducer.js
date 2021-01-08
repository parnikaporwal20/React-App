import { UPDATE_SERVICES } from "../actions/serviceAction";



export const initialState = {
    services: []
}

export default function serviceReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_SERVICES:
            return { services: action.services }
        default:
            return state;
    }
}