// reducer
// action { type } => switch case

const store = (() => {
  let state
  return {
    getState() {
      return state
    },
    dispatch(action) {
      state = reducer(state, action)
    }
  }
})()

const initialState = { todos: [] }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addTodo':
      return {
        ...state,
        todos: [action.data, ...state.todos]
      }
    case 'updateTodo': {
      const newTodos = [...state.todos]
      newTodos.splice(action.targetIndex, 1, action.data)
      return {
        ...state,
        todos: newTodos
      }
    }
    case 'removeTodo': {
      const newTodos = [...state.todos]
      newTodos.splice(action.targetIndex, 1)
      return {
        ...state,
        todos: newTodos
      }
    }
    default:
      return state
  }
}

store.dispatch({ type: 'addTodo', data: 'new1' })
console.log(store.getState())

store.dispatch({ type: 'addTodo', data: 'new2' })
console.log(store.getState())

store.dispatch({ type: 'addTodo', data: 'new3' })
console.log(store.getState())

store.dispatch({ type: 'updateTodo', targetIndex: 0, data: 'updated' })
console.log(store.getState())

store.dispatch({ type: 'removeTodo', targetIndex: 2 })
console.log(store.getState())
