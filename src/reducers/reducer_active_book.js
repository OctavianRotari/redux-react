// state argument is not application state only
// the state this reducer is responsile for the state that was
// previously created
export default function(state = null, action) {
  // if I dont care about the current action just pass the state;
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;
}
