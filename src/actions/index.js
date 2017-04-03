export function selectBook(book) {
  // selectBook is an action creator is needs to return an action
  // an object with a type property
  // every action must have a type that describes the pourpose of the action
  return{
    type: 'BOOK_SELECTED',
    payload: book
  }
}
