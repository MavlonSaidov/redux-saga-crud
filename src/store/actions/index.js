import {
    CREATE_USER_ERROR,
    CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS,
    LOAD_USERS_ERROR,
    LOAD_USERS_REQUEST,
    LOAD_USERS_SUCCESS,
} from "../types";

export const loadUsersRequest = () => {
    return {
        type: LOAD_USERS_REQUEST,
    };
};
export const loadUsersSuccess = (payload) => {
    return {
        type: LOAD_USERS_SUCCESS,
        payload: payload,
    };
};
export const loadUsersError = () => {
    return {
        type: LOAD_USERS_ERROR,
    };
};

export const createUserRequest = (values) => {
    return {
        type: CREATE_USER_REQUEST,
        payload: values,
    };
};
export const createUserSuccess = (user) => {
    return {
        type: CREATE_USER_SUCCESS,
        payload: user,
    };
};
export const createUserError = () => {
    return {
        type: CREATE_USER_ERROR,
    };
};
