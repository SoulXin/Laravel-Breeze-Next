import * as actionType from './Type';

export const set_login_action = (data) => ({
    type : actionType.SET_LOGIN,
    data
});

export const set_loading_action = (data) => ({
    type : actionType.SET_LOADING,
    data
});

export const set_sidebar_show_action = (data) => ({
    type : actionType.SET_SIDEBAR_SHOW,
    data
});

export const set_sidebar_unfoldable = (data) => ({
    type : actionType.SET_SIDEBAR_UNFOLDABLE,
    data
});