import {TodoTypes} from "./todo.actions";

const initState = {
  todos: [],
  currentTodo: ''
};

export default function (state = initState, action) {
  switch (action.type) {
    case TodoTypes.TODO_FORM_UPDATE:
      return {...state, currentTodo: action.payload};
    case TodoTypes.TODO_LOADED:
      return {...state, todos: action.payload};
    case TodoTypes.TODO_ADDED:
      return {...state, currentTodo: '', todos: [...state.todos, action.payload]};
    case TodoTypes.TODO_UPDATED:
      return {
        ...state,
        todos: state.todos
          .map(t => t.id === action.payload.id ? action.payload : t)
      };
    case TodoTypes.TODO_REMOVED:
      return {
        ...state,
        todos: state.todos
          .filter(t => t.id !== action.payload)
      };
    default:
      return state;
  }
};
