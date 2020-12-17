import { SET_ALERT, REMOUVE_ALERT } from "../actions/types";
const initialState = [];

export default function(state = initialState , action){
    const {type , paylod} = action;
    switch (type) {
        case SET_ALERT:
            return [...state, payload];
    case REMOUVE_ALERT: 
    return  state.filter(alert => alert.id !== paylod);
        default:
        return state;
    }
}