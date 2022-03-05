import { CREATE_USER_SUCCESS, LOAD_USERS_SUCCESS } from "../types";

const initialState = {
    initialForm: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        gender: "male",
        developer: "yes",
    },
    isEdited: false,
    dataList: [],
    // uniId: null,
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_USERS_SUCCESS:
            return {
                ...state,
                dataList: action.payload,
            };
        case CREATE_USER_SUCCESS:
            return {
                ...state,
                dataList: [...state.dataList, action.payload],
            };
        default:
            return state;
    }
};

export default rootReducer;
