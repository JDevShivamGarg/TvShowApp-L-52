import { applyMiddleware, combineReducers , createStore} from "redux";
import ShowReducer from "./reducers/Show";
import createSagaMiddleware from "redux-saga";
import { FETCH_SHOW_DETAILS, SHOW_QUERY_CHANGED } from "./actions/Show";
import { fetchShowDetailsSaga, fetchShows } from "./sagas/Show";
import { takeEvery, takeLatest } from "redux-saga/effects";

const reducer = combineReducers({
    shows:ShowReducer
});

function* rootSaga(){
        yield takeLatest(SHOW_QUERY_CHANGED,fetchShows);
        yield takeLatest(FETCH_SHOW_DETAILS, fetchShowDetailsSaga);
}

const sagaMiddleware = createSagaMiddleware()


const store = createStore(reducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
export type State = ReturnType<typeof reducer>
export default store;