import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook }  from '../store/actions/index';
//make sure action created flows through all reducers
import { bindActionCreators } from 'redux';


class BookDetail extends Component {

  render() {
    if(!this.props.book) {
      return (
        <div className="mx-auto">Select a book to get started!</div>
      )
    }
    return (
      <div className="col-md-4 border border-secondary p-0 hvr-curl-top-right bg-light mx-auto">
        <div className="text-light book-deets-header">
        <h3 className="book-deets-header"> Details for: </h3>
        <h4 className="title">{this.props.book.title}</h4>
        </div>
        <div className="pl-4">{this.props.book.pages} pages</div>
        <div className="pl-4">Author: {this.props.book.author}</div>
        <div className="pl-4">Price: ${this.props.book.price} USD</div>
        <div className="pl-4">Published: {this.props.book.published_date} by {this.props.book.publisher}</div>
        <div className="pl-4">Genre: {this.props.book.category.join(", ")} </div>
      </div>
    );
  }
}

//activeBook reducer creates activeBook state.
function mapStateToProps(state) {
  return {
    book: state.activeBook,
  };
}


export default connect(mapStateToProps)(BookDetail);
