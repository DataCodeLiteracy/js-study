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

const reducerMap = {
  addTodo: (state, action) => ({
    ...state,
    todos: [action.data, ...state.todos]
  }),
  updateTodo: (state, action) => {
    const newTodos = [...state.todos]
    newTodos.splice(action.targetIndex, 1, action.data)
    return {
      ...state,
      todos: newTodos
    }
  },
  removeTodo: (state, action) => {
    const newTodos = [...state.todos]
    newTodos.splice(action.targetIndex, 1)
    return {
      ...state,
      todos: newTodos
    }
  }
}

const reducer = (state = initialState, action) => {
  return reducerMap[action.type]?.(state, action) || state
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
