import React from 'react';
import Book_34 from './book_34';
import {data} from './data'
const booklist_34 = () => {
  return (
    <section className="booklist">
      {data.map((book, index) => {
        const { id, img, title, author } = book;
        return (
          <Book_34
            key={id}
            img={book.img}
            title={book.title}
            author={book.author}
          />
        );
      })}
    </section>
  );
};

export default booklist_34;
