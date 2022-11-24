import { userTypes } from "../types/userType";

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case userTypes.USER_REGISTER:
      return {
        ...action.payload,
      };

    case userTypes.USER_LOGIN:
      return {
        ...state,
        ...action.payload,
      };
    case userTypes.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
