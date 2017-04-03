import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
// the action end up flowing to all the reducers;
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return(
        <li
          onClick={() => this.props.selectBook(book)}
          key={book.title}
          className="list-group-item">
          {book.title}
        </li>
      )
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  //if the state changes the container will re-render in this case BookList
  //whatever is returned will show up as props inside of booklist
  return {
    books: state.books
  };
}

//anythiing returned from this function will end up as props on the BookList container;
function mapDispatchToProps(dispatch) {
  //whenever select book is called the result should be passed to all of our reducers
  //dispatch send whats returned and it passes it to all the reducers
  return bindActionCreators({ selectBook: selectBook}, dispatch);
}

// Promote BookList from a componetn to a container it nees to know
// about this new dispatch method selectBook. Make it available as Prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
