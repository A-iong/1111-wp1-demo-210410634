import './App_34.css';

/*
const firstBook = {
  img: 'https://m.media-amazon.com/images/I/51IbIHvhoPL._SY346_.jpg',
  title: '金瓶梅新修完整未刪減版',
  author: '蘭陵笑笑生 明',
};
const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/51VC+Vru96L._SX320_BO1,204,203,200_.jpg',

  title: 'It Starts with Us: A Novel (2) (It Ends with Us) ',

  author: 'Colleen Hoover  ',
};

const thirdBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/41fT9sjplKL._SX320_BO1,204,203,200_.jpg',

  title: 'Ugly Love: A Novel',

  author: 'Colleen Hoover  ',
};
*/

const data = [
  {
    id: 1,
    img: 'https://m.media-amazon.com/images/I/51IbIHvhoPL._SY346_.jpg',
    title: '金瓶梅新修完整未刪減版',
    author: '蘭陵笑笑生 明',
  },
  {
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/51VC+Vru96L._SX320_BO1,204,203,200_.jpg',

    title: 'It Starts with Us: A Novel (2) (It Ends with Us) ',

    author: 'Colleen Hoover  ',
  },
  {
    id: 3,
    img: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/41fT9sjplKL._SX320_BO1,204,203,200_.jpg',

    title: 'Ugly Love: A Novel',

    author: 'Colleen Hoover  ',
  },
  {
    id: 4,
    img: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/41RA5dSAdTL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
    title: 'Like a Rolling Stone: A Memoir Hardcover',
    author: 'Jann S. Wenner ',
  },
  {
    id: 5,
    img: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/41D7oMcX9cL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
    title: 'Im Glad My Mom Died',
    author: 'Jennette McCurdy ',
  },
];

const App_34 = () => {
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
      {/*<Book_34
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book_34
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
      <Book_34
        img={thirdBook.img}
        title={thirdBook.title}
        author={thirdBook.author}
  />*/}
    </section>
  );
};
const Book_34 = ({ img, title, author }) => {
  //console.log('props',props);
  //const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

export default App_34;
