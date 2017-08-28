export const getFilteredTodos = (todos, filter) => {
  switch(filter) {
    case 'active': return todos.filter(t => !t.isComplete);
    case 'complete': return todos.filter(t => t.isComplete);
    default: return todos;
  }
};
