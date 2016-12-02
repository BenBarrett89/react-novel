const update = (state, mutations) =>
  Object.assign({}, state, mutations)

const setState = (state, newState) => {
  return newState
}

const next = (state) => {
  return update(state, {itemNumber: state.itemNumber + 1})
}

const previous = (state) => {
  return update(state, {itemNumber: state.itemNumber - 1})
}

export default function (state = {itemNumber: 0}, action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state)
    case 'NEXT':
      return next(state)
    case 'PREVIOUS':
      return previous(state)
  }
  return state
}
