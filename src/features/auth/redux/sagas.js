import { takeEvery, call, put, select } from "redux-saga/effects"
import {
  login_success,
  get_user_details_success,
  update_quick_profile,
  toggleCurrentView,
  getUserId,
} from "./authSlice"
import { getAPIUrl } from "../../../utils/index"
import { databaseRef, rsf } from "../../../utils/firebase"
import { toast } from "react-toastify"

const getUserDetais = async (uid) => {
  let url = getAPIUrl()
  url = `${url}/get_user?uid=${uid}`
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  })
  return await response.json()
}

function* loginWithFirebase({ payload }) {
  try {
    const response = yield call(getUserDetais, payload.uid)
    yield put({
      type: get_user_details_success.type,
      payload: response,
    })
    const data = yield call(
      rsf.database.read,
      databaseRef.child("users").child(payload.uid).child("quickprofile")
    )
    yield put({
      type: get_user_details_success.type,
      payload: { quickprofile: data },
    })
  } catch (error) {}
}

function* updateQuickProfileSaga({ payload }) {
  try {
    const userId = yield select(getUserId)

    databaseRef.child("users").child(userId).update(payload)
    toast.success("Profile updated successfully!")
    yield put({
      type: toggleCurrentView.type,
    })
  } catch (error) {}
}

function* authSagas() {
  yield takeEvery(login_success.type, loginWithFirebase)
  yield takeEvery(update_quick_profile.type, updateQuickProfileSaga)
}

export default authSagas
