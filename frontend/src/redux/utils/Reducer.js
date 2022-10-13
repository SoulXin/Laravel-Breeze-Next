import * as actionType from './Type';

const initialState = {
    login: false,
    loading: false,
    sidebarShow: true,
    sidebarUnfoldable: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SET_LOGIN:
            return {
                ...state,
                login: action.data
            };
        case actionType.SET_LOADING:
            return {
                ...state,
                loading: action.data
            };
        case actionType.SET_SIDEBAR_SHOW: 
            return {
                ...state,
                sidebarShow: action.data
            }
        case actionType.SET_SIDEBAR_UNFOLDABLE: 
            return {
                ...state,
                sidebarUnfoldable: action.data
            }
        default:
            return state
    }
};
export default appReducer;
