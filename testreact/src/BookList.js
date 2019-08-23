import React, { Component } from 'react';

class BookList extends Component{

    constructor() {
        super();
        console.log(1)
    }

    state = {
      books: [
          {
              title: 'Avatar',
              isbn: 'abc123'
          },
          {
              title:'Star Wars',
              isbn:'abc456'
          },
          {
              title: 'Peaceful',
              isbn: 'abc789'
          }
      ]
    }

    componentWillMount() {
        console.log(2);
    }

    componentDidMount() {
        console.log(4);
    }

    render() {
        console.log(3);
        return (
            <div>
            {this.state.books.map( (book, index) => {
               return <div key = {index}>{book.title}</div>
            }) }
            </div>
    );
    }

}

export default BookList;