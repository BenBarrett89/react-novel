export function next () {
  return {
    type: 'NEXT'
  }
}

export function setState (state) {
  return {
    type: 'SET_STATE',
    state
  }
}
