import {GET_USER_LIST, DROPDOWN_ACTION, TOGGLE_SIDEBAR, GET_LAYOUT} from '../action/userAction'

let initalState = {
    title: "Avana Solution for digital",
    togle:  false
}

const User = (state = initalState, action) => {
    switch(action.type) {
        case GET_USER_LIST:
            return {
                ...state,
                user: action
            }
        case DROPDOWN_ACTION:
            return {
                user: action.data
            }
        case TOGGLE_SIDEBAR:
            return {
                toogle: action.data
            }
        case GET_LAYOUT:
            return {
                layout: action.data,
                status: action.status
            }
            default:
             return state
    }
}

export default User;