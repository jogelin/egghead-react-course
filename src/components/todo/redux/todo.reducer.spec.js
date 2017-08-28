import todoReducer from "./todo.reducer";
import {TodoTypes} from "./todo.actions";

describe('Todo Reducer', () => {
  test('returns a state object', () => {
    const result = todoReducer(undefined, {type: 'ANYTHING'});
    expect(result).toBeDefined();
  });
  test('todo update form', () => {
    const startState = {
      currentTodo: ''
    };
    const expectedState = {
      currentTodo: 'test'
    };
    const action = {
      type: TodoTypes.TODO_FORM_UPDATE,
      payload: 'test'
    };

    const result = todoReducer(startState, action);
    expect(result).toEqual(expectedState);
  });
  test('load todos', () => {
    const startState = {
      todos: []
    };
    const expectedState = {
      todos: [
        {id: 1, name: 'one', isComplete: false},
        {id: 2, name: 'two', isComplete: true},
        {id: 3, name: 'three', isComplete: false}
      ]
    };
    const action = {
      type: TodoTypes.TODO_LOADED,
      payload: [
        {id: 1, name: 'one', isComplete: false},
        {id: 2, name: 'two', isComplete: true},
        {id: 3, name: 'three', isComplete: false}
      ]
    };

    const result = todoReducer(startState, action);
    expect(result).toEqual(expectedState);
  });
  test('adds a todo', () => {
    const startState = {
      currentTodo: 'test',
      todos: [
        {id: 1, name: 'one', isComplete: false},
        {id: 2, name: 'two', isComplete: true},
        {id: 3, name: 'three', isComplete: false}
      ]
    };
    const expectedState = {
      currentTodo: '',
      todos: [
        {id: 1, name: 'one', isComplete: false},
        {id: 2, name: 'two', isComplete: true},
        {id: 3, name: 'three', isComplete: false},
        {id: 4, name: 'added', isComplete: false}
      ]
    };
    const action = {
      type: TodoTypes.TODO_ADDED,
      payload: {id: 4, name: 'added', isComplete: false}
    };

    const result = todoReducer(startState, action);
    expect(result).toEqual(expectedState);
  });
  test('update a todo', () => {
    const startState = {
      todos: [
        {id: 1, name: 'one', isComplete: false},
        {id: 2, name: 'two', isComplete: true},
        {id: 3, name: 'three', isComplete: false}
      ]
    };
    const expectedState = {
      todos: [
        {id: 1, name: 'one', isComplete: false},
        {id: 2, name: 'two', isComplete: false},
        {id: 3, name: 'three', isComplete: false}
      ]
    };
    const action = {
      type: TodoTypes.TODO_UPDATED,
      payload: {id: 2, name: 'two', isComplete: false}
    };

    const result = todoReducer(startState, action);
    expect(result).toEqual(expectedState);
  })
});