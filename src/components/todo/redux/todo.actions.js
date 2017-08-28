import {createTodo, deleteTodo, getTodos, updateTodo} from "../../../lib/todoService";
import {showMessage} from "../../message/redux/message.actions";

export const TodoTypes = {
  TODO_FORM_UPDATE: 'TODO_FORM_UPDATE',
  TODO_LOADED: 'TODO_LOADED',
  TODO_ADDED: 'TODO_ADDED',
  TODO_UPDATED: 'TODO_UPDATED',
  TODO_REMOVED: 'TODO_REMOVED'
};

export const formUpdate = (val) => ({type: TodoTypes.TODO_FORM_UPDATE, payload: val});
export const loaded = (todos) => ({type: TodoTypes.TODO_LOADED, payload: todos});
export const added = (todo) => ({type: TodoTypes.TODO_ADDED, payload: todo});
export const updated = (todo) => ({type: TodoTypes.TODO_UPDATED, payload: todo});
export const removed = (todoId) => ({type: TodoTypes.TODO_REMOVED, payload: todoId});

export const loadTodos = () => {
  return (dispatch) => {
    dispatch(showMessage('Loading Todos'));
    getTodos()
      .then(todos => dispatch(loaded(todos)));
  }
};
export const saveTodo = (name) => {
  return (dispatch) => {
    dispatch(showMessage('Saving Todo'));
    createTodo(name)
      .then(res => dispatch(added(res)));
  }
};
export const toggleTodo = (id) => {
  return (dispatch, getState) => {
    dispatch(showMessage('Saving Todo Update'));
    const {todos} = getState().todo;
    const todo = todos.find(todo => todo.id === id);
    const toggled = {...todo, isComplete: !todo.isComplete};
    updateTodo(toggled)
      .then(res => dispatch(updated(res)));
  }
};
export const removeTodo = (id) => {
  return (dispatch) => {
    dispatch(showMessage('Removing Todo'));
    deleteTodo(id)
      .then(() => {
        dispatch(removed(id));
      });
  }
};
