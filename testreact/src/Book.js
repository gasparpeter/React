import React, { Component } from 'react';
// import BookList from "./BookList";
import BookTitle from './BookTitle';

class Book extends  Component {

    state = {
        a1: true,
        a2: [],
        selected: null,
        title: this.props.book.title
    };

    onClickHandler = (title) => (event) => {
      this.setState({
        selected: title
      }, () => {
         console.log(this.state.selected)
      });
    };

componentWillReceiveProps(nextProps) {
    this.setState({
        title: nextProps.book.title
    })
}

    render() {
        const {title, isbn} = this.props.book;

   return(
        <div>
            <BookTitle title={title} onClickFunc =
            {this.onClickHandler} />
            <p>{isbn}</p>
        </div>
   )
 }
}

export default Book;