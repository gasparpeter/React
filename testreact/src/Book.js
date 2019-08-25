import React, { Component } from 'react';
// import BookList from "./BookList";


class Book extends  Component {

    state = {
        a1: true,
        a2: [],
        selected: null
    };

    onClickHandler = () => {
      this.setState({
        selected: 'title'
      }, () => {
         console.log(this.state.selected)
      });
    };

    onClickHandler2() {
        console.log('../')
    }

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