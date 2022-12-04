import { useEffect, useState } from 'react';
import Product_34 from '../components/Product_34';
import data_34 from './data_34';

const All_Page = () => {
  const [products, setProducts] = useState(data_34);

  return (
    <>
      <section className="main-section">
        <div className="filter-left">
          <div className="left-content">
            <form className="input-form">
              <input
                type="text"
                className="search-input"
                placeholder="search..."
              />
            </form>
            <h4>Company</h4>
            <article className="companies">
              <button className="company-btn">All</button>
              <button className="company-btn">Mercedes-Banz</button>
              <button className="company-btn">BMW</button>
              <button className="company-btn">AUDI</button>
              <button className="company-btn">Porsche</button>
            </article>
          </div>
        </div>
        <div className="products-right">
          <div className="products-container">
            {products.map((products) => {
              const { id, img, name, price } = products;
              return (
                <Product_34 key={id} img={img} name={name} price={price} />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default All_Page;
