import { CREATE_CONTACT, FETCH_CONTACT } from "../../actions/types";

const defaultState = {
    contacts: [],
}

const reducer = (state = defaultState.contacts, action) => {
    switch (action.type) {
        case CREATE_CONTACT:
            return [...state, action.payload];
        case FETCH_CONTACT:
            return action.payload;
        default:
            return state;
    }
}

export default reducer;