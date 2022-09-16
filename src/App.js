
import './App.css';

const App = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}
const Book = () => {
  return (
    <article className='book'>
      <img src="https://m.media-amazon.com/images/I/51IbIHvhoPL._SY346_.jpg" alt="" />
      <h1>金瓶梅新修完整未刪減版</h1>
      <h4> 蘭陵笑笑生 明</h4>
    </article>
  )
}


export default App;
