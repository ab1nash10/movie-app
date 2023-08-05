//* Reducer don't change the state , it just return the new state without mutating the old state. It is a pure function. It just pass the state from acion to store without mutating the current state.
export default function movies(state = [], action) {
  if (action.type === "ADD_MOVIES") {
    return action.movies;
  }
  return state;
}
