import React, { Component } from 'react';
// import BookList from "./BookList";


class Book extends  Component {

    onClickHandler = () => {
      console.log('../')
    };

 render() {
        const {title, isbn} = this.props.book;

   return(
        <div>
            <h2 onClick={this.onClickHandler}>{title}</h2>
            <p>{isbn}</p>
        </div>
   )
 }
};

export default Book;