import { call, put, takeEvery } from "redux-saga/effects";
import { userService } from "../../mockery/UserService";
import { actionCreators } from '../users/usersAction';
import { User } from "../users/usersState";

export function* fetchUsers() {
  const users: User[] = yield call(userService.getUsers);
  yield put(actionCreators.setUsers({ users }));
}

export function* usersSaga() {
  yield takeEvery('FETCH_USERS', fetchUsers);
}
