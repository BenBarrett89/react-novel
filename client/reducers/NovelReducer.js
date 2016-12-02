function setState (state, newState) {
  return newState
}

function next (state) {
  return state
}

export default function (state = {test: 'Initial'}, action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state)
    case 'NEXT':
      return next(state)
  }
  return state
}
