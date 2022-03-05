import {
    take,
    takeEvery,
    takeLatest,
    put,
    all,
    delay,
    fork,
    call,
} from "redux-saga/effects";

import {
    loadUsersSuccess,
    loadUsersError,
    createUserSuccess,
    createUserError,
} from "./actions";
import { createUserApi, loadUsersApi } from "./api";
import { LOAD_USERS_REQUEST, CREATE_USER_REQUEST } from "./types";

export function* onLoadUsersRequestAsync() {
    try {
        const response = yield call(loadUsersApi);
        yield put(loadUsersSuccess(response.data));
    } catch (error) {
        yield put(loadUsersError(error));
    }
}

export function* onCreateUserRequestAsync(action) {
    try {
        const response = yield call(createUserApi, action.payload);
        console.log("create", response.data);
        yield put(createUserSuccess(response.data));
    } catch (error) {
        console.log(error);
    }
}

export function* onLoadUsers() {
    yield takeEvery(LOAD_USERS_REQUEST, onLoadUsersRequestAsync);
}
export function* onCreateUser() {
    yield takeLatest(CREATE_USER_REQUEST, onCreateUserRequestAsync);
}

const userSagas = [fork(onLoadUsers), fork(onCreateUser)];

export default function* rootSaga() {
    yield all([...userSagas]);
}
