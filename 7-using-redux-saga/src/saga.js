import { takeLatest, call, put } from 'redux-saga/effects';

import { REQUEST_CURRENT_TIME, SET_CURRENT_TIME } from './action.js';

function callTimeAPI() {
  return fetch('http://worldclockapi.com/api/json/est/now')
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return null;
    })
    .catch(() => (null));
}

function* requestCurrentTime(action) {
  const info = yield call(callTimeAPI);
  yield put({ type: SET_CURRENT_TIME, currentTime: info.currentDateTime });
}


function* saga() {
  yield [
    takeLatest(REQUEST_CURRENT_TIME, requestCurrentTime),
  ];
}

export default saga;
