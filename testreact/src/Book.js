import React from 'react';

const BookTitle = (props) => {
  return <div>{props.children}</div>
};

const Book = (props) => {
  return (<div>
    <BookTitle>{props.title}</BookTitle>
    </div>
)
};

export default Book;