import { createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import greetingReducer from './greetings/greetings'

const store = createStore(greetingReducer, applyMiddleware(thunk, logger));

export default store;