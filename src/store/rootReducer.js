import {combineReducers, createStore} from 'redux';

import bookReducer from './reducers/bookReducer';

const rootReducer = combineReducers({bookReducer});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
