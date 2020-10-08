import { Action, createActionCreator } from "../common/actions";
import { User, UserDetail } from "./usersState";

const SET_USERS = 'SET_USERS';
const FETCH_USERS = 'FETCH_USERS';

const SET_USER_DETAIL = 'SET_USER_DETAIL';
const FETCH_USER_DETAIL = 'FETCH_USER_DETAIL';

type SetUsersAction = Action<typeof SET_USERS, { users: User[] }>;
type FetchUsersAction = Action<typeof FETCH_USERS>;

type SetUserDetailAction = Action<typeof SET_USER_DETAIL, { userDetail: UserDetail | null }>;
export type FetchUserDetailAction = Action<typeof FETCH_USER_DETAIL, { id: number }>;

export type UsersAction = SetUsersAction | FetchUsersAction | SetUserDetailAction | FetchUserDetailAction;
export const actionCreators = {
  setUsers: createActionCreator<SetUsersAction>(SET_USERS),
  fetchUsers: createActionCreator<FetchUsersAction>(FETCH_USERS),
  setUserDetail: createActionCreator<SetUserDetailAction>(SET_USER_DETAIL),
  fetchUserDetail: createActionCreator<FetchUserDetailAction>(FETCH_USER_DETAIL)
};
