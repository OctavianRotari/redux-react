import { combineReducers } from 'redux';
import booksreducers from './reducers_books';

const rootReducer = combineReducers({
  book: booksreducers
});

export default rootReducer;
