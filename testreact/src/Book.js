import React, { Component } from 'react';
// import BookList from "./BookList";


class Book extends  Component {

    constructor(props) {
        super(props)
        console.log(this.props.book);
    }

 render() {
        const {title, isbn} = this.props.book;

   return(
        <div>
            <h2>{this.props.book.title}</h2>
            <p>{this.props.book.isbn}</p>
        </div>
   )
 }
};

export default Book;