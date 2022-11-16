import { useState } from 'react';
import Product_34 from '../components/Product_34';
import midterm_data_34 from '../midterm_data_34';

const P4Page_34 = () => {
  const [products, setProducts] = useState(midterm_data_34);
  console.log('products', products);
  
  const filterItems = (category) => {

    if (category === 'all') {
      setProducts(midterm_data_34);
    } else {
      const newProducts = midterm_data_34.filter(
        (products) => products.category === category
      );
      setProducts(newProducts);
    }

  };
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
              <button className="company-btn"
              onClick={()=> filterItems('All')}>all</button>
              <button className="company-btn"
              onClick={()=> filterItems('ikea')}>ikea</button>
              <button className="company-btn"
              onClick={()=> filterItems('marcos')}>marcos</button>
              <button className="company-btn"
              onClick={()=> filterItems('caressa')}>caressa</button>
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
export default P4Page_34;
