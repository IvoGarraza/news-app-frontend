// src/store/index.js
import { combineReducers, createStore } from 'redux';
import newsReducer from './Reducers/newsReducer';


const rootReducer = combineReducers({
  newsState: newsReducer,
});

const store = createStore(rootReducer);

export default store;