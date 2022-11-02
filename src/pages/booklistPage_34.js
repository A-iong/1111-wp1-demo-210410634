import React from 'react';
import Book_34 from '../components/w02-booklist/book_34';
import {booklist_data} from '../booklist_data'

const booklistPage_34 = () => {
  return (
    <section className="booklist">
      {booklist_data.map((book, index) => {
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

export default booklistPage_34;
