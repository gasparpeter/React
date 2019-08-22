import React, { Component } from 'react';

class BookList extends Component{

    constructor() {
        super();
        console.log(1)
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
            <div>Book List</div>
    );
    }

}

export default BookList;