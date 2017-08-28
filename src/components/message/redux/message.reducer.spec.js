import messageReducer from "./message.reducer";
import {MessageTypes} from "./message.actions";

describe('Message Reducer', () => {
  test('returns a state object', () => {
    const result = messageReducer(undefined, {type: 'ANYTHING'});
    expect(result).toBeDefined();
  });
  test('show message', () => {
    const startState = '';
    const expectedState = 'test';
    const action = {
      type: MessageTypes.SHOW_MESSAGE,
      payload: 'test'
    };

    const result = messageReducer(startState, action);
    expect(result).toEqual(expectedState);
  });
});