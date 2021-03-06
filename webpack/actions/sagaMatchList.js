import { takeLatest } from 'redux-saga/effects';

import { matchesGetHideListTypes, getMatchListTypes } from './types';
import { createFetchItemsList } from './sagaHelpers';

const matchesUrlPath = '/matches/list';

function* matchListSaga() {
  yield takeLatest(
    matchesGetHideListTypes.get,
    createFetchItemsList(getMatchListTypes, matchesUrlPath)
  );
}

export default matchListSaga;
