import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { usersReducer } from './users/usersReducer';
import { UsersState } from './users/usersState';
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './sagas';

export interface StoreState {
  users: UsersState
}

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  users: usersReducer,
  form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

declare global {
  interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function; }
}

export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(rootSaga);
