import {UNDO, REDO, RESET_STORE} from './actions'

// narrow possible saves up to 5 possibilities
// prevent from removing when there is nothing to remove
export function undoRedo(reducer) {
  const initialState = {
    past: [],
    present: reducer(undefined, {}),
    future: [],
  }

  return function(state = initialState, action) {
    const {past, present, future} = state

    switch (action.type) {
      case UNDO: {
        const previous = past[past.length - 1]
        const newPast = past.slice(0, past.length - 1)
        return {
          past: newPast,
          present: previous,
          future: [present, ...future],
        }
      }
      case REDO: {
        const next = future[0]
        const newFuture = future.slice(1)
        return {
          past: [...past, present],
          present: next,
          future: newFuture,
        }
      }
      case RESET_STORE: {
        return initialState
      }
      default: {
        // Delegate handling the action to the passed reducer
        const newPresent = reducer(present, action)
        if (present === newPresent) {
          return state
        }

        return {
          past: [...(past.length === 5 ? past.slice(1) : past), present], // to store only 5 fresh steps
          present: newPresent,
          future: [],
        }
      }
    }
  }
}
