export const GET_USER_LIST = "Get_User_List";
export const DROPDOWN_ACTION = "DROPDOWN_ACTION";
export const TOGGLE_SIDEBAR = "TOOGLE_SIDEBAR";
export const GET_LAYOUT = "GET_LAYOUT"

export const DropdownAction = (data) => {
    return (dispatch) => {
        dispatch({
            type: DROPDOWN_ACTION,
            data: data
        })
    };
}


export const ToogleSidebar = (data) => {
    console.log(data)
    return (dispatch) => {
        dispatch({
            type: TOGGLE_SIDEBAR,
            data: data
        })
    }
}

export const GetLayout = (data, status) => {
    return (dispatch) => {
        dispatch({
            type: GET_LAYOUT,
            data: data,
            status: status
        })
    }
}


