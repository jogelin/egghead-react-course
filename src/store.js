import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

import todoReducer from './components/todo/redux/todo.reducer';
import messageReducer from './components/message/redux/message.reducer';

const reducer = combineReducers({
  todo: todoReducer,
  message: messageReducer
});

export default createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);