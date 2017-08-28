export const MessageTypes = {
  SHOW_MESSAGE: 'SHOW_MESSAGE'
};

export const showMessage = (msg) => ({type: MessageTypes.SHOW_MESSAGE, payload: msg});
