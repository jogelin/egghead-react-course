import {MessageTypes} from "./message.actions";
import {TodoTypes} from "../../todo/redux/todo.actions";

export default function(state = '', action) {
  switch (action.type) {
    case MessageTypes.SHOW_MESSAGE:
      return action.payload;
    case TodoTypes.TODO_ADDED:
    case TodoTypes.TODO_UPDATED:
    case TodoTypes.TODO_REMOVED:
    case TodoTypes.TODO_LOADED:
      return '';
    default:
      return state;
  }
};
