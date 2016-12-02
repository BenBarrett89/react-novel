export const next = () => {
  return {
    type: 'NEXT'
  }
}

export const previous = () => {
  return {
    type: 'PREVIOUS'
  }
}

export const setState = (newState) => {
  return {
    type: 'SET_STATE',
    newState
  }
}
