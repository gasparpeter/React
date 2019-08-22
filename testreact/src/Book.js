import React from 'react';

const BookTitle = (props) => {
  return <div>{props.title}</div>
};

const Book = (props) => {
  return (<div>
    <BookTitle title = {props.title}/>
    </div>
)
};

export default Book;