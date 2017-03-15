import { combineReducers } from 'redux';
import booksreducers from './reducers_books';

const rootReducer = combineReducers({
  books: booksreducers
});

export default rootReducer;
