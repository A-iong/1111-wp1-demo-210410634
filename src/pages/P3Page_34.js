import { useState } from 'react';
import Product_34 from '../components/Product_34';
import midterm_data_34 from '../midterm_data_34';

const P3Page_34 = () => {
  const [products, setProducts] = useState(midterm_data_34);
  console.log('products', products);
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
              <button className="company-btn">all</button>

              <button className="company-btn">ikea</button>

              <button className="company-btn">marcos</button>

              <button className="company-btn">caressa</button>
            </article>
          </div>
        </div>
        <div className="products-right">
          <div className="products-container">
            { products.map( (products ) => {
              const { id, img, name,price } = products;
              return (
               <Product_34 key={id} img={img} name={name} price={price} />
              )
            })}
            

          </div>
        </div>
      </section>
    </>
  );
};
export default P3Page_34;
