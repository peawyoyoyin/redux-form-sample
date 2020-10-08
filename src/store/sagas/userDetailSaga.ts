import { call, put, takeEvery } from "redux-saga/effects";
import { userService } from "../../mockery/UserService";
import { actionCreators, FetchUserDetailAction } from "../users/usersAction";
import { UserDetail } from "../users/usersState";

export function* fetchUserDetail(action: FetchUserDetailAction) {
  yield put(actionCreators.setUserDetail({ userDetail: null }));
  const userDetail: UserDetail = yield call(userService.getUserById, action.payload.id);
  yield put(actionCreators.setUserDetail({ userDetail }));
}

export function* userDetailSaga() {
  yield takeEvery('FETCH_USER_DETAIL', fetchUserDetail);
}
