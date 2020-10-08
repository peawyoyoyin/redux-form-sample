import { Reducer } from "redux";
import { UsersAction } from "./usersAction";
import { UsersState } from "./usersState";

const defaultUserState: UsersState = {
  users: null,
  userDetail: null
};

export const usersReducer: Reducer<UsersState, UsersAction> = (state = defaultUserState, action) => {
  switch (action.type) {
    case "SET_USERS":
      return {
        ...state,
        users: action.payload.users
      }
    case "SET_USER_DETAIL":
      return {
        ...state,
        userDetail: action.payload.userDetail
      }
    default:
      return state;
  }
}
