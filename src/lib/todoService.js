const baseUrl = process.env.REACT_APP_BASE_URL;

export const getTodos = () => {
  return fetch(baseUrl)
    .then(res => res.json())
};

export const createTodo = (name) => {
  return fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    body: JSON.stringify({id: new Date().getTime(), name: name, isComplete: false})
    })
    .then(res => res.json())
};

export const updateTodo = (todo) => {
  return fetch(`${baseUrl}/${todo.id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    })
    .then(res => res.json())
};

export const deleteTodo = (id) => {
  return fetch(`${baseUrl}/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
};
